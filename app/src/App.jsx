import React from 'react';
import Navbar from './UI/Navbar';

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './Components/Home';
import About from './Components/About';


import rasm from './Images/lo.png'

import Fearutes from './Components/Features';

import rasm1 from './Images/watch (1).png'
import rasm2 from './Images/watch (2).png'
import rasm3 from './Images/watch (3).png'
import rasm4 from './Images/watch (4).png'
import rasm5 from './Images/watch (5).png'
import rasm6 from './Images/watch (6).png'
import rasm7 from './Images/watch (7).png'
import rasm8 from './Images/watch (8).png'

import Watches from './Components/Watches';

import foto1 from './Fotos/foto (1).jpg'
import foto2 from './Fotos/foto (2).jpg'
import foto3 from './Fotos/foto (3).jpg'
import foto4 from './Fotos/foto (4).jpg'
import foto5 from './Fotos/foto (5).jpg'
import foto6 from './Fotos/foto (6).jpg'
import foto7 from './Fotos/foto (7).jpg'
import foto8 from './Fotos/foto (8).jpg'


import Error from './Components/Error'
import Video from './Components/Video';
import Product from './Components/Product';



import portret from './portret/portret (1).jpg'




const App = () => {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About img={rasm} />} />
          <Route path='/features' element={<Fearutes img1={rasm1} img2={rasm2} img3={rasm3} img4={rasm4} img5={rasm5} img6={rasm6} img7={rasm7} img8={rasm8} />} />
          <Route path='/watches' element={<Watches foto1={foto1} foto2={foto2} foto3={foto3} foto4={foto4} foto5={foto5} foto6={foto6} foto7={foto7} foto8={foto8} />} />

          <Route path='/video' element={<Video />} />
          <Route path='/product' element={<Product  portret={portret} name="Rolex"/>} />



          <Route path='*' element={<Error />} />

        </Routes>

      </BrowserRouter>


    </>
  );
};

export default App;

