import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Button, Container, Header, Segment } from 'semantic-ui-react';

const Register: NextPage = () => {
  console.log('Page - Register..');

  const router = useRouter();

  return (
    <Container>
      <Segment inverted>
        <Header
          as='h1'
          content='Register'
          style={{
            fontSize: '4em',
            fontWeight: 'normal',
            marginBottom: 0,
            marginTop: '3em'
          }}
        />
      </Segment>
      <Segment>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta dictum magna vel accumsan. Etiam elementum posuere ipsum at condimentum.</Segment>
      <Button onClick={() => router.push('/register/1')} positive>
        Start
      </Button>
    </Container>
  );
};

export default Register;
