import React from "react";
function StatsCard({title,value}){
return (
    <div>
        <h2>{title}</h2>
        <h1>{value}</h1>
    </div>
)
}
export default React.memo(StatsCard);