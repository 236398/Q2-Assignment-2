import React from "react";
import style from "../style.module.css"
const header = ()=>{
    return(
         <header>
        <nav className={style.navbar}>
          
          <div>
            
              <a href="/">Home</a> <a href="/about">About</a> <a href="/contact">Contact</a> <a href="/services">Services</a>
              </div>
                  </nav>
      </header>
    )
}
export default header;