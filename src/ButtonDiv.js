import React from 'react';
import './index.css';
import {FaFastForward, FaFastBackward, FaPause, FaPlay} from "react-icons/fa";
const ButtonDiv =(props)=> {
   
    
return(

<div className="button-div"
 onMouseDown={(event)=>props.onMD(event)} onMouseMove={(event)=>props.onMM(event)} onMouseUp={(event)=>props.onMU(event)}
  >
   
    <div className="buttons" id="menu" onClick={()=>props.menuClick()}>MENU</div>
    <div className="buttons" id="fast-forward"><FaFastForward/></div>
    <div className="buttons" id="fast-backward"><FaFastBackward/></div>
    <div className="buttons" id="pause"> <FaPause/> <FaPlay/> </div>
    <div className="greyspace" onClick={(e)=>props.onSelect(e)}></div>
    
</div>



);
    
}





export default ButtonDiv;