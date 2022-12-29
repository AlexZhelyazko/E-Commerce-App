import { Facebook, Instagram, Pinterest, Twitter } from '@material-ui/icons';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Right = styled.div`
  flex: 1;
`;

const Center = styled.div`
  flex: 1;
`;

const Logo = styled.h1``;

const Description = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div``;

const SocialIcon = styled.div``;

export const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>APP.</Logo>
        <Description>
          There are many variations of passages of Lorem Ipsum available, but the majority have
          suffered alteration in some form, by injected humour, or randomised words which don’t look
          even slightly believable.
        </Description>
        <SocialContainer>
          <SocialIcon>
            <Facebook />
          </SocialIcon>
          <SocialIcon>
            <Instagram />
          </SocialIcon>
          <SocialIcon>
            <Twitter />
          </SocialIcon>
          <SocialIcon>
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center></Center>
      <Right></Right>
    </Container>
  );
};
