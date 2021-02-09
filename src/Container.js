import React from 'react';
import './index.css';
import Screen from './Screen'
import ButtonDiv from './ButtonDiv'
const Container=(props)=>{
const {items}=props;

return(
<div className="outer-div">
<Screen
items={items}

/>
<ButtonDiv 
onMD={props.onMD}
onMM={props.onMM}
onMU={props.onMU}

/>

</div>

);
}





export default Container;