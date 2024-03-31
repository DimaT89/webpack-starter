import React, {useState} from 'react';
import classes from './App.module.scss'
import {Link, Outlet} from 'react-router-dom';
import About from '@/pages/about/About';
import reactPng from '@/assets/reactPNG.png';
import reactJpg from '@/assets/reactJPG.jpg';
import ReactSvg from '@/assets/reactSVG.svg';

export const App = () => {
  const [count, setCount] = useState<number>(0)

  const increment = () => setCount(prev => prev + 1)

  if (__ENV__ === 'development') {
    //addDevtools()
  }

  return (
    <div>
      <h1>!!!!!</h1>
      <h1>PLATFORM={__PLATFORM__}</h1>
      <div>
        <img width={100} height={100} src={reactPng} alt=""/>
        <img width={100} height={100} src={reactJpg} alt=""/>
      </div>
      <div>
        <ReactSvg/>
      </div>
      <Link to={'/about'}>About</Link>
      <br/>
      <Link to={'/shop'}>Shop</Link>
      <h1 className={classes.value}>{count}</h1>
      <button className={classes.button} onClick={increment}>inc</button>
      <About/>
    </div>
  );
};
