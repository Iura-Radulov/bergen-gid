import styled from '@emotion/styled';
import fon from 'images/contacts-fon.jpeg';
export const Div = styled.div`
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

export const FormContainer = styled.div`
  width: 300px;
  margin-top: 20px;
`;
