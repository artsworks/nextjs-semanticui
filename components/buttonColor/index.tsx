import { useContext } from 'react';
import { Button, Header, Segment } from 'semantic-ui-react';
import { DataContext } from '../../providers/dataProvider';

const ButtonColor = () => {
  const { theme, dispatch } = useContext(DataContext);
  return (
    <Segment>
      <Header as={'h3'}>Action Segment</Header>
      <p>
        Current state in this segment: <strong>{theme.color}</strong>
      </p>
      <Button
        primary
        onClick={() => {
          dispatch({ type: 'SwitchTheme', value: theme.color === 'light' ? 'dark' : 'light' });
        }}
      >
        Change theme color
      </Button>
    </Segment>
  );
};

export default ButtonColor;
