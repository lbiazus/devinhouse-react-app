import axios from 'axios';

import * as constants from './constants';

const BASE_URL = `${constants.DEVINHOUSE_API}/generos`;

const GeneroService = {
    buscarGeneros: (filtro) => {
		const url = filtro ? `${BASE_URL}?filtro=${filtro}` : BASE_URL;
		return axios.get(url)
			.then(response => response.data)
            .catch(error => {
				throw error;
			});
	}
}

export default GeneroService;