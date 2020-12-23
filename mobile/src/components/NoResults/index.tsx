import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import { Container, Text } from './styles';

const NoResults: React.FC = () => {
  return (
    <Container>
      <MaterialIcons name="face" size={80} color="#555" />
      <Text>Em breve</Text>
    </Container>
  );
};

export default NoResults;
