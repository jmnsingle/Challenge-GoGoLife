import React, { useState } from 'react';

import NoResults from '../../components/NoResults';

import { Container } from './styles';

const Home: React.FC = () => {
  const [data, setData] = useState([]);

  if (!data.length) {
    return <NoResults />;
  }

  return <Container>{/* conteúdo da tela */}</Container>;
};

export default Home;
