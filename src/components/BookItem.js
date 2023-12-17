import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const BookItem = ({ imageUrl, title, author }) => {
  return (
    <View style={styles.bookItemContainer}>
      <Image source={imageUrl} style={styles.bookImage} />
      <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail'>{title}</Text>
      <Text style={styles.author}>{author}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    bookItemContainer: {
        width: 120, // Defined width for book items
        marginHorizontal: 10, // Space between books
        // Remove flexShrink or set it to 1 if you want to allow shrinking
        // flexShrink: 1,
      },
  bookImage: {
    width: 120.15,
    height: 178.668,
    backgroundColor: 'lightgray',
    borderRadius: 5,
  },
  title: {
    color: '#2B2D42',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 18,
    overflow: 'hidden',
    marginTop: 7,
    marginLeft: 3, // Additional style properties can be added here.
  },
  author: {
    marginLeft:3,
  },
});

export default BookItem;