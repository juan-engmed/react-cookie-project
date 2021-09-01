import React, { Component } from 'react';
import biscoito from './assets/biscoito.png';
import './style.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      textoFrase: ''
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = ['Juan é o amor da sua vida.',
      'Voce precisa se entregar ao amor pelo Rio de Janeiro.',
      'A partir de amanhã transcederá uma nova em sua vida.',
      'O mar inundará seu amor com parceria infinita.'];
  }


  quebraBiscoito() {
    let state = this.state;
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    state.textoFrase = `" ${this.frases[numeroAleatorio]}"`;
    this.setState(state)
  }


  render() {
    return (
      <div className='container'>

        <img src={biscoito} className='img' />
        <Botao nome='Abrir Biscoito' acaoBtn={this.quebraBiscoito} />
        <h3 className='textoFrase'>{this.state.textoFrase}</h3>
        <p>Desenvolvido em React por Juan Oliveira</p>
        <p>Hospedado em Netlify</p>
      </div>


    );
  }

}

class Botao extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.acaoBtn}>
          {this.props.nome}</button>

      </div>
    )
  }
}
export default App;
