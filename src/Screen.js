import React from 'react';
import ScreenItems from './ScreenItems'
import CoverFlow from './CoverFlow'
import Music from './Music'
import Games from './Games'
import Settings from './Settings'
const Screen=(props)=>{
// Determines what to display on the inner screen based on the selection made
const {items,display}=props;

if(display[4]===1)
{
return(

 <div className="inner-div background-img">
        <h1 className="main-heading">Ipod.js</h1>
{items.map((item)=>{
    
return <ScreenItems item={item}

key={item.key}>

</ScreenItems>

})
}
</div>
);
}
  else if(display[0]===1)
  {  
      return( 
        <div className="inner-div white-bg">
          <CoverFlow/>
          </div>
      );

  }
  else if(display[1]===1)
  {  
      return( 
        <div className="inner-div background-img-music" >
          <Music 
          music={props.music}
          key={props.music.key}/>
          </div>
      );

  }
  else if(display[2]===1)
  {  
      return( 
        <div className="inner-div white-bg">
          <Games/>
          </div>
      );

  }
  else if(display[3]===1)
  {  
      return( 
        <div className="inner-div white-bg">
          <Settings/>
          </div>
      );

  }


}
export default Screen;