import { NextPage } from 'next';
import { Container, Header, Segment } from 'semantic-ui-react';

const About: NextPage = () => {
  return (
    <Container>
      <Segment inverted>
        <Header
          as='h1'
          content='About Us'
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

export default About;
