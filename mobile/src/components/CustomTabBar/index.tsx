import React, { useCallback, useEffect, useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import api from '../../services/api';

import { Container, Button, TextButton } from './styles';

interface PagesProps {
  title: string;
  icon: string;
  url: string;
  content: Array<{
    type: string;
    title: string;
    properties: {
      categories: [string];
    };
  }>;
}

const CustomTabBar: React.FC = ({ navigation }: any) => {
  const { navigate } = navigation;

  const [selected, setSelected] = useState('home');
  const [pages, setPages] = useState<PagesProps[]>([]);

  useEffect(() => {
    api
      .get('/pages')
      .then(response => {
        setPages(response.data);
      })
      .catch(err => {
        alert('Erro ao buscar dados');
      });
  }, []);

  const navigateToSelectedScreen = useCallback(
    (screenName, type) => {
      setSelected(screenName);
      navigate(screenName, { type });
    },
    [navigate],
  );

  return (
    <Container style={{ paddingBottom: getBottomSpace() - 5 }}>
      {pages.map(({ title, icon, url }) => (
        <Button
          key={title}
          onPress={() => navigateToSelectedScreen(url, 'post')}
        >
          <MaterialIcons
            name={icon as any}
            size={selected === url ? 34 : 30}
            color={selected === url ? '#222' : '#555'}
          />
          <TextButton selected={selected === url}>{title}</TextButton>
        </Button>
      ))}
    </Container>
  );
};

export default CustomTabBar;
