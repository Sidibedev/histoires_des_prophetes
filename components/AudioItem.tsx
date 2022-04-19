import React from 'react';
import { Box, Circle, Heading, Icon, Row, Text } from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';
export default function AudioItem() {
  const [isActive, setIsActive] = React.useState(false);
  return (
    <Box
      justifyContent={'center'}
      mt={2}
      h={60}
      width={'100%'}
      bg={'white'}
      borderWidth={isActive ? 1 : 0}
      borderColor={isActive ? 'primary.200' : 'transparent'}
      borderRadius={10}
      paddingX={3}
    >
      <Row justifyContent={'space-between'} alignItems={'center'}>
        <Row alignItems={'center'} space={2}>
          <Circle height={10} width={10} bg={'primary.200'}>
            <Text color={'primary.50'} fontWeight={'bold'} fontFamily={'body'}>
              1
            </Text>
          </Circle>
          <Box>
            <Heading size={'xs'} fontWeight={'medium'}>
              Adam
            </Heading>
            <Text>2h:00 </Text>
          </Box>
        </Row>

        <Icon
          size={5}
          as={FontAwesome5}
          name={isActive ? 'pause' : 'play'}
          color="primary.200"
        />
      </Row>
    </Box>
  );
}
