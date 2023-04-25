import styled from '@emotion/styled';
import fon from 'images/Private-tour/Private-tour4.jpg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 0;
  background-image: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.6),
      rgba(47, 48, 58, 0.6)
    ),
    url(${fon});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Title = styled.h3`
  margin-bottom: 15px;
  color: white;
`;

export const Div = styled.div`
  width: 300px;
  margin-top: 20px;
`;
