import React from "react";
import loginImg from "../../login.svg";

export class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cardno : 0,
      pin : 0
    }

    this.cardno = this.cardno.bind(this);
    this.pin = this.pin.bind(this);
  }
  cardno(event) {
    this.setState({cardno: event.target.value})
  }
  pin(event) {
    this.setState({pin: event.target.value})
  }

  login(event) {
    debugger;
    fetch('https://localhost:44383/Api/login/Login', {
      method: 'post',
      headers : {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        cardno : this.state.cardno,
        pin : this.state.pin,
      })
    }).then((Response) => Response.json())
      .then((Result) => {
        console.log(Result);
        if(Result.Status == 'Success')
           this.props.history.push("/Dashboard");
        else
          alert('Sorry!!!Unauthorised User')    
      
     } )
    }

  
  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
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
              <label htmlFor="password">Pin</label>
              <input type="password" onChange={this.pin} name="password" placeholder="****" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" onClick={this.login} className="btn">
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default Login;