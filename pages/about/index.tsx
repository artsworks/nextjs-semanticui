import { NextPage } from 'next';
import { Container, Header, Segment } from 'semantic-ui-react';
import ButtonColor from '../../components/buttonColor';
import SectionColor from '../../components/sectionColor';

const About: NextPage = () => {
  console.log('Page - About..');

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
      <Segment>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta dictum magna vel accumsan. Etiam elementum posuere ipsum at condimentum.</p>
      </Segment>
      <SectionColor></SectionColor>
      <ButtonColor></ButtonColor>
    </Container>
  );
};

export default About;
