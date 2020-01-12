/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';

import Topo from './src/components/topo';
import Icone from './src/components/icone';



class app3 extends Component{

  constructor(props){
    super(props);

    this.state = { escolhaUsuario: '', escolhaComputador: '', resultado: '' }

  }


  jokenpo(escolhaUsuario){

    var numAleatorio = Math.floor(Math.random() * 3);

    escolhaComputador = '';

    switch(numAleatorio){
      case 0: escolhaComputador = 'Pedra'; break;
      case 1: escolhaComputador = 'Papel'; break;
      case 2: escolhaComputador = 'Tesoura'; break;
    }

    var resultado = '';

    if(escolhaComputador === 'Pedra'){
      if(escolhaUsuario === 'Pedra'){
        resultado = 'Empate!';
      }

      if(escolhaUsuario === 'Papel'){
        resultado = 'Você ganhou!';
      }

      if(escolhaUsuario === 'Tesoura'){
        resultado = 'Você perdeu!';
      }
    }

    if(escolhaComputador === 'Papel'){
      if(escolhaUsuario === 'Papel'){
        resultado = 'Empate!';
      }

      if(escolhaUsuario === 'Tesoura'){
        resultado = 'Você ganhou!';
      }

      if(escolhaUsuario === 'Pedra'){
        resultado = 'Você perdeu!';
      }
    }

    if(escolhaComputador === 'Tesoura'){
      if(escolhaUsuario === 'Tesoura'){
        resultado = 'Empate!';
      }

      if(escolhaUsuario === 'Pedra'){
        resultado = 'Você ganhou!';
      }

      if(escolhaUsuario === 'Papel'){
        resultado = 'Você perdeu!';
      }
    }

    this.setState({ escolhaUsuario : escolhaUsuario,
                    escolhaComputador: escolhaComputador,
                    resultado: resultado
                  });

  }

  render(){
    return (
      <View>

        <Topo>

        </Topo>

        <View style={ styles.painelAcoes } >

          <View style={ styles.btnEscolha }>
          <Button title='Pedra' onPress={ ()=> { this.jokenpo('Pedra')}} />
          </View>

          <View style={ styles.btnEscolha }>
          <Button title='Papel' onPress={ ()=> { this.jokenpo('Papel')}}/>
          </View>

          <View style={ styles.btnEscolha }>
          <Button title='Tesoura' onPress={ ()=> { this.jokenpo('Tesoura')}}/>
          </View>

        </View>


        <View style={ styles.palco }>

        <Text style={ styles.textoResultado } > {this.state.resultado}</Text>


        <Icone escolha={this.state.escolhaComputador} jogador='Computador'></Icone>
        <Icone escolha={this.state.escolhaUsuario} jogador='Você'></Icone>

        </View>




      </View>

    )
    };
};





const styles = StyleSheet.create({

  btnEscolha: {
    width: 90
  },

  painelAcoes: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: 10,
  marginBottom: 10,
  padding: 5
  },

  palco: {
    alignItems: 'center',
    marginTop: 10
  },

  textoResultado: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 20,
    height: 60
  }


});


AppRegistry.registerComponent('app3PedraPapelTesoura', () => app3);
