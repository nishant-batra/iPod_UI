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
  render()
  {
    const {items}=this.state;
 
  return (
    <div className="App">
     <Container items={items}
   />
    </div>
  );
  }
 
}

export default App;
