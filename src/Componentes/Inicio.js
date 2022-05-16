import React from "react";
import "../estilo/estilos-Inicio.css";
import { BrowserRouter as Router,
  Link
} from "react-router-dom";



function Inicio(){
    return( 
      <header className="Inicio">
        <div className="fondo1">

        </div>
        <div className="fondo2">
  
        </div>
        <div className="fondo3">
  
        </div>
        <div classNames="fondo4">
  
        </div>
        <section className="Inicio">
            <div className="form-container">
                <h1>
                    Login
                </h1>
                <form action="" method="" id="" onsubmit="">
        <div class="control">
          <label for="name">Cedula</label>
          <input type="text" name="name" id=""></input>
          <label for="psw">Nombres</label>
          <input type="text" name="name" id=""></input>
          <label for="psw">Apellidos</label>
          <input type="text" name="name" id=""></input>
          <label for="psw">Correo</label>
          <input type="text" name="name" id=""></input>
          <button>
          <Router>
      
              <button>
              <Link to="/Administrador">
                Reguistar</Link>
              </button>
                
              
              
  
          
      </Router>
          </button>
              
            </div>  
          </form>
            </div>
        </section>

   
      </header>
      
      
  
    )
    
    
  }
  export default Inicio ;
  
  