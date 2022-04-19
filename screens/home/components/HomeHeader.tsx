import React from 'react';
import { Box, Center, Heading, Icon, Row, Text } from 'native-base';
import { Feather } from '@expo/vector-icons';

export default function HomeHeader() {
  return (
    <Row justifyContent={'space-between'} alignItems={'center'}>
      <Box width={'85%'}>
        <Heading>Histoires des prophetes</Heading>
        <Text>Ecoutez l'histoire de tous les prophetes</Text>
      </Box>

      <Center bg={'white'} width={'40px'} height={'40px'} borderRadius={10}>
        <Icon size={5} as={Feather} name="settings" color="primary.200" />
      </Center>
    </Row>
  );
}
