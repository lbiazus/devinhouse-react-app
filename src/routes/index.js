import Filme from '../pages/Filme';
import Cadastro from '../filme/Cadastro';
import PageListaFilme from '../pages/filme/PageListaFilme';

const routes = [
    {
        path: '/',
        component: Filme,
        exact: true
    },
    {
        path: "/filmes",
        component: Filme,
        exact: true
    },
    {
        path: "/filmes/cadastro/:id?",
        component: Cadastro
    },
    {
        path: "/filmes/listagem",
        component: PageListaFilme,
    },
]

export default routes;