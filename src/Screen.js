import React from 'react';
import ScreenItems from './ScreenItems'
const Screen=(props)=>{

const {items}=props;

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
export default Screen;