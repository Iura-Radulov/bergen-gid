import styled from '@emotion/styled';

export const Img = styled.img`
  width: 300px;
  height: 200px;
  object-fit: cover;
  @media (min-width: 768px) {
    width: 600px;
    height: 400px;
  }
  @media (min-width: 1280px) {
    width: 1000px;
    height: 700px;
  }
`;
