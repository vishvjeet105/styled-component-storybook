import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import styles from '../components/styles';

const StyledButton=styled(({kind,size,shape,block,...props})=>{
    return <button{...props}></button>
    },
)`
width:${styles.width};
opacity:${styles.opacity}
height:${styles.height};
font-size:${styles.fontSize};
padding:${styles.padding};
border-style:${styles.borderStyle};
border-color:green;
border:${styles.border};
margin:5px;
border-radius:${styles.borderRadius}
color:${styles.color};
background:${styles.background};
&:hover{
opacity:${styles.hover.opacity};
}
`;

const Button=(props)=>{
    console.log("props",{...props})
    return(
    <StyledButton {...props} disabled={props.disabled}>
      {props.children}
    </StyledButton>
    )
}
Button.propTypes={
kinds:PropTypes.oneOf(['filled','outlined']),
shape:PropTypes.oneOf(['BluntEdged','SharpEdged','Capsular','Circle']),
size:PropTypes.oneOf(['Small','Medium','Large']),
block:PropTypes.bool,
disabled:PropTypes.bool,
}
export default Button;