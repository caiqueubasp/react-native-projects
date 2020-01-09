// Import components
import React from 'react';
import { Text, AppRegistry, View, Button, TouchableOpacity, Image, Alert } from 'react-native';

//Formatations
const Estilos = {
  principal: {
    flex: 1,
    backgroundColor: '#c3d9de',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn: {
    backgroundColor: '#098fad',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20
  },
  textBtn: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }

};

const gerarNovaFrase = () => {

  var numeroAleatorio = Math.random();
  numeroAleatorio = Math.floor(numeroAleatorio * 30);

  var frases = Array();
  frases[0] = 'O importante não é vencer todos os dias, mas lutar sempre. Waldemar Valle Martins';
  frases[1] = 'Maior que a tristeza de não haver vencido é a vergonha de não ter lutado! Rui Barbosa';
  frases[2] = 'É melhor conquistar a si mesmo do que vencer mil batalhas. Buda';
  frases[3] = 'Quem ousou conquistar e saiu pra lutar, chega mais longe! Charlie Brown Jr';
  frases[4] = 'Enquanto houver vontade de lutar haverá esperança de vencer. Santo Agostinho';
  frases[5] = 'Difícil é ganhar um amigo em uma hora; fácil é ofendê-lo em um minuto. Provérbio Chinês';
  frases[6] = 'O medo de perder tira a vontade de ganhar. Wanderley Luxemburgo';
  frases[7] = 'Aquele que não tem confiança nos outros, não lhes pode ganhar a confiança. Lao-Tsé';
  frases[8] = 'Escolher o seu tempo é ganhar tempo. Francis Bacon';
  frases[9] = 'Perder para a razão, sempre é ganhar. Aldo Novak';
  frases[10] = 'Arriscamo-nos a perder quando queremos ganhar demais. Jean de La Fontaine';
  frases[11] = 'Muitos sabem ganhar dinheiro, mas poucos sabem gastá-lo. Henry David Thoreau';
  frases[12] = 'Se você pretende ser rico, pense em economizar tanto quanto em ganhar. Benjamin Franklin';
  frases[13] = 'O homem digno ganha para viver; o menos honesto vive para ganhar. Textos Judaicos';
  frases[14] = 'Para ganhar aquilo que vale a pena ter, pode ser necessário perder tudo mais. Bernadette Devlin';
  frases[15] = 'A maior caridade é habilitar o pobre a ganhar a sua vida. Textos Judaicos';
  frases[16] = 'Quem sabe o que se pode ganhar num dia jamais furta. George Herbert';
  frases[17] = 'A avareza perde tudo ao pretender ganhar tudo. Jean de La Fontaine';
  frases[18] = 'O mundo está perdido para aqueles que o querem ganhar. Textos Taoístas';
  frases[19] = 'Loteria: acho que, jogando ou não, você tem a mesma chance de ganhar. Fran Lebowitz';
  frases[20] = 'Não basta conquistar a sabedoria, é preciso usá-la. Cícero';
  frases[21] = 'De que serve ao homem conquistar o mundo inteiro se perder a alma? Jesus Cristo';
  frases[22] = 'De nada serve ao homem conquistar a Lua se acaba por perder a Terra. François Mauriac';
  frases[23] = 'É fácil adquirir um inimigo; difícil é conquistar um amigo. Textos Judaicos';
  frases[24] = 'Quer você acredite que consiga fazer uma coisa ou não, você está certo. Henry Ford';
  frases[25] = 'Acredite na justiça, mas não a que emana dos demais e sim na tua própria. Código Samurai';
  frases[26] = 'A única forma de vencer uma discussão é evitá-la. Dale Carnegie';
  frases[27] = 'Não há dor que o sono não consiga vencer. Honoré de Balzac';
  frases[28] = 'Sofrer, é só uma vez; vencer, é para a eternidade. Soren Kierkegaard';
  frases[29] = 'A arte de vencer se aprende nas derrotas. Simon Bolívar';
  frases[30] = 'O mal não pode vencer o mal. Só o bem pode fazê-lo. Leon Tolstói';

  var fraseEcolhida = frases[ numeroAleatorio ];


  Alert.alert(fraseEcolhida);

};

// Create component
const App = () => {
  const { principal, btn, textBtn } = Estilos;
  return (
    <View style={ principal}>

      <Image source={require('./imgs.logo.png')}></Image>

      <TouchableOpacity onPress={ gerarNovaFrase } style={ btn }>

        <Text style={ textBtn }>Nova Frase</Text>

      </TouchableOpacity>

   </View>
  );
};


//Reder to device
AppRegistry.registerComponent('app2FraseDoDia', () => App);