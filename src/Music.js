import React from 'react';
import MusicItems from './MusicItems';
//for music menu
const Music=(props)=>{
    
  
return (
    
    <div >
{props.music.map((item)=>{
    
return <MusicItems music={item}

key={item.key}/>

})
}
    </div>
)
}
export default Music;