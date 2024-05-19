import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackScreenProps } from '../../../navigators/RootNavigator';

const NewsList01 = ({ navigation }: RootStackScreenProps<'NewsList01'>) => {
  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchNews = async (query: string) => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${query}&apiKey=b9b270b9ceb74e1ab033c235b7e495b5`
      );
      const data = await response.json();
      setNews(data.articles);
    } catch (error) {
      console.error('Error fetching news:', error);
      alert('Error fetching news. Please try again later.');
    }
  };

  useEffect(() => {
    fetchNews(''); // Fetch all news initially
  }, []);

  const handleSearch = () => {
    fetchNews(searchQuery);
  };

  const openNews = (url: string) => {
    navigation.navigate('NewsDetail', { url });
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.searchInput}
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Search News"
      />
      <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
      <FlatList
        data={news}
        keyExtractor={(item) => item.url}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => openNews(item.url)} style={styles.newsItem}>
            <Text style={styles.newsTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
        removeClippedSubviews={false}
      />
    </SafeAreaView>
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
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
  },
  newsItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  newsTitle: {
    fontSize: 16,
    color: 'black',
  },
});

export default NewsList01;
