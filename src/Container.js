import React from 'react';
import './index.css';
import Screen from './Screen'
import ButtonDiv from './ButtonDiv'
import {fontAwesome} from "react-icons/fa"
import {FaFastForward, FaFastBackward, FaPause, FaPlay} from "react-icons/fa"
const Container=(props)=>{
const {items}=props;

return(
<div className="outer-div">
<Screen
items={items}

/>
<ButtonDiv/>

</div>

);
}





export default Container;