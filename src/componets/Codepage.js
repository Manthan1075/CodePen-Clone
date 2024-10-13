import React, { useState, useEffect } from 'react';
import './style.css';

function changer(){
    let textarea = document.querySelector('.textarea');
    let current = "white";
    if(current === "white"){
        textarea.style.background = "black";
        textarea.style.color = "white";
        current = "black";
        return;
    }
    if(current === "black"){
        textarea.style.background = "white";
        textarea.style.color = "black";
        current = "white";
        return;
    }
}

function Codepage() {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');
  const [srcDoc, setSrcDoc] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <div>
        <button className='modechanger' onClick={changer}>Click</button>
      <section className='coding-section'>
        <div className='html'>
          <h2>HTML</h2>
          <textarea
            className='htmlcode textarea'
            value={html}
            onChange={(e) => setHtml(e.target.value)}
          ></textarea>
        </div>

        <div className='css'>
          <h2>CSS</h2>
          <textarea
            className='csscode textarea'
            value={css}
            onChange={(e) => setCss(e.target.value)}
          ></textarea>
        </div>

        <div className='js'>
          <h2>JavaScript</h2>
          <textarea
            className='jscode textarea'
            value={js}
            onChange={(e) => setJs(e.target.value)}
          ></textarea>
        </div>
      </section>
      <section className='output'>
        <h3>Output</h3>
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        ></iframe>
      </section>
    </div>
  );
}

export default Codepage;
