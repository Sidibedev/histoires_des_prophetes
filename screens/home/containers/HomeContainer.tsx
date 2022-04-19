import React, { useEffect, useState } from 'react';
import { Box, Image, ScrollView } from 'native-base';
import PrayerTimeList from './PrayerTimeList';
import AudioList from './AudioList';
import HomeHeader from '../components/HomeHeader';
import * as Location from 'expo-location';
import { ILocation } from '../../../lib/interfaces/Address';

export default function HomeContainer() {
  const [location, setLocation] = useState<ILocation>();
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        alert('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation({
        longitude: location.coords.longitude,
        latitude: location.coords.latitude,
        elevation: location.coords.altitude,
      });
    })();
  }, []);
  return (
    <Box flex={1} bg={'white'} pt={'10'}>
      {location ? <PrayerTimeList location={location} /> : null}
      <Box
        bg={'primary.50'}
        flex={1}
        borderTopLeftRadius={50}
        borderTopRightRadius={50}
      >
        <Box p={6} flex={1}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <HomeHeader />
            <Image
              mt={3}
              alt="Alternate Text"
              size="72"
              width={'100%'}
              h={170}
              resizeMode="cover"
              borderRadius={20}
              source={require('../../../assets/images/cover1.png')}
            />
            <AudioList title={'Muhammad (PSL)'} />
            <AudioList title="Les autres prophetes" />
          </ScrollView>
        </Box>
      </Box>
    </Box>
  );
}
