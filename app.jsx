

'using strict';
//import React from "react";
//import ReactDOM from "react-dom"; 
class SignUp extends Component {
	constructor(props) {
		super(props)
		this.state = {
			alert: []
		}
		this.handleSubmit = this.handleSubmit.bind(this)
	}
	handleSubmit(e){
    e.preventDefault()
    let alert = [];
    
    const phone = this.phone.value
    const re = /^([0-9]+){9}$/;
    if(!re.test(phone)) {
      alert.push("Phone is not valid");
    }
       
    
    this.setState({alert: alert})
    e.submit();
  }
  
	render() {
	  const { model } = this.props;
  
	  const onInputChange = e => {
		this.setState({
		  goFordward: e.target.checked
		});
	  };
  
	  return (
		  <div>
			  <section className="container-fluid form text-center">
				  <header>
					  <div className="btnBack">
						  <NavLink to="/signup-validation">
							  <i className="material-icons back">keyboard_arrow_left</i>
						  </NavLink>
					  </div>
					  <h1 className="text-center">Sign Up</h1>
					  <h4 className="text-center">Join Now for free ride credit.</h4>
					  <hr />
				  </header>
				  <form className="text-center">
				  <br></br>
				  <div className="row">
					  <div className="col-sm-12 text-center">
						  <div className="btn-group">
							  <span>Select Country</span>
							  <select className="form-control ">
								  <option id="per">Perú</option>
								  <option id="mex">Mexico</option>
								  <option id="chile">Chile</option>
							  </select>
						  </div>
					  </div>

					  <br></br>
					  <br></br>
					  <br></br>
					  <div className="col-sm-12 text-center">
						  <input
						   type="text"
						   name="celular" 
						   value="+51"
						    id="primerinput"></input>
								<div className="alert">
								{ this.state.alert.map(val => {
									return <div>{val}</div>
								})}
								</div>
				
								<label for="phone" >Phone</label>
								<input id="phone" type="textfield"
									ref={ input => this.phone = input }
								/>
						
																			
								<button onClick={this.handleSubmit}>Submit</button>
							</div>
					  }
					 </div>
				  </form>
				 </section>
		  </div>
	  );
	 
	}
  }
 export default SignUp;