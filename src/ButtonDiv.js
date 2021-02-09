import React from 'react';
import './index.css';
import {FaFastForward, FaFastBackward, FaPause, FaPlay} from "react-icons/fa";
import { render } from '@testing-library/react';
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
//   ref={this.buttonref
//   }
  >
   
    <button className="buttons" id="menu">MENU</button>
    <button className="buttons" id="fast-forward"><FaFastForward/></button>
    <button className="buttons" id="fast-backward"><FaFastBackward/></button>
    <button className="buttons" id="pause"> <FaPause/> <FaPlay/> </button>
    <div className="greyspace"></div>
    
</div>



);
    }
}





export default ButtonDiv;