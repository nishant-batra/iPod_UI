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
              
      ]
    }
  }
//   handleanglechange=(angle)=>{
//     const {items}=this.state;
   
//       console.log(items);
    
// if(angle==1)
// {
// i=(i+1)%4;
// }
// else
// if(angle==-1)
// {
//   i=i-1;
//   if(i==-1)
//   i=3;
// }
// items[i].selected=1;
// this.setState({
//   items
// }
// );
  //}
  render()
  {
    const {items}=this.state;
 
  return (
    <div className="App">
     <Container items={items}
     //onAngleChange={this.handleanglechange}
   />
    </div>
  );
  }
 
}

export default App;
