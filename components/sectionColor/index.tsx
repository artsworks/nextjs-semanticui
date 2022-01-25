import { NextPage } from 'next';
import { useContext } from 'react';
import { Segment, Header } from 'semantic-ui-react';
import { DataContext } from '../../providers/dataProvider';

const SectionColor: NextPage = () => {
  const { theme } = useContext(DataContext);
  return (
    <Segment>
      <Header as='h3' content={'Color Segment'}/>
      <p>
        On this child component, the theme context value is <strong>{theme.color}</strong>
      </p>
    </Segment>
  );
};

export default SectionColor;
