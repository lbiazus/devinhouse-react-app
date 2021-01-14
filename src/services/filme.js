import axios from 'axios';

import * as constants from './constants';

const BASE_URL = `${constants.DEVINHOUSE_API}/filmes`;

class FilmeService {
    buscarFilmes() {
		return axios.get(BASE_URL)
			.then(response => response.data)
            .catch(error => {
				throw error;
			});
	}

	buscarFilme(id) {
		return axios.get(`${BASE_URL}/${id}`)
			.then(response => response.data)
            .catch(error => {
				throw error;
			});
	}
	
	inserirFilme(filme) {
		return axios.post(BASE_URL, filme)
			.catch(error => {
				throw error;
			})
	}

	atualizarFilme(filme) {
		return axios.put(BASE_URL, filme)
			.catch(error => {
				throw error;
			})
	}
    
    excluirFilme(id) {
		return axios.delete(`${BASE_URL}/${id}`)
            .catch(error => {
				throw error;
			});
	}
}

export default new FilmeService();