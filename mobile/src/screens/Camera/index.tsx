import { useFocusEffect, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';

import Content from '../../components/Content';
import NoResults from '../../components/NoResults';
import api from '../../services/api';

import { Container } from './styles';

interface RouteParams {
  type: string;
}

interface PostProps {
  title: [string];
  category: string;
  pageTitle: string;
  icon: string;
  content: any;
}

const Camera: React.FC = () => {
  const route = useRoute();
  const { type } = route.params as RouteParams;

  const [posts, setPosts] = useState<PostProps[]>([]);

  useFocusEffect(() => {
    async function loadPosts() {
      const { data } = await api.get('posts', {
        params: {
          type,
        },
      });

      setPosts(data);
    }
    loadPosts();
  });

  if (!posts) {
    return <NoResults />;
  }

  return (
    <Container>
      {posts.map(post => (
        <Content
          key={post.pageTitle}
          title={post.title}
          icon={post.icon}
          category={post.category}
          pageTitle={post.pageTitle}
          content={post.content}
        />
      ))}
    </Container>
  );
};

export default Camera;
