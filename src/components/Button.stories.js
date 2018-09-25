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
      Circle Button
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
  .add('capsule',()=>(
    <React.Fragment>
      <Button capsulesize="XtraSmall">
        Xtra small
      </Button>
      <Button capsulesize="Small">
        Small
      </Button>
      <Button capsulesize="Medium">
        Medium
      </Button>
      <Button capsulesize="Large">
        Large
      </Button>
      <Button capsulesize="XtraLarge">
        Xtra Large
      </Button>
    </React.Fragment>
  ))
  .add('rectangular',()=>(
    <React.Fragment>
      <Button rectangular="XtraSmall">
        Xtra small
      </Button>
      <Button rectangular="Small">
        Small
      </Button>
      <Button rectangular="Medium">
        Medium
      </Button>
      <Button rectangular="Large">
        Large
      </Button>
      <Button rectangular="XtraLarge">
        Xtra Large
      </Button>
    </React.Fragment>
  ))
  .add('Line-Capsule',()=>(
    <React.Fragment>
      <Button linecapsule="XtraSmall">
        Xtra small
      </Button>
      <Button linecapsule="Small">
        Small
      </Button>
      <Button linecapsule="Medium">
        Medium
      </Button>
      <Button linecapsule="Large">
        Large
      </Button>
      <Button linecapsule="XtraLarge">
        Xtra Large
      </Button>
    </React.Fragment>
  ))
  .add('Line-rectangular',()=>(
    <React.Fragment>
      <Button linerectangular="Medium">
        Medium
      </Button>
      <Button linerectangular="Large">
        Large
      </Button>
    </React.Fragment>
  ))
  .add('Disabled-Capsule',()=>(
    <React.Fragment>
      <Button disabledcapsule="Small" disabled>
        Small
      </Button>
      <Button disabledcapsule="Medium" disabled>
        Medium
      </Button>
      <Button disabledcapsule="Large" disabled>
        Large
      </Button>
    </React.Fragment>
  ))
  .add('Disabled-Rectangular',()=>(
    <React.Fragment>
      <Button disabledrectangular="Small" disabled>
        Small
      </Button>
      <Button disabledrectangular="Medium" disabled>
        Medium
      </Button>
      <Button disabledrectangular="Large" disabled>
        Large
      </Button>
    </React.Fragment>
  ))
