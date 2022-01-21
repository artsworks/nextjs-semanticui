import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Button, Form, Icon, Image, Modal, Segment, Step } from 'semantic-ui-react';

const RegisterStep: NextPage = () => {
  const router = useRouter();
  const { step } = router.query;

  const stepNumber = parseInt(`${step ?? 1}`);
  const stepMax = 3;

  const [formState, setFormState] = useState({
    firstname: '',
    lastname: '',
    title: '',
    color: ''
  });
  const { firstname, lastname, title, color } = formState;

  const handleChange = ({ name, value }: any) => setFormState({ ...formState, [name]: value });

  const handleOpen = () => {
    console.log(`modal is open: ${open}`);
  };

  const handleClose = () => {
    router.push('/register');
  };

  return (
    <Modal open={true} onOpen={handleOpen} onClose={handleClose}>
      <Modal.Header>Registration Form [{step}]</Modal.Header>
      <Modal.Content image>
        <Image src={`https://www.placecage.com/c/15${stepNumber}/180`} alt='nicholas-cage' />
        <Modal.Description>
          <Step.Group attached='top'>
            <Step active={stepNumber === 1}>
              <Icon name='car' />
              <Step.Content>
                <Step.Title>1</Step.Title>
                <Step.Description>One</Step.Description>
              </Step.Content>
            </Step>

            <Step active={stepNumber === 2}>
              <Icon name='home' />
              <Step.Content>
                <Step.Title>2</Step.Title>
                <Step.Description>Two</Step.Description>
              </Step.Content>
            </Step>

            <Step active={stepNumber === 3}>
              <Icon name='info' />
              <Step.Content>
                <Step.Title>3</Step.Title>
                <Step.Description>Three</Step.Description>
              </Step.Content>
            </Step>
          </Step.Group>
          <Segment attached>
            {stepNumber === 1 ? (
              <Form>
                <Form.Field>
                  <label>First Name</label>
                  <Form.Input placeholder='First Name' name='firstname' value={firstname} onChange={(_e, data) => handleChange(data)} />
                </Form.Field>
                <Form.Field>
                  <label>Last Name</label>
                  <Form.Input placeholder='Last Name' name='lastname' value={lastname} onChange={(_e, data) => handleChange(data)} />
                </Form.Field>
              </Form>
            ) : null}

            {stepNumber === 2 ? (
              <Form>
                <Form.Field>
                  <label>Title</label>
                  <Form.Input placeholder='Title' name='title' value={title} onChange={(_e, data) => handleChange(data)} />
                </Form.Field>
                <Form.Field>
                  <label>Color</label>
                  <Form.Input placeholder='Color' name='color' value={color} onChange={(_e, data) => handleChange(data)} />
                </Form.Field>
              </Form>
            ) : null}

            {stepNumber === 3 ? <code>{JSON.stringify(formState, null, 2)}</code> : null}
          </Segment>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={handleClose} negative>
          Cancel
        </Button>
        {stepNumber > 1 ? (
          <Button
            content='Back'
            labelPosition='left'
            icon={'arrow left'}
            onClick={() => {
              router.push(`${stepNumber - 1}`);
            }}
            secondary
          />
        ) : null}
        <Button
          content={stepNumber === stepMax ? 'Finish' : 'Next'}
          labelPosition='right'
          icon={stepNumber === stepMax ? 'check' : 'arrow right'}
          onClick={() => {
            stepNumber < stepMax ? router.push(`${stepNumber + 1}`) : handleClose();
          }}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
};

export default RegisterStep;
