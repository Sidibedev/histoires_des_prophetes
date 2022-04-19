import React from 'react';
import { Box, Heading, Pressable, Row, Text } from 'native-base';
import AudioItem from '../../../components/AudioItem';

export default function AudioList({ title }: { title: string }) {
  return (
    <Box mt={5}>
      <Row mb={2} justifyContent={'space-between'}>
        <Heading size={'sm'}>{title}</Heading>
        <Pressable onPress={() => alert('d')}>
          <Text>Voir tout</Text>
        </Pressable>
      </Row>

      <AudioItem />
    </Box>
  );
}
