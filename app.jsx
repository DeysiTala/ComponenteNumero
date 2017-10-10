

'using strict';
//import React from "react";
//import ReactDOM from "react-dom"; 




class Country extends React.Component {
  render(){
      return(
          <div>
          <header>
          <h3 className="text-center">Sign up</h3>
          <p className="text-center">Join now for free ride credit</p>
          </header>
          <section className="container">
              <form className="text-center">
                  
                      
                      <br></br>
                      <div className="row">
        <div className="col-sm-12 text-center">
           <div className="btn-group">
    
    
<a className="dropdown-toggle" data-toggle="dropdown" href="#">
Select Country<span class="caret"></span></a>
<ul className="dropdown-menu">
  <li><a href="#">
    <img src="./flags/flat/ico/Australia.ico" width="30"/>Australia</a></li>
    <li><a href="#"><img src="./flags/flat/ico/Canada.ico" width="30"/>Canada</a></li>
  <li><a href="#"><img src="./flags/flat/ico/China.ico" width="30"/>China</a></li>
  <li><a href="#"><img src="./flags/flat/ico/France.ico" width="30"/>France</a></li>
  <li><a href="#"><img src="./flags/flat/ico/India.ico" width="30"/>India</a></li>
    <li><a href="#"><img src="./flags/flat/ico/Japan.ico" width="30"/>Japan</a></li>
  <li><a href="#"><img src="./flags/flat/ico/Mexico.ico" width="30"/>Mexico</a></li>
  <li><a href="#"><img src="./flags/flat/ico/Puerto-Rico.ico" width="30"/>Puerto Rico</a></li>
  <li><a href="#"><img src="./flags/flat/ico/United-Kingdom.ico" width="30"/>United Kingdom</a></li>                         
</ul>
</div>

</div>
</div>
<br></br>
<input type="text" name="celular" value="+51" id="primerinput"></input><input id="phonenum" type="tel" placeholder="112233445" pattern="^\d{3}\d{3}\d{3}$" required ></input>
                     
                                           
                    </form>

          </section>
      </div>
      )
  }
}

ReactDOM.render(<Country />, document.getElementById("container"));


//export default App;
