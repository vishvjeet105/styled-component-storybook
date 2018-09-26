import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button'
import colorproperty from './colorproperty';
storiesOf('Button', module)
  .add('kinds', () => (
    <React.Fragment>
      <Button kind="filled" primary={colorproperty.white} background={colorproperty.green}>
       Filled Button
      </Button>
      <Button kind="outlined" outline={colorproperty.green}>
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
      <Button capsulesize="XtraSmall" primary={colorproperty.instituteBlue} background={colorproperty.white}>
        Xtra small
      </Button>
      <Button capsulesize="Small" primary={colorproperty.white} background={colorproperty.instituteBlue}>
        Small
      </Button>
      <Button capsulesize="Medium" primary={colorproperty.white} background={colorproperty.instituteBlue}>
        Medium
      </Button>
      <Button capsulesize="Large" primary={colorproperty.white} background={colorproperty.instituteBlue}>
        Large
      </Button>
      <Button capsulesize="XtraLarge" primary={colorproperty.white} background={colorproperty.instituteBlue}>
        Xtra Large
      </Button>
    </React.Fragment>
  ))
  .add('rectangular',()=>(
    <React.Fragment>
      <Button rectangular="XtraSmall" primary={colorproperty.instituteBlue} background={colorproperty.white}>
        Xtra small
      </Button>
      <Button rectangular="Small" primary={colorproperty.instituteBlue} background={colorproperty.white}>
        Small
      </Button>
      <Button rectangular="Medium" primary={colorproperty.instituteBlue} background={colorproperty.white}>
        Medium
      </Button>
      <Button rectangular="Large" primary={colorproperty.instituteBlue} background={colorproperty.white}>
        Large
      </Button>
      <Button rectangular="XtraLarge" primary={colorproperty.instituteBlue} background={colorproperty.white}>
        Xtra Large
      </Button>
    </React.Fragment>
  ))
  .add('Line-Capsule',()=>(
    <React.Fragment>
      <Button linecapsule="XtraSmall" primary={colorproperty.Chrysler} background={colorproperty.white}>
        Xtra small
      </Button>
      <Button linecapsule="Small" primary={colorproperty.Chrysler} background={colorproperty.white}>
        Small
      </Button>
      <Button linecapsule="Medium" primary={colorproperty.Chrysler} background={colorproperty.white}>
        Medium
      </Button>
      <Button linecapsule="Large" primary={colorproperty.Chrysler} background={colorproperty.white}>
        Large
      </Button>
      <Button linecapsule="XtraLarge" primary={colorproperty.Chrysler} background={colorproperty.white}>
        Xtra Large
      </Button>
    </React.Fragment>
  ))
  .add('Line-rectangular',()=>(
    <React.Fragment>
      <Button linerectangular="Medium" primary={colorproperty.Black} background={colorproperty.white}>
        Medium
      </Button>
      <Button linerectangular="Large" primary={colorproperty.Black} background={colorproperty.white}>
        Large
      </Button>
    </React.Fragment>
  ))
  .add('Disabled-Capsule',()=>(
    <React.Fragment>
      <Button disabledcapsule="Small" disabled primary={colorproperty.Chrysler} background={colorproperty.white}>
        Small
      </Button>
      <Button disabledcapsule="Medium" disabled primary={colorproperty.Chrysler} background={colorproperty.white}>
        Medium
      </Button>
      <Button disabledcapsule="Large" disabled primary={colorproperty.Chrysler} background={colorproperty.white}>
        Large
      </Button>
    </React.Fragment>
  ))
  .add('Disabled-Rectangular',()=>(
    <React.Fragment>
      <Button disabledrectangular="Small" disabled primary={colorproperty.Chrysler} background={colorproperty.white}>
        Small
      </Button>
      <Button disabledrectangular="Medium" disabled primary={colorproperty.Chrysler} background={colorproperty.white}>
        Medium
      </Button>
      <Button disabledrectangular="Large" disabled primary={colorproperty.Chrysler} background={colorproperty.white}>
        Larges
      </Button>
    </React.Fragment>
  ))
