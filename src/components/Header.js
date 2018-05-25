//Librerie importate
import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

//creo i component (è una funzione javascript che ritorna del JSX (javascript mascherato da HTML))
class Header extends Component {
  render() {
    return (
    <View style={styles.viewStyle}>
    <Text style={styles.textStyle}> { this.props.headerText } </Text>
    </View>
    );
  }
}

const styles = StyleSheet.create({
	viewStyle: {
		backgroundColor: 'white',
		justifyContent: 'center', //verticale
		alignItems: 'center',	//orizzontale
		height: 70, //grandezza fissa in pixel
		paddingTop: 25, //distanza dall'alto (per non sovrascrivere la barra sopra)
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.2,
		elevation: 2,
		position: 'relative'
	},
	textStyle: {
		fontSize: 20 //come css (CSS: font-style, react: fontStyle)
	}
});

export default Header;
