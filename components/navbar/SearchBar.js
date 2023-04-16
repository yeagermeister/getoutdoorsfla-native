import React from 'react';
import { View, Text, CheckBox, TouchableOpacity } from 'react-native';
import styles from '../../styles.jsx';

function SearchBar() {
  return (
    <>
      <View style={styles.searchContainer}>
        <Text style={styles.searchTitle}>Find your fountain of youth!</Text>
        <View style={styles.checkboxContainer}>
          <CheckBox style={styles.checkbox} />
          <Text style={styles.checkboxLabel}>State Park</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox style={styles.checkbox} />
          <Text style={styles.checkboxLabel}>Pet Friendly</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox style={styles.checkbox} />
          <Text style={styles.checkboxLabel}>Camping Onsite</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox style={styles.checkbox} />
          <Text style={styles.checkboxLabel}>Scuba Diving</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox style={styles.checkbox} />
          <Text style={styles.checkboxLabel}>Free Admission</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.searchButton}>
        <Text style={styles.searchButtonText}>Ponce!</Text>
      </TouchableOpacity>
    </>
  );
};

export default SearchBar;