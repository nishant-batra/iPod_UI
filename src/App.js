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
    }
    this.centerx=708;
    this.centery=670;
    this.i=0;
    this.display=[
      0, 0, 0, 0, 1
      ]
  }
  handleclick=(e)=>{
    console.log(e.clientX);
    this.i=1;
    this.initialX=e.clientX;
    this.initialY=e.clientY;
   }
    handlemousemove=(e)=>{
       if(this.i!=1)
       return;
   //     console.log(e.clientX,e.clientY);
   //     let pos=(initialX-e.clientX)+(initialY-e.clientY);
    let iangle=Math.atan2(this.initialX-this.centerx,this.initialY-this.centery);
    let nangle=Math.atan2(e.clientX-this.centerx,e.clientY-this.centery);
   if(nangle-iangle>0.25)
   {
this.initialY=e.clientY;
this.initialX=e.clientX;
this.handleanlgechange(-1);
   }
   else
   if(nangle-iangle<-0.25)
   {
       this.initialY=e.clientY;
this.initialX=e.clientX;
this.handleanlgechange(1);
   }

   }
   handlemouseup=(e)=>{
       this.i=0;
       return;
   }
 handleanlgechange=(angle)=>{
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
  handleSelect=()=>{
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
    const {items}=this.state;
    
 
  return (
    <div className="App">
     <Container items={items}
     onMD={this.handleclick}
     onMM={this.handlemousemove}
     onMU={this.handlemouseup}
     onSelect={this.handleSelect}
     menuClick={this.menuSelect}
     display={this.display}
     
   />
  
  
    </div>
      
  );
  }
 
}

export default App;
