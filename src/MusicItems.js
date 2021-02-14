import React from "react";
//Returns the items on the music screen
const MusicItems=(props)=>{
    const {title,selected}=props.music;
    let bgcol='white';
let br=0,bl=0;
if(title==="Playlists")
br=1;
if(title==="All Songs")
bl=1;
if(selected)
{
bgcol='#87DCD8';
}
return(
<div className={"music-item" + (br ? ' border-08': '')+(bl ? ' border-08-tl':'')} style={{background:bgcol}}>
<b className="v-middle">{title}</b>

{selected===1 && <span style={{color:"grey"}}> <b>&gt;</b> </span>}
</div>
       
    
);
}
export default MusicItems;