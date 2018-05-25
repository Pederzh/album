//Librerie importate
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios'; //libreria installata con 'npm install axios'
//e poi 'npm i -S axios' per le http request
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
	state = { albums: [] }; //stato iniziale del component prima che carichi gli album (vettore vuoto)

	//funzione che viene eseguita automaticamente
	//appena il component sta per essere mostrato sullo schermo
	componentWillMount() {
		//faccio una get asincrona dal server che contiene i dati degli albums (JSON)
		//setState modifica lo stato del component (fa l'update del component)
		axios.get('https://rallycoding.herokuapp.com/api/music_albums')
		.then(response => this.setState({ albums: response.data }));
	}

	//funzione fatta da me
	renderAlbums() {
		//ritorna tutti gli album (facendo un foreach dell'array passato dallo state)
		return this.state.albums.map(album =>
			<AlbumDetail key={album.title} album={album} /> //passa come props tutto l'album
			);
		}

		render() {
			//console.log(this.state);
			return (
				<ScrollView>
					{this.renderAlbums()}
				</ScrollView>

			);
		}
	}

	//per farlo diventare disponibile da importare da altre classi
	export default AlbumList;
