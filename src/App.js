
import './index.css';
import Profile from './Profile';
import React from 'react';

class App extends React.Component{
  constructor()
  {
    super();
  this.state={
    data:"Narinder"
  }
    
  }
   render()
      {
        
        return(
         <h1>Hello World{this.state.data}</h1>
      );
      
   
}
}
export default App;


    
     
