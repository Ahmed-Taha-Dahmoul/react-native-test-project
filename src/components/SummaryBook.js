import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const SummaryBook = ({ bookTitle, author }) => {
  return (
    <LinearGradient
      colors={['#1529FF', '#0011C6']}
      start={[0, 0]}
      end={[1, 1]}
      style={styles.gradient}
    >
      <View style={styles.container}>
        {/* Book Image */}
        <Image
          source={require('../../assets/images/summaryBook.jpg')}
          style={styles.bookImage}
          resizeMode="cover"
        />

        {/* Book Details */}
        <View style={styles.detailsContainer}>
          <Text style={styles.bookTitle}>{bookTitle}</Text>
          <Text style={styles.author}>{author}</Text>
          <Text style={styles.readNow}>Read Now</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    borderRadius: 12,
    overflow: 'hidden', // Ensure the gradient stays within the bounds
    margin: 15,
    marginTop: -50,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  bookImage: {
    width: 100,
    height: 150,
    borderRadius: 8,
    marginRight: 16,
  },
  detailsContainer: {
    flex: 1,
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#FFF', // Change text color to white for better visibility
  },
  author: {
    fontSize: 16,
    marginBottom: 4,
    color: '#FFF', // Change text color to white for better visibility
  },
  readNow: {
    fontSize: 14,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default SummaryBook;
