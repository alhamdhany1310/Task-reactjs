import React from 'react';
import ShowErrors from './Common/Errors';
import Input from './Common/Input';
import * as Validator from 'validatorjs';
export default class Validation extends React.Component {
  state = {
    email: '',
    password: '',
    errors: [],
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    // let message = [];
    // if (email.length === 0) {
    //   message = [...message, 'Email tidak boleh kosong'];
    // }
    // if (password.length === 0) {
    //   message = [...message, 'Password tidak boleh kosong'];
    // }
    // const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // if (!re.test(String(email).toLowerCase())) {
    //   message = [...message, 'Email tidak Valid'];
    // }
    // if (password.length < 8) {
    //   message = [...message, 'Password terlalu Pendek minimal 8 Character'];
    // }
    // if (message.length > 0) {
    //   this.setState({
    //     errors: message,
    //   });
    // } else {
    //   alert(`
    //   email : ${this.state.email}
    //   password : ${this.state.password}
    //   `);
    //   this.setState({
    //     errors: [],
    //   });
    // }

    let data = { email, password };
    let rules = {
      email: 'required|email',
      password: 'min: 8|required',
    };
    let validation = new Validator(data, rules);
    validation.passes();
    this.setState({
      errors: [...validation.errors.get('email'), ...validation.errors.get('password')],
    });
    alert(`email : ${this.state.email}
    password : ${this.state.password}`);
  };
  render() {
    return (
      <div className="container pt-5">
        {this.state.errors && <ShowErrors errors={this.state.errors} />}
        <form onSubmit={this.handleSubmit}>
          <Input className="form-control" type="email" name="email" label="Masukkan Email " onChange={(value) => this.setState({ email: value })} />
          <Input className="form-control" type="password" name="password" label="Masukkan Password" onChange={(value) => this.setState({ password: value })} />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
