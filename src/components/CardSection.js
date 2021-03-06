import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

class CardSection extends Component{
	render() {
		return (
			<View style={styles.containerStyle}>
				{this.props.children}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	containerStyle: {
		borderBottomWidth: 1,
		padding: 5,
		backgroundColor: '#fff',
		justifyContent: 'flex-start',
		flexDirection: 'row',   //mette in riga / incolonna (default)
		borderColor: '#ddd',
		position: 'relative'
	}
});

export default CardSection;
