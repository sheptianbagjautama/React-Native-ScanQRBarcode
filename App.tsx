/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Alert,
  View,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import Icon from "react-native-vector-icons/Ionicons";
import * as Animatable from "react-native-animatable";


const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

console.disableYellowBox = true;


function App(): JSX.Element {
  const [data, setData] = useState("Scan Something")

  const makeSlideOutTranslation = (translationType, fromValue) => {
    return {
      from: {
        [translationType]: SCREEN_WIDTH * -0.18
      },
      to: {
        [translationType]: fromValue
      }
    };
  }
  

  return (
    <QRCodeScanner
      showMarker
      onRead={({data}) => setData(data)}
      
      // flashMode={RNCamera.Constants.FlashMode.torch}
      reactivate={true}
      reactivateTimeout={500}
      topContent={
        <View style={{ backgroundColor:'orange', flex:1, width:'100%' }}>
          <Text style={{ color:'black', padding:20, fontSize:20, backgroundColor:'grey', margin:10 }}>{data}</Text>
        </View>
      }
      bottomContent={
        <View>
          <Text>Qr Code Scanner</Text>
        </View>
      }
      cameraStyle={{ backgroundColor:"yellow", borderWidth:1, borderRadius:50 }}
      />
  );
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  }
});

export default App;
