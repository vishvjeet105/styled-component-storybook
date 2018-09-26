import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import styles from '../components/styles';
// import colorproperty from '../components/colorproperty'

const StyledButton=styled(({kind,size,shape,block,...props})=>{
    return <button{...props}></button>
    },
)`
width:${styles.width};
outline:${styles.outline};
opacity:${styles.opacity};
height:${styles.height};
font-size:${styles.fontSize};
padding:${styles.padding};
border:${styles.border};
margin:5px;
border-radius:${styles.borderRadius};
color:${styles.color};
background:${styles.background};
&:hover{
opacity:${styles.hover.opacity};
color:${styles.hover.color};
background:${styles.hover.background};
}
`;

const Button=(props)=>{
    console.log("cheks some",props.colorproperty)
    return(
    <StyledButton {...props} {...props.disabled}>
      {props.children}
    </StyledButton>
    )
}
Button.defaultProps={
   color:'green'
}
Button.propTypes={
colorproperty:PropTypes.object,
kinds:PropTypes.oneOf(['filled','outlined']),
shape:PropTypes.oneOf(['BluntEdged','SharpEdged','Capsular','Circle']),
size:PropTypes.oneOf(['Small','Medium','Large']),
block:PropTypes.bool,
disabled:PropTypes.bool,
}
export default Button;