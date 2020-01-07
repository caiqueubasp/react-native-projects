// Import components
import React from 'react';
import { Text, AppRegistry, View, Button, TouchableOpacity } from 'react-native';

//Formatations
const Estilos = {
  estiloTexto: {
    fontSize: 30,
    backgroundColor: '#32a852',
    shadowColor: '#000',
    shadowOffset: {width:-15, height:-30},
    shadowOpacity: 1,
    height: 50,
    width: 300,
    padding: 5,
    marginTop: 3,
    alignSelf: 'center',
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontStyle: 'italic'
  },
  estiloView: {
    flex: 1,
backgroundColor: '#000',
height: 300,
justifyContent: 'center',
alignItems: 'center'

  },
  button1: {
    flex: 2,
    backgroundColor: "#48BBEC",
    borderColor: '#1d8eb8',
    borderWidth: 3,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width:0, height: 2},
    shadowOpacity: 0.4
  },
  button2: {
    flex: 2,
    backgroundColor: "blue"

  },
  button2Text: {
    color: "white",
    fontWeight: 'bold',
    fontSize: 16
  }
};

const botaoPressionado = () => {
alert('Botão Pressionado');
};

// Create component
const App = () => {
  const { estiloTexto, estiloView, button1, button2, button2Text } = Estilos;
  return (
    <View style={ estiloView }>
<Text style={ estiloTexto }>Frases do dia</Text>
<Button
onPress={botaoPressionado}
title="Clique aqui!"
color="#fcba03"
accessibilityLabel="Clique aqui para abrir as noticias"

/>

<TouchableOpacity style={button2}>
<Text style={button2Text}>Mané</Text>
</TouchableOpacity>


   </View>
  );
};


//Reder to device
AppRegistry.registerComponent('app2FraseDoDia', () => App);