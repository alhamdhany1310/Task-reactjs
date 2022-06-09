import React from 'react';
import Input from './Common/Input';
import './Style/style.scss';
import * as Validator from 'validatorjs';
import ShowErrors from './Common/Errors';
class Register extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     input: {},
  //     msg: {},
  //   };
  //   this.pwdConfirm = this.pwdConfirm.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }
  state = {
    firstname: '',
    scoundName: '',
    email: '',
    password: '',
    gender: '',
    jurusan: '',
    // compassword: '',
  };
  handleReset = () => {
    this.setState({
      firstname: '',
      scoundName: '',
      email: '',
      password: '',
      gender: '',
      jurusan: '',
      // compassword: '',
    });
  };
  handleSubmit = (ev) => {
    ev.preventDefault();
    const { firstname, scoundName, password, gender, jurusan } = this.state;
    let data = { firstname, scoundName, password, gender, jurusan };
    let rules = {
      firstname: 'required',
      scoundName: 'required',
      password: 'min:8',
      gender: 'required',
      jurusan: 'required',
      // compassword: 'min:8',
    };
    let validation = new Validator(data, rules);
    validation.passes();
    this.setState({
      errors: [...validation.errors.get('firstname'), ...validation.errors.get('scoundName'), ...validation.errors.get('password'), ...validation.errors.get('gender'), ...validation.errors.get('jurusan')],
    });
    console.log(`
      nama lengkap : ${this.state.firstname} ${this.state.scoundName}
      email : ${this.state.email}
      password : ${this.state.password}
      gender : ${this.state.gender}
      jurusan : ${this.state.jurusan}`);

    this.handleReset();
    // if (this.validasi()) {
    //   var input = {};
    //   input['password'] = '';
    //   input['compassword'] = '';
    // }
  };
  // pwdConfirm(e) {
  //   var inputpwd = this.state;
  //   inputpwd[e.target.name] = e.target.value;
  //   this.setState({
  //     inputpwd,
  //   });
  // }
  // validasi() {
  //   var msg = {};
  //   if (this.state['password'] !== this.state['compassword']) {
  //     msg['password'] = 'Wah.. Password tidak cocok nih..!';
  //   } else {
  //     msg['compassword'] = 'Passwordnya sesuai';
  //   }
  //   this.setState({
  //     msg: msg,
  //   });
  // }
  render() {
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <div className="container">
            {this.state.errors && <ShowErrors errors={this.state.errors} />}
            <div className="row">
              <div className="col-6">
                <Input type="text" placeholder="First Name" value={this.state.firstname} onChange={(value) => this.setState({ firstname: value })} name="firstname" className="form-control" />
              </div>
              <div className="col-6">
                <Input type="text" placeholder="Scound Name" value={this.state.scoundName} onChange={(value) => this.setState({ scoundName: value })} name="scoundName" className="form-control" />
              </div>
            </div>
            <div className="mb-3">
              <div className="form-check form-check-inline">
                <input className="form-check-input" value="Laki-laki" type="radio" checked={this.state.gender === 'Laki-laki'} onChange={(e) => this.setState({ gender: e.target.value })} name="gender" id="flexRadioDefault1" />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Laki-Laki
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" value="Perempuan" type="radio" checked={this.state.gender === 'Perempuan'} onChange={(e) => this.setState({ gender: e.target.value })} name="gender" id="flexRadioDefault2" />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Perempuan
                </label>
              </div>
            </div>

            <div className="mb-3">
              <select className="form-select" value={this.state.jurusan} onChange={(e) => this.setState({ jurusan: e.target.value })} name="jurusan" aria-label="Default select example" id="exampleFormControlInput1">
                <option value="">Pilih Jurusan</option>
                <option value="Sistem Informasi">Sistem Informasi</option>
                <option value="Teknik Informasi">Teknik Informasi</option>
                <option value="Teknik Komputer">Teknik Komputer</option>
                <option value="Teknik Lingkungan">Teknik Lingkungan</option>
              </select>
            </div>
            <Input type="email" value={this.state.email} onChange={(value) => this.setState({ email: value })} placeholder="Masukkan Email :" name="email" className="form-control" />
            <Input type="password" value={this.state.password} onChange={(value) => this.setState({ password: value })} placeholder="password" name="password" className="form-control" />
            {/* <Input type="password" placeholder="Konfirmasi Password" value={this.state.compassword} name="compassword" onChange={(value) => this.setState({ compassword: value }, () => console.log(this.state))} className="form-control" /> */}
            {/* <div className="text-danger">{this.state.msg.password}</div>
            <div className="text-success">{this.state.msg.compassword}</div> */}
            <button type="submit" className="btn btn-primary">
              Registrasi
            </button>
          </div>
        </form>
      </section>
    );
  }
}
export default Register;
