// Import components
import React from 'react';
import { Text, AppRegistry, View } from 'react-native';

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
backgroundColor: '#000',
height: 300,
justifyContent: 'center',
alignItems: 'center'

  }
};

// Create component
const App = () => {
  const { estiloTexto, estiloView } = Estilos;
  return (
    <View style={ estiloView }>
<Text style={ estiloTexto }>Frases do dia</Text>
   </View>
  );
};


//Reder to device
AppRegistry.registerComponent('app2FraseDoDia', () => App);