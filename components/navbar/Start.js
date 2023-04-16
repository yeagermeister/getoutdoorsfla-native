import React from 'react';
import { View, StyleSheet } from 'react-native';
import Navbar from './Navbar';
import SearchBar from './SearchBar';

const Start = () => {

  // Render the page
  return (
    <View style={styles.container}>
      <Navbar />
      <SearchBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Start;