import axios from 'axios';
import { ILocation } from '../lib/interfaces/Address';

export const getPrayerTimes = async ({
  longitude,
  latitude,
  elevation,
}: ILocation) => {
  const { data } = await axios.get(
    `https://api.pray.zone/v2/times/today.json?longitude=${longitude}&latitude=${latitude}&elevation=${elevation}timeformat=1`
  );
  return data;
};
