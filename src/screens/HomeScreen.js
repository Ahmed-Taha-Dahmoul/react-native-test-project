import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import ScreenHeader from '../components/ScreenHeader';
import SummaryBook from '../components/SummaryBook';
import BookList from '../components/BookList'; // Make sure you create this
import { colors } from '../constants/theme';

// Dummy data for books - replace with your own data source
const booksData = [
  // Example structure for book data
  {
    imageUrl: require('../../assets/images/richdad.png'), // Replace with actual image URL
    title: 'Rich Dad Poor Dad',
    author: 'Robert T. Kiyosaki',
  },
  // Add more books here
  {
    imageUrl: require('../../assets/images/authority.png'), // Replace with actual image URL
    title: 'Authority',
    author: 'Jeff Vandermeer',
  },
  {
    imageUrl: require('../../assets/images/laserwriter.png'), // Replace with actual image URL
    title: 'Laser Writer II',
    author: 'Tamara Shopsin',
  },
];

const HomeScreen = () => {
  return (
    // Replace the View with ScrollView to make the content scrollable
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <ScreenHeader mainTitle={"Free Daily Summary"} />
        <SummaryBook bookTitle={"Leave The World Behind"} author={"Rumaan Alam"} />
        <Text style={styles.newTitle}>New Recommended Reads</Text>
        <BookList books={booksData} /> 
        <Text style={styles.newTitle}>To be Productive</Text>
        <BookList books={booksData} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: colors.light, // You may move the background color here for consistency
  },
  container: {
    flex: 1, // You may remove flex: 1 as ScrollView takes care of scrolling
    
  },
  newTitle: {
    color: '#2B2D42',
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 24,
    letterSpacing: 0.18,
    marginTop: 15,
    marginLeft: 20,
    marginBottom: 20,
  },
  // Add styles for BookList if needed
});

export default HomeScreen;