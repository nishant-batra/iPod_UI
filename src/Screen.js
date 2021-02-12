import React from 'react';
import ScreenItems from './ScreenItems'
import CoverFlow from './CoverFlow'
import Music from './Music'
import Games from './Games'
import Settings from './Settings'
const Screen=(props)=>{

const {items,display}=props;
if(display[4]===1)
{
return(

 <div className="inner-div">
        <h1 className="main-heading">Ipod.js</h1>
{items.map((item)=>{
    // console.log(item.key);
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
          <CoverFlow/>
      );

  }
  else if(display[1]===1)
  {  
      return( 
          <Music/>
      );

  }
  else if(display[2]===1)
  {  
      return( 
          <Games/>
      );

  }
  else if(display[3]===1)
  {  
      return( 
          <Settings/>
      );

  }


}
export default Screen;