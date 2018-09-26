// import from '../components/;
const styles={
    background(props){
        if(props.kind==='filled'){
            return props.background;
        }
        if(props.capsulesize==='Small'||props.capsulesize==='Medium'||props.capsulesize==='Large'||props.capsulesize==='XtraLarge'){
            return props.background;   
         }
        if(props.capsulesize==='XtraSmall')
        {
            return props.background;
        }
        if(props.rectangular==='Small'||props.rectangular==='Medium'||props.rectangular==='Large'||props.rectangular==='XtraLarge'||props.rectangular==='XtraSmall'){
            return props.background;
        }
        if(props.linecapsule==='XtraSmall'||props.linecapsule==='Small'||props.linecapsule==='Medium'||props.linecapsule==='Large'||props.linecapsule==='XtraLarge'){
            return props.background;
        }
        if(props.linerectangular==='Medium'||props.linerectangular==='Large'){
            return props.background;
        }
        if(props.disabledcapsule==='Small'||props.disabledcapsule==='Medium'||props.disabledcapsule==='Large'){
            return props.background;
        }
        if(props.disabledrectangular==='Small'||props.disabledrectangular==='Medium'||props.disabledrectangular==='Large'){
            return props.background;
        }
       return '';   
    },
    color(props){
        if(props.kind==='filled'){
            return props.primary;
        }
        if(props.capsulesize==='Small'||props.capsulesize==='Medium'||props.capsulesize==='Large'||props.capsulesize==='XtraLarge'){
            return props.primary;   
         }
        if(props.capsulesize==='XtraSmall')
        {
            return props.primary;
        }
        if(props.rectangular==='Small'||props.rectangular==='Medium'||props.rectangular==='Large'||props.rectangular==='XtraLarge'||props.rectangular==='XtraLarge'){
            return props.primary;
        }
        if(props.linecapsule==='XtraSmall'||props.linecapsule==='Small'||props.linecapsule==='Medium'||props.linecapsule==='Large'||props.linecapsule==='XtraLarge'){
            return props.primary;
        }
        if(props.linerectangular==='Medium'||props.linerectangular==='Large'){
            return props.primary;
        }
        if(props.disabledcapsule==='Small'||props.disabledcapsule==='Medium'||props.disabledcapsule==='Large'){
            return props.primary;
        }
        if(props.disabledrectangular==='Small'||props.disabledrectangular==='Medium'||props.disabledrectangular==='Large'){
            return props.primary;
        }
       return props.color;
    },
    outline(props){
        if(props.kind==='outlined'){
          return "1px solid"+props.outline;
        }
    },
    borderRadius(props){
       if(props.shape==='BluntEdged'){
           return '4px';
       }
       if(props.shape==='SharpEdged'){
           return '0px';
       }
       if(props.shape==='Capsular'){
           return '40%';
       }
       if(props.shape==='Circle'){
           return '50%';
       }
       if(props.linecapsule==='XtraSmall'||props.linecapsule==='Small'||props.linecapsule==='Medium'||props.linecapsule==='Large'||props.linecapsule==='XtraLarge'){
           return '10px';
       }
       if(props.linerectangular==='Medium'||props.linerectangular==='Large'){
        return '2px';
       }
       if(props.capsulesize){
          switch(props.capsulesize){
           case 'XtraSmall':return '10px';
           case 'Small':return '12.5px';
           case 'Medium':return '15px';
           case 'Large':return '20px';
           case 'XtraLarge':return '25px';
           default:return '';
         }
       }
    if(props.rectangular){
      switch(props.rectangular){
        case 'XtraSmall':return '2px';
        case 'Small':return '2px';
        case 'Medium':return '4px';
        case 'Large':return '4px';
        case 'XtraLarge':return '4px';
        default:return '';
      }
    }
    if(props.disabledcapsule){
        switch(props.disabledcapsule){
          case 'Small':return '10px';
          case 'Medium':return '15px';
          case 'Large':return '20px';
          default:return '';
      }
    }
    if(props.disabledrectangular){
        switch(props.disabledrectangular){
          case 'Small':return '1px';
          case 'Medium':return '2px';
          case 'Large':return '2px';
          default:return '';
        }
      }
    },
    width(props){
        if(props.shape==='Circle'){
            return '10%'
        }
        if(props.block===true){
            return '100%'
        }
        if(props.sizes==='Small'){
           return '30%'
        }
        else if(props.sizes==='Medium'){
           return '50%'
        }
        else if(props.sizes==='Large'){
           return '70%'
        }
        return '';
    },
    opacity(props){
        if(props.disabled===true){
           return '0.50';
        }
    },
    border(props){
        if(props.linecapsule==='XtraSmall'||props.linecapsule==='Small'){
            return '0.5px solid'+props.primary;
        }
        if(props.linerectangular==='Medium'||props.linerectangular==='Large'){
            return '1px solid'+props.primary;
        }
        if(props.linecapsule){
            switch(props.linecapsule){
                case 'Medium':return '0.5px solid'+props.primary;
                case 'Large':return '0.5px solid'+props.primary;
                case 'XtraLarge':return '0.5px solid'+props.primary;
                default:return '';      
            }
        }
    },
    padding(props){
        if(props.capsulesize||props.rectangular){
            let temp=props.capsulesize?props.capsulesize:props.rectangular;
        switch(temp){
            case 'XtraSmall':return '3px 8px 4px 8px';
            case 'Small':return '6px 12px 5px 12px';
            case 'Medium':return '7px 15px 5px 15px';
            case 'Large':return '9px 18px 7px 18px';
            case 'XtraLarge':return '12px 24px 8px 24px';
            default:return '';      
          }
        }
        if(props.linecapsule){
            switch(props.linecapsule){
                case 'XtraSmall':return '3px 8px 4px 8px';
                case 'Small':return '6px 12px 5px 12px';
                case 'Medium':return '7px 15px 5px 15px';
                case 'Large':return '9px 18px 7px 18px';
                case 'XtraLarge':return '12px 24px 8px 24px';
                default:return '';
              }
            }
        if(props.disabledcapsule||props.disabledrectangular){
            switch(props.disabledcapsule){
                case 'Small':return '6px 12px 5px 12px';
                case 'Medium':return '7px 15px 5px 15px';
                case 'Large':return '9px 18px 7px 18px';
                default:return '';
              }
        }
        if(props.linerectangular==='Medium'){
            return '10px 22px 9px 22px';
        }
        if(props.linerectangular==='Large'){
               return '10px 22px 9px 23px';
        }
        
    },
    height(props){
        if(props.capsulesize||props.rectangular){
            let temp=props.capsulesize?props.capsulesize:props.rectangular;
        switch(temp){
            case 'XtraSmall':return '20px';
            case 'Small':return '25px';
            case 'Medium':return '30px';
            case 'Large':return '40px';
            case 'XtraLarge':return '50px';
            default:return '';
          }
        }
        if(props.linecapsule){
            switch(props.linecapsule){
                case 'XtraSmall':return '20px';
                case 'Small':return '25px';
                case 'Medium':return '30px';
                case 'Large':return '40px';
                case 'XtraLarge':return '50px';
                default:return '';
              }
            }
        if(props.disabledcapsule||props.disabledrectangular){
            let temp=props.disabledcapsule?props.disabledcapsule:props.disabledrectangular;
            switch(temp){
                case 'Small':return '25px';
                case 'Medium':return '30px';
                case 'Large':return '40px';
                default:return '';
            }
        }
        if(props.linerectangular==='Medium'){
               return '35px';
        }
        if(props.linerectangular==='Large'){
               return '40px';
        }
    },
    fontSize(props){
        if(props.linerectangular==='Medium'||props.linerectangular==='Large'){
            return '14px';
        }
        if(props.capsulesize||props.rectangular){
            let temp=props.capsulesize?props.capsulesize:props.rectangular;
        switch(temp){
            case 'XtraSmall':return '10px';
            case 'Small':return '12px';
            case 'Medium':return '14px';
            case 'Large':return '16px';
            case 'XtraLarge':return '16px';
            default:return '';
          }
        }
        if(props.linecapsule){
            switch(props.linecapsule){
                case 'XtraSmall':return '10px';
                case 'Small':return '12px';
                case 'Medium':return '14px';
                case 'Large':return '16px';
                case 'XtraLarge':return '16px';
                default:return '';
              }
            }
        if(props.disabledrectangular||props.disabledcapsule){
            let temp=props.disabledcapsule?props.disabledcapsule:props.disabledrectangular;
            switch(temp){
              case 'Small':return '12px';
              case 'Medium':return '14px';
              case 'Large':return '14px';
              default:return '';
            }
          }
    },
    hover:{
        opacity(props){
            if(props.capsulesize||props.rectangular){
                return '0.5';
            }
        },
        color(props){
            if(props.linecapsule||props.linerectangular){
                return props.background;
            }
            if(props.disabledcapsule||props.disabledrectangular){
                return props.background;
            }
        },
        background(props){
            console.log("hover here",props.linecapsule+""+props.linerectangular+""+props.disabledcapsule+""+props.disabledrectangular)
            if(props.linerectangular){
                return props.primary;
             }
            if(props.linecapsule||props.disabledcapsule||props.disabledrectangular){
                return props.primary;
            }
        }
    }
}
export default styles;