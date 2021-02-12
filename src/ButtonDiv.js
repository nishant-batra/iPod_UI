import React from 'react';
import './index.css';
import {FaFastForward, FaFastBackward, FaPause, FaPlay} from "react-icons/fa";
class ButtonDiv extends React.Component {
   
    constructor(props)
    {
        super(props);

    }



    render()
    {
return(

<div className="button-div"
 onMouseDown={(event)=>this.props.onMD(event)} onMouseMove={(event)=>this.props.onMM(event)} onMouseUp={(event)=>this.props.onMU(event)}
  >
   
    <div className="buttons" id="menu" onClick={()=>this.props.menuClick()}>MENU</div>
    <div className="buttons" id="fast-forward"><FaFastForward/></div>
    <div className="buttons" id="fast-backward"><FaFastBackward/></div>
    <div className="buttons" id="pause"> <FaPause/> <FaPlay/> </div>
    <div className="greyspace" onClick={()=>this.props.onSelect()}></div>
    
</div>



);
    }
}





export default ButtonDiv;