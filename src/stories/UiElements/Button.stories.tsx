import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../../UiElements/Button/Buttons';

// eslint-disable-next-line no-undef
storiesOf('Block button', module)
  .add('Default button', () => <Button>Submit</Button>)
  .add('Disabled button', () => <Button disabled>Submit</Button>)
  .add('Primary button', () => <Button variant='primary'>Submit</Button>)
  .add('Secondary button', () => <Button variant='secondary'>Submit</Button>)
  .add('Loading', () => (
    <Button variant='primary' loading>
      Submit
    </Button>
  ));

// eslint-disable-next-line no-undef
storiesOf('Outlined button', module)
  .add('Default button', () => <Button buttonType='outlined'>Submit</Button>)
  .add('Disabled button', () => (
    <Button buttonType='outlined' disabled>
      Submit
    </Button>
  ))
  .add('Primary button', () => (
    <Button buttonType='outlined' variant='primary'>
      Submit
    </Button>
  ))
  .add('Secondary button', () => (
    <Button buttonType='outlined' variant='secondary'>
      Submit
    </Button>
  ))
  .add('Loading', () => (
    <Button buttonType='outlined' variant='secondary' loading>
      Submit
    </Button>
  ));
