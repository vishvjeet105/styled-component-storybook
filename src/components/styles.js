import designproperty from '../components/designproperty';
const styles={
    background(props){
        console.log('hey',props.capsulesize)
        if(props.kind==='filled'){
            return designproperty.background='green';
        }
        if(props.kind==='outlined'){
            return designproperty.background='white';
        }
        if(props.capsulesize==='Small'||props.capsulesize==='Medium'||props.capsulesize==='Large'||props.capsulesize==='XtraLarge'){
            return designproperty.background='#50b7e8';   
         }
        if(props.capsulesize==='XtraSmall')
        {
            return designproperty.background='white';
        }
        if(props.rectangular==='Small'||props.rectangular==='Medium'||props.rectangular==='Large'||props.rectangular==='XtraLarge'||props.rectangular==='XtraSmall'){
            return designproperty.background='white';
        }
        if(props.linecapsule==='XtraSmall'||props.linecapsule==='Small'||props.linecapsule==='Medium'||props.linecapsule==='Large'||props.linecapsule==='XtraLarge'){
            return designproperty.background='white';
        }
        if(props.linerectangular==='Medium'||props.linerectangular==='Large'){
            return designproperty.background='white';
        }
        if(props.disabledcapsule==='Small'||props.disabledcapsule==='Medium'||props.disabledcapsule==='Large'){
            return designproperty.color='white';
        }
        if(props.disabledrectangular==='Small'||props.disabledrectangular==='Medium'||props.disabledrectangular==='Large'){
            return designproperty.color='white';
        }
       return '';   
    },
    color(props){
        console.log("checking in color",props);
        if(props.kind==='filled'){
            return designproperty.color='white';
        }
        if(props.kind==='outlined'){
            return designproperty.color='green';
        }
        if(props.capsulesize==='Small'||props.capsulesize==='Medium'||props.capsulesize==='Large'||props.capsulesize==='XtraLarge'){
            return designproperty.color='white';   
         }
        if(props.capsulesize==='XtraSmall')
        {
            return designproperty.color='#50b7e8';
        }
        if(props.rectangular==='Small'||props.rectangular==='Medium'||props.rectangular==='Large'||props.rectangular==='XtraLarge'||props.rectangular==='XtraLarge'){
            return designproperty.color='#50b7e8';
        }
        if(props.linecapsule==='XtraSmall'||props.linecapsule==='Small'||props.linecapsule==='Medium'||props.linecapsule==='Large'||props.linecapsule==='XtraLarge'){
            return designproperty.color='#4A4A4A';
        }
        if(props.linerectangular==='Medium'||props.linerectangular==='Large'){
            return designproperty.color='#000000';
        }
        if(props.disabledcapsule==='Small'||props.disabledcapsule==='Medium'||props.disabledcapsule==='Large'){
            return designproperty.color='#4A4A4A';
        }
        if(props.disabledrectangular==='Small'||props.disabledrectangular==='Medium'||props.disabledrectangular==='Large'){
            return designproperty.color='#4A4A4A';
        }
       return '';
    },
    borderRadius(props){
        console.log("checking in borderRadius",props);
       if(props.shape==='BluntEdged'){
           return designproperty.borderRadius='4px';
       }
       if(props.shape==='SharpEdged'){
           return designproperty.borderRadius='0px';
       }
       if(props.shape==='Capsular'){
           return designproperty.borderRadius='40%';
       }
       if(props.shape==='Circle'){
           return designproperty.borderRadius='50%';
       }
       if(props.linecapsule==='XtraSmall'||props.linecapsule==='Small'||props.linecapsule==='Medium'||props.linecapsule==='Large'||props.linecapsule==='XtraLarge'){
           return designproperty.borderRadius='10px';
       }
       if(props.linerectangular==='Medium'||props.linerectangular==='Large'){
        return designproperty.borderRadius='2px';
       }
    if(props.capsulesize){
       switch(props.capsulesize){
        case 'XtraSmall':return designproperty.borderRadius='10px';
        case 'Small':return designproperty.borderRadius='12.5px';
        case 'Medium':return designproperty.borderRadius='15px';
        case 'Large':return designproperty.borderRadius='20px';
        case 'XtraLarge':return designproperty.borderRadius='25px';
        default:return '';
      }
    }
    if(props.rectangular){
      switch(props.rectangular){
        case 'XtraSmall':return designproperty.borderRadius='2px';
        case 'Small':return designproperty.borderRadius='2px';
        case 'Medium':return designproperty.borderRadius='4px';
        case 'Large':return designproperty.borderRadius='4px';
        case 'XtraLarge':return designproperty.borderRadius='4px';
        default:return '';
      }
    }
    if(props.disabledcapsule){
        switch(props.disabledcapsule){
          case 'Small':return designproperty.borderRadius='10px';
          case 'Medium':return designproperty.borderRadius='15px';
          case 'Large':return designproperty.borderRadius='20px';
          default:return '';
        }
      }
      if(props.disabledrectangular){
        switch(props.disabledrectangular){
          case 'Small':return designproperty.borderRadius='1px';
          case 'Medium':return designproperty.borderRadius='2px';
          case 'Large':return designproperty.borderRadius='2px';
          default:return '';
        }
      }
    },
    width(props){
        console.log("checking in width",props)
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
           return designproperty.opacity='0.50';
        }
    },
    border(props){
    },
    borderStyle(props){
        if(props.linecapsule==='XtraSmall'||props.linecapsule==='Small'||props.linecapsule==='Medium'||props.linecapsule==='Large'||props.linecapsule==='XtraLarge'){
            return designproperty.borderStyle='dashed';
        }
        if(props.linerectangular==='Medium'||props.linerectangular==='Large'){
            return designproperty.borderStyle='dashed';
        }
    },
    padding(props){
        if(props.capsulesize){
        switch(props.capsulesize){
            case 'XtraSmall':return designproperty.padding='3px 8px 4px 8px';
            case 'Small':return designproperty.padding='6px 12px 5px 12px';
            case 'Medium':return designproperty.padding='7px 15px 5px 15px';
            case 'Large':return designproperty.padding='9px 18px 7px 18px';
            case 'XtraLarge':return designproperty.padding='12px 24px 8px 24px';
            default:return '';
          }
        }
        if(props.rectangular){
            switch(props.rectangular){
                case 'XtraSmall':return designproperty.padding='3px 8px 4px 8px';
                case 'Small':return designproperty.padding='6px 12px 5px 12px';
                case 'Medium':return designproperty.padding='7px 15px 5px 15px';
                case 'Large':return designproperty.padding='9px 18px 7px 18px';
                case 'XtraLarge':return designproperty.padding='12px 24px 8px 24px';
                default:return '';
              }
        }
        if(props.linecapsule){
            switch(props.linecapsule){
                case 'XtraSmall':return designproperty.padding='3px 8px 4px 8px';
                case 'Small':return designproperty.padding='6px 12px 5px 12px';
                case 'Medium':return designproperty.padding='7px 15px 5px 15px';
                case 'Large':return designproperty.padding='9px 18px 7px 18px';
                case 'XtraLarge':return designproperty.padding='12px 24px 8px 24px';
                default:return '';
              }
        }
        if(props.disabledcapsule){
            switch(props.disabledcapsule){
                case 'Small':return designproperty.padding='6px 12px 5px 12px';
                case 'Medium':return designproperty.padding='7px 15px 5px 15px';
                case 'Large':return designproperty.padding='9px 18px 7px 18px';
                default:return '';
              }
        }
        if(props.disabledrectangular){
            switch(props.disabledrectangular){
                case 'Small':return designproperty.padding='6px 12px 5px 12px';
                case 'Medium':return designproperty.padding='7px 15px 5px 15px';
                case 'Large':return designproperty.padding='9px 18px 7px 18px';
                default:return '';
              }
        }
        if(props.linerectangular==='Medium'){
            return designproperty.padding='10px 22px 9px 22px';
        }
        if(props.linerectangular==='Large'){
               return designproperty.padding='10px 22px 9px 23px';
        }
        
    },
    height(props){
        if(props.capsulesize){
        switch(props.capsulesize){
            case 'XtraSmall':return designproperty.height='20px';
            case 'Small':return designproperty.height='25px';
            case 'Medium':return designproperty.height='30px';
            case 'Large':return designproperty.height='40px';
            case 'XtraLarge':return designproperty.height='50px';
            default:return '';
          }
        }
        if(props.rectangular){
            switch(props.rectangular){
                case 'XtraSmall':return designproperty.height='20px';
                case 'Small':return designproperty.height='25px';
                case 'Medium':return designproperty.height='30px';
                case 'Large':return designproperty.height='40px';
                case 'XtraLarge':return designproperty.height='50px';
                default:return '';
              }
            }
        if(props.linecapsule){
            switch(props.linecapsule){
                case 'XtraSmall':return designproperty.height='20px';
                case 'Small':return designproperty.height='25px';
                case 'Medium':return designproperty.height='30px';
                case 'Large':return designproperty.height='40px';
                case 'XtraLarge':return designproperty.height='50px';
                default:return '';
            }
        }
        if(props.disabledcapsule){
            switch(props.disabledcapsule){
                case 'Small':return designproperty.height='25px';
                case 'Medium':return designproperty.height='30px';
                case 'Large':return designproperty.height='40px';
                default:return '';
            }
        }
        if(props.disabledrectangular){
            switch(props.disabledrectangular){
                case 'Small':return designproperty.height='25px';
                case 'Medium':return designproperty.height='30px';
                case 'Large':return designproperty.height='40px';
                default:return '';
            }
        }
        if(props.linerectangular==='Medium'){
               return designproperty.height='35px';
        }
        if(props.linerectangular==='Large'){
               return designproperty.height='40px';
        }
    },
    fontSize(props){
        if(props.linerectangular==='Medium'||props.linerectangular==='Large'){
            return designproperty.fontSize='14px';
        }
        if(props.capsulesize){
        switch(props.capsulesize){
            case 'XtraSmall':return designproperty.fontSize='10px';
            case 'Small':return designproperty.fontSize='12px';
            case 'Medium':return designproperty.fontSize='14px';
            case 'Large':return designproperty.fontSize='16px';
            case 'XtraLarge':return designproperty.fontSize='16px';
            default:return '';
          }
        }
        if(props.rectangular){
            switch(props.rectangular){
                case 'XtraSmall':return designproperty.fontSize='10px';
                case 'Small':return designproperty.fontSize='12px';
                case 'Medium':return designproperty.fontSize='14px';
                case 'Large':return designproperty.fontSize='16px';
                case 'XtraLarge':return designproperty.fontSize='16px';
                default:return '';
              }
            }
        if(props.linecapsule){
            switch(props.linecapsule){
                case 'XtraSmall':return designproperty.fontSize='10px';
                case 'Small':return designproperty.fontSize='12px';
                case 'Medium':return designproperty.fontSize='14px';
                case 'Large':return designproperty.fontSize='16px';
                case 'XtraLarge':return designproperty.fontSize='16px';
                default:return '';
            }
        }
        if(props.disabledrectangular){
            switch(props.disabledrectangular){
              case 'Small':return designproperty.borderRadius='12px';
              case 'Medium':return designproperty.borderRadius='14px';
              case 'Large':return designproperty.borderRadius='14px';
              default:return '';
            }
          }
          if(props.disabledcapsule){
            switch(props.disabledcapsule){
              case 'Small':return designproperty.borderRadius='12px';
              case 'Medium':return designproperty.borderRadius='14px';
              case 'Large':return designproperty.borderRadius='14px';
              default:return '';
            }
          }
    },
    hover:{
        opacity(props){
            if(props.capsulesize){
                return designproperty.hover.opacity='0.5';
            }
            if(props.rectangular){
                return designproperty.hover.opacity='0.5';
            }
        }
    }
}
export default styles;