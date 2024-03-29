import React from "react";
import { userContext } from "./8-9/context";

export default function Content(){
    let user = React.useContext(userContext)

    const contentStyle ={
        backgroudColor:'#ddd',
        textAlign:'center',
        margin:10,
        padding:10
    }

    return(
        <div style={contentStyle}>
            Hello {user}
        </div>
    )
}