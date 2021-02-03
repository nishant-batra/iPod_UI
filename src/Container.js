import React from 'react';
import './index.css';
import {fontAwesome} from "react-icons/fa"
import {FaFastForward, FaFastBackward, FaPause, FaPlay} from "react-icons/fa"
const Container=()=>{
return(
<div className="outer-div">
<div className="inner-div"></div>
<div className="button-div">
    <button className="buttons" id="menu">MENU</button>
    <button className="buttons" id="fast-forward"><FaFastForward/></button>
    <button className="buttons" id="fast-backward"><FaFastBackward/></button>
    <button className="buttons" id="pause"> <FaPause/> <FaPlay/> </button>
    <div className="greyspace"></div>
</div>

</div>

);
}





export default Container;