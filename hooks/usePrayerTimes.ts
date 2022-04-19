import { useQuery } from 'react-query';
import { getPrayerTimes } from '../api/prayerTimes';
import { ILocation } from '../lib/interfaces/Address';

export default function usePrayerTimes(address: ILocation) {
  return useQuery(['prayerTimes', address], () => getPrayerTimes(address));
}
