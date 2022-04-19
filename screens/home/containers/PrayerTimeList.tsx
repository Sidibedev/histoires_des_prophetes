import React, { useState } from 'react';
import Tickers from '../../../components/Tickers';
import { Center, Row, ScrollView, Spinner, Text } from 'native-base';
import usePrayerTimes from '../../../hooks/usePrayerTimes';
import { ILocation } from '../../../lib/interfaces/Address';

interface Props {
  location: ILocation;
}
function PrayerTimeList({ location }: Props) {
  const { data, error, isFetching } = usePrayerTimes(location);
  const times = React.useMemo(() => {
    return data.results.datetime[0].times;
  }, [data]);

  if (error) return <Text> 😭 Quelques problemes serveur !</Text>;
  return (
    <Center mb={2} width={'100%'}>
      <ScrollView
        width={'100%'}
        padding={3}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {isFetching ? (
          <Row space={2}>
            <Spinner color={'primary.200'} />
            <Text>Chargement des heures de priere</Text>
          </Row>
        ) : (
          <Row justifyContent={'space-between'} space={2}>
            {Object.entries(times).map(([key, value], index) => (
              <Tickers key={`${index}${key}`} title={`${key} : ${value}`} />
            ))}
          </Row>
        )}
      </ScrollView>
    </Center>
  );
}

export default React.memo(PrayerTimeList);
