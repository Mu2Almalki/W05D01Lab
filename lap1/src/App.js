import logo from './logo.svg';
import './App.css';
import React, { useState  } from 'react';
import Header from './Header ';
import languageContext from './language-context';
import Body from './Body';
function App() {
  const [lan , setLan]= useState('');

  return (
 <languageContext.Provider value={{languageValue:lan}}>
    <div className="App">
     <button onClick={()=>setLan('E')}>English</button>
     <button onClick={()=>setLan('A')}>Arabic</button>
     <button onClick={()=>setLan('J')}>Japanese</button>
     <Header/>
     <Body/>
    </div>
    
    
    </languageContext.Provider>
  );
}

export default App;
