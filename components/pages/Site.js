import React from 'react';
import { View, Text } from 'react-native';
import SiteCard from '../SiteCard';
import Map from '../Map';
import Weather from '../Weather';

const Site = () => {
  return (
    <View>
      <Text>Site Placeholder</Text>
      <SiteCard>
        <Map />
        <Weather />
      </SiteCard>
    </View>
  );
};

export default Site;