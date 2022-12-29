import styled from 'styled-components';

const Container = styled.div``;

const Wrapper = styled.div``;

const Form = styled.form``;

const Title = styled.h1``;

const Input = styled.input``;

const Button = styled.button``;

const Agreement = styled.span``;

export const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="email" />
          <Input placeholder="user name" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal data in accordance
            with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};
