//Librerie importate
import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

//creo i component (è una funzione javascript che ritorna del JSX (javascript mascherato da HTML))
export default class App extends Component {
  render() {
    return (
      //posso ritornare un singolo JSX alla volta, se racchiudo
      //tutto dentro <View> ritorno (mosto) un solo JSX con dentro tutto
      //flex:1 per far si che possa scrollare 
      <View style={{ flex:1 }}>
        <Header headerText='Albums' />
        <AlbumList />
      </View>
    );
  }
}
