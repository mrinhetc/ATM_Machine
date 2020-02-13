import React from "react";
import loginImg from "../../login.svg";

export class Register extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      cname : '',
      cardno : 0,
      pin : 0
    }

    this.cname = this.cname.bind(this);
    this.cardno = this.cardno.bind(this);
    this.pin = this.pin.bind(this);


  }

  cname(event) {
    this.setState({cname: event.target.value})
  }
  cardno(event) {
    this.setState({cardno: event.target.value})
  }
  pin(event) {
    this.setState({pin: event.target.value})
  }


  register(event) {
    fetch('https://localhost:44383/Api/login/InsertEmployee', {
    method: 'post',
    headers : {
      'Accept' : 'application/json',
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify({
      cname : this.state.cname,
      cardno : this.state.cardno,
      pin : this.state.pin
    })
  }).then((Response) => Response.json())
    .then((Result) => {
      if(Result.status == 'Success')
         this.props.history.push("/Dashboard");
      else
        alert('Sorry!!!Unauthorised User')    
    
   } )
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Card Number</label>
              <input type="text" onChange={this.cardno} name="username" placeholder="xxxx-xxxx" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Name</label>
              <input type="text" onChange={this.cname} name="email" placeholder="Name" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Pin</label>
              <input type="text" onChange={this.pin} name="password" placeholder="****" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button"  onClick={this.register} className="btn">
            Register
          </button>
        </div>
      </div>
    );
  }
}

export default Register;
