import React from 'react';
import imagesrc from './imageInSrc.png';
import './App.css';

function App() {
  return (
    <>
  <div style={{border:'solid 1px black',maxWidth:'100vw'}}>
<h1 className="title">Mohamed Ali Bouzaiene</h1>
<br/>
<img src={imagesrc} style={{width:320,height:240}}/>
<br/>
<img src="/imageInPublic.png" style={{width:320,height:240}}/>
</div>
<video style={{width:320,height:240}} controls>
<source src="myVideo.mp4" type="video/mp4"/>
</video>
</>
  );
};

export default App;
