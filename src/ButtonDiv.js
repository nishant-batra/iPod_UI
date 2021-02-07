import React from 'react';
import './index.css';
import Screen from './Screen'
import {fontAwesome} from "react-icons/fa"
import {FaFastForward, FaFastBackward, FaPause, FaPlay} from "react-icons/fa"
const ButtonDiv=(props)=>{

return(

<div className="button-div">
    <button className="buttons" id="menu">MENU</button>
    <button className="buttons" id="fast-forward"><FaFastForward/></button>
    <button className="buttons" id="fast-backward"><FaFastBackward/></button>
    <button className="buttons" id="pause"> <FaPause/> <FaPlay/> </button>
    <div className="greyspace"></div>
</div>



);
}





export default ButtonDiv;