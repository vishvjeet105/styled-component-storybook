import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button'

storiesOf('Button', module)
  .add('kinds', () => (
    <React.Fragment>
      <Button kind="filled">
       Filled Button
      </Button>
      <Button kind="outlined">
       Outlined Button
      </Button>
    </React.Fragment>
    ))
  .add('shape',()=>(
    <React.Fragment>
      <Button shape="BluntEdged">
      Blunt Edged Button
      </Button>
      <Button shape="SharpEdged">
      Sharp Edged Button
      </Button>
      <Button shape="Capsular">
      Capsular Button
      </Button>
      <Button shape="Circle">
      Circular Button
      </Button>
    </React.Fragment>
  ))
  .add('sizes',()=>(
    <React.Fragment>
      <Button sizes="Small">
      Small Button
      </Button>
      <Button sizes="Medium">
      Medium Button
      </Button>
      <Button sizes="Large">
      Large Button
      </Button>
    </React.Fragment>
  ))
  .add('block',()=>(
    <React.Fragment>
     <Button block={true}>
       Block
     </Button>
    </React.Fragment>
  ))
  .add('disabled',()=>(
    <React.Fragment>
     <Button disabled={true}>
       Disabled
     </Button>
    </React.Fragment>
  ))
