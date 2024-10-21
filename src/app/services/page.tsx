import style from "./style.module.css";
import Headerr from "../component/header"
import Footer from "../component/footer"
export default function services() {
  return (
    <>

           <Headerr/>
      <section className={style.hero}>
        <h1>following services</h1>
        <br /><br /><br /><br /><br />
        <button><a href="/services/wendevelopment">Web Develoment</a></button>
        <button><a href="/services/appdevelopment">App development</a></button>
      </section>
      

      <Footer/>
      
    
     
    </>
  );
}