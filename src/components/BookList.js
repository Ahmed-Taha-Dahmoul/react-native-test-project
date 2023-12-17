import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import BookItem from './BookItem';

const BookList = ({ books }) => {
  return (
    <ScrollView
      horizontal={true}
      style={styles.bookListContainer}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}>
      {books.map((book, index) => (
        <BookItem
          key={index}
          imageUrl={book.imageUrl}
          title={book.title}
          author={book.author}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    bookListContainer: {
      // Assuming you don't need any additional styles here
    },
    contentContainer: {
      paddingHorizontal: 10, // Provide some horizontal padding
      paddingTop: -10, // Provide some padding at the top
      alignItems: 'center',
      marginBottom: 5,
       // Align items in the center of the cross axis
    },
  });

export default BookList;