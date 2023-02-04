import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';
import Firstlayout from "./FirstLayout/Firstlayout";
import Item from './ItensComponent/Item';

//images

import camisaazul from './images/camisaazul.png';
import camisabranca from './images/camisabranca.png';

import blacksapato from './images/blacksapato.png';
import sapatobege from './images/sapatobege.png';
import sapatored from './images/sapatored.png';

function App() {
  const items = [
    {
      url: camisabranca,
      name: "Camisa Branca",
      price: 10,
    },
    {
      url: camisaazul,
      name: "Camisa Azul",
      price: 15,
    },
    {
      url: blacksapato,
      name: "Sapato preto",
      price: 20,
    },
    {
      url: sapatobege,
      name: "Sapato bege",
      price: 20,
    },
    {
      url: sapatored,
      name: "Sapato vermelho",
      price: 20,
    }
  ];

  
  const [menu, setMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  
  useEffect(() => {
    if (window.innerWidth < 430){
      const navigation = document.getElementById('navigation');
      navigation.style.display = 'none';
      setMenu(true);
    } 
  }, []);

  
  
  function UseMenu(){
    if (window.innerWidth < 430){
      const navigation = document.getElementById('navigation');
      navigation.style.display = 'none';
      setMenu(true);
    } else if (window.innerWidth > 430){
      const navigation = document.getElementById('navigation');
      navigation.style.display = 'block';
      setMenu(false);
    }       
  }

  function ShowMenuFunction(){
    const geral = document.getElementById('body');
    setShowMenu(!showMenu);
    if (showMenu === false){
      geral.style.overflowY = 'hidden';
    }else{
      geral.style.overflowY = 'auto';
    }
  }
  window.addEventListener('resize', UseMenu);
  return (
    <div  className="App" >
      <div style={{backgroundColor: '#FEF6DE', width: '110%'}}>
        {menu ? <button id='hamburguer' className="hamburguer-bar" onClick={() => {setShowMenu(!showMenu); ShowMenuFunction();}}>  </button>: null}
      </div>
    
      <nav id='navigation' className='nav'>
        <ul className='ul'>
          <li className='li'>Home</li>
          <li className='li'>Product</li>
          <li className='li'>Review</li>
          <li className='li'>Contact</li>
        </ul>
      </nav>
      <Firstlayout />
      {showMenu ?
        <div id='board-menu-navigation'>
          <button onClick={ShowMenuFunction} style={{padding: '15px', borderRadius: '50px',backgroundColor: 'rgba(211, 9, 26, 0.741)'}}></button>
          <div className='menu-table'>
            <h3 onClick={ShowMenuFunction}>Home</h3>
            <h3 onClick={ShowMenuFunction}>Product</h3>
            <h3 onClick={ShowMenuFunction}>Review</h3>
            <h3 onClick={ShowMenuFunction}>Contact</h3>
          </div>
        </div>
        : null}
      <div className='objectList'>
        <div className='objectItemOne'>
          <h1 className='TitleObjects'>Most Selling   Products......</h1>
          <p className='ParagrahpObjects'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem.</p>
        </div>
        {items.map(item => 
        <Item url={item.url} object={item.name} price={item.price} />
        )}
      </div>
    </div>
  );
}

export default App;