import style from "./style.module.css"
import Headerr from "../component/header";
import Footerr from "../component/footer";

export default function about() {
  return (
    <>

          <Headerr/>
      <section className={style.hero}>
        <h1>Welcome to The about page</h1>
        
      </section>
<Footerr/>
      
    
     
    </>
  );
}