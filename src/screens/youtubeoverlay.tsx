import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { RootStackScreenProps } from '../../navigators/RootNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';

const YoutubeOverlay = ({ navigation }: RootStackScreenProps<"youtubeoverlay">) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [videos, setVideos] = useState([]);
  const [selectedVideoId, setSelectedVideoId] = useState('');

  const searchYoutube = async () => {
    try {
      const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchQuery}&key=AIzaSyB8oUGxgX47ys5LeIQzPfNi2k58g9bpxFw`);
      const data = await response.json();
      setVideos(data.items);
    } catch (error) {
      console.error('Error searching YouTube:', error);
    }
  };

  const playVideo = (videoId: string) => {
    setSelectedVideoId(videoId);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <TextInput
          style={styles.searchInput}
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Search YouTube"
        />
        <TouchableOpacity style={styles.searchButton} onPress={searchYoutube}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
        <FlatList
          data={videos}
          keyExtractor={(item) => item.id.videoId}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => playVideo(item.id.videoId)} style={styles.videoItem}>
              <Text style={styles.videoTitle}>{item.snippet.title}</Text>
            </TouchableOpacity>
          )}
          style={styles.flatList} // Apply custom styles to FlatList
        />
        {selectedVideoId !== '' && (
          <View style={styles.videoContainer}>
            <WebView
              style={styles.webview}
              javaScriptEnabled={true}
              domStorageEnabled={true}
              source={{ uri: `https://www.youtube.com/embed/${selectedVideoId}` }}
            />
          </View>
        )}
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ABD6E2',
    padding: 10,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  searchButton: {
    backgroundColor: '#007BFF',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
  videoItem: {
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  videoTitle: {
    fontSize: 16,
    color: 'black',
  },
  videoContainer: {
    flex: 2,
    aspectRatio: 2 / 2,
    alignSelf: 'center', // Center the video container horizontally
    marginBottom: 25, // Add some margin at the bottom
  },
  webview: {
    flex: 2,
  },
  flatList: {
    maxHeight: 250, // Adjust the maximum height as needed
  },
});

export default YoutubeOverlay;
