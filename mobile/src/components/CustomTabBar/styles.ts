import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

interface PageSelected {
  selected: boolean;
}

export const Container = styled.View`
  background-color: #eee;
  flex-direction: row;
  align-items: flex-end;
`;

export const Button = styled(RectButton)`
  padding: 5px 0;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const TextButton = styled.Text<PageSelected>`
  color: ${(props: any) => (props.selected ? '#222' : '#555')};
  font-size: ${(props: any) => (props.selected ? 10 : 9)}px;
  text-align: center;
`;
