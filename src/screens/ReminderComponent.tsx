import React, { useState } from 'react';
import { View, Text, TextInput, Button, Switch, ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import PushNotification from 'react-native-push-notification';
import { RootStackScreenProps } from '../../navigators/RootNavigator';

const ReminderComponentScreen = ( { navigation }: RootStackScreenProps<"ReminderComponentScreen">) => {
  const [reminderType, setReminderType] = useState('');
  const [time, setTime] = useState(new Date());
  const [isEveryday, setIsEveryday] = useState(false);
  const [isWeekly, setIsWeekly] = useState(false);
  const [duration, setDuration] = useState(null); 
  const [reminders, setReminders] = useState([]);

  const handleAddReminder = () => {
    const newReminder = {
      type: reminderType,
      time,
      isEveryday,
      isWeekly,
      duration,
    };
    setReminders([...reminders, newReminder]);

    scheduleNotification(newReminder);
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
    message: reminderType,
    date: notificationTime,
    repeatType: repeatType,
    repeatTime: duration,
    });
  };

  return (
    <ScrollView>
      <View>
        <Text>Reminder Type:</Text>
        <TextInput value={reminderType} onChangeText={setReminderType} />

        <Text>Time:</Text>
        <DateTimePicker value={time} mode="time" display="default" onChange={(event, selectedDate) => setTime(selectedDate || time)} />

        <Text>Everyday:</Text>
        <Switch value={isEveryday} onValueChange={setIsEveryday} />

        <Text>Every Week:</Text>
        <Switch value={isWeekly} onValueChange={setIsWeekly} />

        <Text>Duration:</Text>
        <TextInput value={duration} onChangeText={setDuration} keyboardType="numeric" />

        <Button title="Add Reminder" onPress={handleAddReminder} />
      </View>

      <View>
        <Text>Reminders:</Text>
        {reminders.map((reminder, index) => (
          <View key={index}>
            <Text>{reminder.type} at {reminder.time.toString()}</Text>
            <Text>{reminder.isEveryday ? 'Everyday' : ''}</Text>
            <Text>{reminder.isWeekly ? 'Every Week' : ''}</Text>
            <Text>Duration: {reminder.duration}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default ReminderComponentScreen;