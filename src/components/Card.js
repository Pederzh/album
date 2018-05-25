import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

class Card extends Component {
	render() {
		return (
			//props.children passa come props tutti i componenti figli 
			//cioè dentro a <album> --- </album>
		<View style={styles.containerStyle}>

			{this.props.children} 
		</View>	
		);
	}
}

const styles = StyleSheet.create({
	containerStyle: {
		borderWidth: 1,
		borderRadius: 2,
		borderColor: '#ddd',
		borderBottomWidth: 0,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 4 },
		shadowRadius: 2,
		shadowOpacity: 0.2,
		elevation: 1,
		marginLeft: 5,
		marginRight: 5,
		marginTop: 10
	}
});

export default Card;
