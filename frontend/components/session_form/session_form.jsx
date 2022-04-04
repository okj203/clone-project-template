import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      fname: '',
      lname: '',
      birthday: '',
      email: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const signupForm =
      this.props.formType === "signup" ? (
        <>
          <label>
            First Name
            <input
              type="text"
              value={this.state.fname}
              onChange={this.update("fname")}
              className="login-input"
              required
            />
          </label>
          <br />
          <label>
            Last Name
            <input
              type="text"
              value={this.state.lname}
              onChange={this.update("lname")}
              className="login-input"
              required
            />
          </label>
          <br />
          <label>
            Birthday
            <input
              type="date"
              value={this.state.birthday}
              onChange={this.update("birthday")}
              className="login-input"
              required
            />
          </label>
          <br />
          <label>
            Email
            <input
              type="text"
              value={this.state.email}
              onChange={this.update("email")}
              className="login-input"
              required
            />
          </label>
        </>
      ) : (
        <></>
      );

    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          Welcome to CloneBnB!
          <br/>
          Please {this.props.formType} or {this.props.otherForm}
          <div onClick={this.props.closeModal} className="close-x">X</div>
          {this.renderErrors()}
          <div className="login-form">
            <br/>
            <label>Username:
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
              />
            </label>
            <br/>
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br/>
            {signupForm}
            <br/>
            <input className="session-submit" type="submit" value={this.props.formType} />
            <button
              className="session-submit"
              onClick={() =>
                this.props
                  .login({ username: "demo", password: "123123" })
                  .then(this.props.closeModal)}>Demo</button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
