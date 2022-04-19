import React from 'react';
import { Box, Text } from 'native-base';
import TextBox, { TextType } from './TextBox';

export default function Tickers({ title }: { title: string }) {
  return (
    <Box bg={'primary.200'} p={1.5} borderRadius={10}>
      <Text color={'white'} fontWeight={'medium'}>
        {title}
      </Text>
    </Box>
  );
}
