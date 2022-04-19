import React from 'react';
import { Box } from 'native-base';
import TextBox, { TextType } from './TextBox';

export default function Tickers({ title }: { title: string }) {
  return (
    <Box bg={'primary.50'} p={1.5} borderRadius={10}>
      <TextBox type={TextType.normal}>{title}</TextBox>
    </Box>
  );
}
