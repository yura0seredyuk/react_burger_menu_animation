import React, { useState } from "react";
import "./style.css";
import classNames from 'classnames'

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={classNames('navIcon', {
        'open': isOpen
      })}
      onClick={() => setIsOpen(!isOpen)}
    >
      <span className='firstLine'></span>
      <span className='secondLine'></span>
      <span className='thirdLine'></span>
    </div>  
  );
}
