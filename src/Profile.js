
 import React from "react";

function Profile(props){
  
   
 return( 
        <div>
        
        <h1>user component</h1>
        <button onClick={()=>props.data()}>Call data function </button>
        </div>
    )


    
}
export default Profile;
    