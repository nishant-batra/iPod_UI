import React from 'react';
 import './index.css';
const ScreenItems=(props)=>{
const {title,selected}=props.item;

let bgcol='white';
let br=0;
if(title==="Settings")
br=1;
if(selected)
{
bgcol='#87DCD8';
}
return(
<div className={"screen-item" + (br ? ' border-08': '')} style={{background:bgcol}}>
<b>{title}</b>

{selected===1 && <span style={{color:"grey"}}> <b>&gt;</b> </span>}
</div>
       
    
);

}
export default ScreenItems;