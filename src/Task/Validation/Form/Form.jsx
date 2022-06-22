import React from 'react';
export default class Form extends React.Component {
  state = {
    nama: '',
    jurusan: '',
    gender: '',
    alamat: '',
    member: false,
  };
  handleReset = () => {
    this.setState({
      nama: '',
      jurusan: '',
      gender: '',
      alamat: '',
      member: false,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    alert(`
    nama: ${this.state.nama}
    jurusan: ${this.state.jurusan}
    gender: ${this.state.gender}
    alamat: ${this.state.alamat}
    member: ${this.state.member ? 'YES' : 'NO'}
    `);
    this.handleReset();
  };
  render() {
    return (
      <div className="container pt-5">
        <form onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Nama
            </label>
            <input type="text" name="nama" value={this.state.nama} onChange={(e) => this.setState({ nama: e.target.value })} className="form-control" id="exampleFormControlInput1" placeholder="Nama" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Jurusan
            </label>
            <select className="form-select" value={this.state.jurusan} onChange={(e) => this.setState({ jurusan: e.target.value })} name="jurusan" aria-label="Default select example" id="exampleFormControlInput1">
              <option value="">Pilih Jurusan</option>
              <option value="Sistem Informasi">Sistem Informasi</option>
              <option value="Teknik Informasi">Teknik Informasi</option>
              <option value="Teknik Komputer">Teknik Komputer</option>
              <option value="Teknik Lingkungan">Teknik Lingkungan</option>
            </select>
          </div>
          <div className="mb-3">
            <div className="form-check">
              <input className="form-check-input" value="Laki-laki" type="radio" checked={this.state.gender === 'Laki-laki'} onChange={(e) => this.setState({ gender: e.target.value })} name="gender" id="flexRadioDefault1" />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Laki-Laki
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" value="Perempuan" type="radio" checked={this.state.gender === 'Perempuan'} onChange={(e) => this.setState({ gender: e.target.value })} name="gender" id="flexRadioDefault2" />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Perempuan
              </label>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Alamat
            </label>
            <textarea className="form-control" value={this.state.alamat} onChange={(e) => this.setState({ alamat: e.target.value })} nama="alamat" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <div className="form-check pb-3">
            <input className="form-check-input" onChange={(e) => this.setState({ member: e.target.checked })} name="memeber" type="checkbox" checked={this.state.member} id="flexCheckDefault" />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Saya Adalah Member
            </label>
          </div>
          <button type="submit" className="btn btn-primary mb-3">
            Confirm identity
          </button>
        </form>
      </div>
    );
  }
}
