import React from 'react';

import Container from './Container'

class App extends React.Component {
  constructor(){
    super();
    this.state={
      items:[
        {title:"Cover Flow",
        selected:1,
      key:0,
      },
        {
          title:"Music",
          selected:0,
          key:1,
        },
        {
          title:"Games",
          selected:0,
          key:2,
        }
        ,
        {title:"Settings",
        selected:0,
        key:3,

        }
              
      ],
      music:[
        {
          title:"All Songs",
          selected:1,
          key:4
        },
        {
          title:"Artists",
          selected:0,
          key:5,
        },
        {
          title:"Playlists",
          selected:0,
          key:6,
        }


      ]
    }
    this.centerx=708;
    this.centery=670;
    this.i=0;
    this.display=[
      0, 0, 0, 0, 1
      ]
  }
  //handles the click for gesture Wheel
  handleclick=(e)=>{
 
    this.i=1;
    this.initialX=e.clientX;
    this.initialY=e.clientY;
   }
   //handles mouse move on the gesture wheel
    handlemousemove=(e)=>{
       if(this.i!==1)
       return;
  
    let iangle=Math.atan2(this.initialY-this.centery,this.initialX-this.centerx)*180/Math.PI;
    let nangle=Math.atan2(e.clientY-this.centery,e.clientX-this.centerx)*180/Math.PI;
  
   if(nangle-iangle>15)
   {
this.initialY=e.clientY;
this.initialX=e.clientX;
this.handleanlgechange(1);
   }
   else
   if(nangle-iangle<-15)
   {
       this.initialY=e.clientY;
this.initialX=e.clientX;
this.handleanlgechange(-1);
   }

   }
   //handles mouse up on the gesture wheel
   handlemouseup=(e)=>{
       this.i=0;
       return;
   }
   // Determines whether to go up or down in the selection menu
   //for both the main screen and the music subscreen 
 handleanlgechange=(angle)=>{
   if(this.display[4]===1)
   {
const {items}=this.state;
  let index=0;
  for(index;index<items.length;index++)
  {
    if(items[index].selected===1)
    break;
  }
  items[index].selected=0;
  if(angle===1)
  index=(index+1)%4;
  else
  {
    if(index===0)
    index=3;
    else
    index--;
  }
  items[index].selected=1;
  this.setState({
    items
  });
}
else{
  const {music}=this.state;
  let index=0;
  for(index;index<music.length;index++)
  {
    if(music[index].selected===1)
    break;
  }
  music[index].selected=0;
  if(angle===1)
  index=(index+1)%3;
  else
  {
    if(index===0)
    index=2;
    else
    index--;
  }
 music[index].selected=1;
  this.setState({
    music
  });
}
}
//handles the click on the grey area between the buttons for selection
  handleSelect=(e)=>{
    const {items}=this.state;
    let index=0;
 
  for(index;index<items.length;index++)
  {
    if(items[index].selected===1)
    break;
  }
  for (let k in this.display)
  {
    this.display[k]=0;
  }
  this.display[index]=1;
this.setState({
  items,
});
  }
  //handles the click on the MENU button
menuSelect=()=>{
  const{items}=this.state;
  for (let k in this.display)
  {
    this.display[k]=0;
  }
  this.display[4]=1;
  this.setState({
    items,
  })
}
  
  
 
  render()
  {
    const {items,music}=this.state;
    
 
  return (
    <div className="App">
     <Container items={items}
     onMD={this.handleclick}
     onMM={this.handlemousemove}
     onMU={this.handlemouseup}
     onSelect={this.handleSelect}
     menuClick={this.menuSelect}
     display={this.display}
     music={music}
   />
  
  
    </div>
      
  );
  }
 
}

export default App;
