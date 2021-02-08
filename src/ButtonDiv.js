import React from 'react';
import './index.css';
import {FaFastForward, FaFastBackward, FaPause, FaPlay} from "react-icons/fa";
const ButtonDiv=(props)=>{
let i=0;
let initialX=0,initialY=0;
let elem=document.getElementsByClassName("button-div");
console.log(elem);
let coord=elem[0].getBoundingClientRect();
let centerx=coord.left+175;
let centery=coord.top+175;
console.log(centerx,centery);
  const  handleclick=(e)=>{
     i=1;
     initialX=e.clientX;
     initialY=e.clientY;
    }
    const handlemousemove=(e)=>{
        if(i!=1)
        return;
    //     console.log(e.clientX,e.clientY);
    //     let pos=(initialX-e.clientX)+(initialY-e.clientY);
     let iangle=Math.atan2(initialX-centerx,initialY-centery);
     let nangle=Math.atan2(e.clientX-centerx,e.clientY-centery);
    if(nangle-iangle>0.5)
    {
initialY=e.clientY;
initialX=e.clientX;
console.log("Pos decreased");
    }
    else
    if(nangle-iangle<-0.5)
    {
        initialY=e.clientY;
initialX=e.clientX;
console.log("Pos increased");
    }

    }
    const handlemouseup=(e)=>{
        i=0;
        return;
    }
return(

<div className="button-div"
 onMouseDown={handleclick} onMouseMove={handlemousemove} onMouseUp={handlemouseup}
  >
   
    <button className="buttons" id="menu">MENU</button>
    <button className="buttons" id="fast-forward"><FaFastForward/></button>
    <button className="buttons" id="fast-backward"><FaFastBackward/></button>
    <button className="buttons" id="pause"> <FaPause/> <FaPlay/> </button>
    <div className="greyspace"></div>
    
</div>



);
}





export default ButtonDiv;