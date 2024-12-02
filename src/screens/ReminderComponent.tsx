import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Switch,
  StyleSheet,
  Alert,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { SafeAreaView } from 'react-native-safe-area-context';
import PushNotification from 'react-native-push-notification';
import { Picker } from '@react-native-picker/picker';
import Voice from 'react-native-voice';

const ReminderComponent = () => {
  const [reminderType, setReminderType] = useState('');
  const [time, setTime] = useState(new Date());
  const [isEveryday, setIsEveryday] = useState(false);
  const [isWeekly, setIsWeekly] = useState(false);
  const [duration, setDuration] = useState('');
  const [reminders, setReminders] = useState([]);
  const [isRecording, setIsRecording] = useState(false);

  const handleAddReminder = () => {
    if (!reminderType) {
      Alert.alert('Validation Error', 'Please choose the type of reminder.');
      return;
    }

    const newReminder = {
      type: reminderType,
      time,
      isEveryday,
      isWeekly,
      duration: parseInt(duration, 10),
    };
    setReminders([...reminders, newReminder]);
    scheduleNotification(newReminder);
    Alert.alert('Success', 'Reminder added successfully!');
  };

  const scheduleNotification = (reminder) => {
    const { time, isEveryday, isWeekly, duration } = reminder;
    let repeatType = null;

    if (isEveryday) {
      repeatType = 'day';
    } else if (isWeekly) {
      repeatType = 'week';
    }

    const notificationTime = new Date();
    notificationTime.setHours(time.getHours());
    notificationTime.setMinutes(time.getMinutes());
    notificationTime.setSeconds(0);

    if (notificationTime < new Date()) {
      notificationTime.setDate(notificationTime.getDate() + 1);
    }

    PushNotification.localNotificationSchedule({
      message: reminder.type,
      date: notificationTime,
      repeatType: repeatType,
      repeatTime: duration,
    });
  };

  const startVoiceRecognition = () => {
    Voice.onSpeechResults = (event) => {
      if (event.value && event.value.length > 0) {
        setReminderType(event.value[0]);
      }
    };

    Voice.onSpeechError = (error) => {
      Alert.alert('Error', error.message);
    };

    setIsRecording(true);
    Voice.start('en-US'); // Supports multiple languages
  };

  const stopVoiceRecognition = () => {
    Voice.stop();
    setIsRecording(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Smart Reminder</Text>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Reminder Type:</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={reminderType}
              onValueChange={(itemValue) => setReminderType(itemValue)}
            >
              <Picker.Item label="Choose the type of reminder" value="" />
              <Picker.Item label="Pill" value="pill" />
              <Picker.Item label="Appointment" value="appointment" />
              <Picker.Item label="Exercise" value="exercise" />
            </Picker>
          </View>

          <TouchableOpacity
            style={styles.voiceButton}
            onPress={isRecording ? stopVoiceRecognition : startVoiceRecognition}
          >
            <Text style={styles.voiceButtonText}>
              {isRecording ? 'Stop Voice Input' : 'Use Voice Input'}
            </Text>
          </TouchableOpacity>

          <Text style={styles.label}>Time:</Text>
          <DateTimePicker
            value={time}
            mode="time"
            display="default"
            onChange={(event, selectedDate) => setTime(selectedDate || time)}
          />

          <Text style={styles.label}>Everyday:</Text>
          <Switch value={isEveryday} onValueChange={setIsEveryday} />

          <Text style={styles.label}>Every Week:</Text>
          <Switch value={isWeekly} onValueChange={setIsWeekly} />

          <Text style={styles.label}>Duration (in days or weeks):</Text>
          <TextInput
            value={duration}
            onChangeText={setDuration}
            keyboardType="numeric"
            style={styles.input}
            placeholder="Enter duration"
          />

          <TouchableOpacity style={styles.addButton} onPress={handleAddReminder}>
            <Text style={styles.addButtonText}>Add Reminder</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.remindersContainer}>
          <Text style={styles.sectionTitle}>Your Reminders:</Text>
          {reminders.map((reminder, index) => (
            <View key={index} style={styles.reminder}>
              <Text style={styles.reminderText}>{reminder.type} at {reminder.time.toLocaleTimeString()}</Text>
              <Text style={styles.reminderText}>{reminder.isEveryday ? 'Everyday' : ''}</Text>
              <Text style={styles.reminderText}>{reminder.isWeekly ? 'Every Week' : ''}</Text>
              <Text style={styles.reminderText}>Duration: {reminder.duration}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FC',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
  },
  inputContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    marginBottom: 10,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  voiceButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  voiceButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#28A745',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  addButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  remindersContainer: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  reminder: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  reminderText: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ReminderComponent;
