import styled from 'styled-components/native';

interface DescriptionProps {
  marginLeft?: boolean;
}

export const Container = styled.View`
  margin: 10px 0;
`;

export const ContentTitle = styled.View`
  align-items: center;
  justify-content: center;
  padding: 5px 20px;
  background-color: #eee;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: #222;
  font-weight: bold;
`;

export const Description = styled.View<DescriptionProps>`
  flex-direction: row;
  align-items: center;
  padding: 0px 20px;
  margin-left: ${(props: any) => (props.marginLeft ? 0 : 30)}px;
`;

export const DescritionText = styled.Text`
  flex: 1;
  color: #222;
  margin-left: 5px;
  font-size: 12px;
  padding: 4px 0px;
  font-weight: 700;
`;
