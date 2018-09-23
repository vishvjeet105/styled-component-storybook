import React,{Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import designproperty from '../components/designproperty';
const styles={
    background(props){
        console.log("checking here",props);
        console.log('hey',designproperty.background)
        if(props.kind==='filled'){
            return designproperty.background='green';
        }
        else if(props.kind==='outlined'){
            return designproperty.background='white';
        }
        return '';
    },
    color(props){
        if(props.kind==='filled'){
            return designproperty.color='white';
        }
        else if(props.kind==='outlined'){
            return designproperty.color='green';
        }
        return '';
    },
    borderRadius(props){
       if(props.shape==='BluntEdged'){
           return designproperty.borderRadius='4px';
       }
       else if(props.shape==='SharpEdged'){
           return designproperty.borderRadius='0px';
       }
       else if(props.shape==='Capsular'){
           return designproperty.borderRadius='40%';
       }
       else if(props.shape==='Circle'){
           return designproperty.borderRadius='50%';
       }
       return '';
    },
    width(props){
        if(props.shape==='Circle'){
            return designproperty.width='10%'
        }
        if(props.block===true){
            return designproperty.width='100%'
        }
        if(props.disabled===true){
            return designproperty.width='40%'
        }
        if(props.sizes==='Small'){
           return designproperty.width='30%'
        }
        else if(props.sizes==='Medium'){
           return designproperty.width='50%'
        }
        else if(props.sizes==='Large'){
           return designproperty.width='70%'
        }
        return '';
    },
    opacity(props){
        if(props.disabled===true){
           return designproperty.opacity;
        }
    }
}

const ButtonDesign=({className,children,...props})=>(
    <button className={className}>{children}</button>
)
const StyledButton=styled(({...props})=><ButtonDesign{...props}></ButtonDesign>,
)`
width:${styles.width};
opacity:${styles.opacity};
padding:20px;
color:white;
background:green;
border-style:solid;
border-color:green;
margin:5px;
border-radius:${styles.borderRadius}
color:${styles.color};
background:${styles.background};
`;

const Button=(props)=>{
    console.log("props",{...props})
    return(
    <StyledButton {...props}>
      {props.children}
    </StyledButton>
    )
}
Button.defaultProps={
    kinds:'filled',
    size:'Small',
    shape:'SharpEdged',
    block:false,
    disabled:false
}
Button.propTypes={
kinds:PropTypes.oneOf(['filled','outlined']),
shape:PropTypes.oneOf(['BluntEdged','SharpEdged','Capsular','Circle']),
size:PropTypes.oneOf(['Small','Medium','Large']),
block:PropTypes.bool,
disabled:PropTypes.bool,
}
export default Button;