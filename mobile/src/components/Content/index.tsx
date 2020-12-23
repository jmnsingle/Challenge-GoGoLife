import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import {
  Container,
  ContentTitle,
  Title,
  Description,
  DescritionText,
} from './styles';

interface ContentProps {
  title: [string];
  category?: string;
  icon: string;
  pageTitle: string;
  content?: any;
}

const Content: React.FC<ContentProps> = ({ title, pageTitle, icon }) => {
  return (
    <Container>
      <ContentTitle>
        <Title>{pageTitle}</Title>
      </ContentTitle>
      {title.map(t => (
        <Description key={t} marginLeft={icon}>
          {icon ? (
            <MaterialIcons name={icon as any} size={28} color="#222" />
          ) : null}
          <DescritionText>{t}</DescritionText>
        </Description>
      ))}
    </Container>
  );
};

export default Content;
