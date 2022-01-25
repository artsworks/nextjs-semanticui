import type { NextPage } from 'next';
import { Container, Header, Segment } from 'semantic-ui-react';

const Home: NextPage = () => {
  console.log('Page - Home..');

  return (
    <Container>
      <Segment inverted>
        <Header
          as='h1'
          content='Welcome'
          style={{
            fontSize: '4em',
            fontWeight: 'normal',
            marginBottom: 0,
            marginTop: '3em'
          }}
        />
      </Segment>
      <Segment>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta dictum magna vel accumsan. Etiam elementum posuere ipsum at condimentum.</Segment>
    </Container>
  );
};

export default Home;
