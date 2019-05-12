import React, { Component } from 'react';


export default class Conversot extends Component {
  constructor(props) {
    super(props);
    this.state = {
        moedaA_valor:"",
        moedaB_valor:0,
    };
  
    this.converter = this.converter.bind(this);
    
  }

    

  converter(){

    console.log(this.state);


  };

  render() {
    return (
      <div>
          <h2>{this.props.moedaA}para {this.props.moedaB}</h2>
          <input type="text" onChange={(event) => {this.setState({moedaA_valor:event.target.value})}}></input>
          <input type="button" value="converter" onClick={this.converter}></input>
          <h2>valor convertido</h2>
      </div>
    );
  }
}
