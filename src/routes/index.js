import Filme from '../pages/Filme';
import PageCadastroFilme from '../pages/filme/PageCadastroFilme';
import PageListaFilme from '../pages/filme/PageListaFilme';
import PageCadastroGenero from '../pages/genero/PageCadastroGenero';

const routes = [
    {
        path: '/',
        component: PageListaFilme,
        exact: true
    },
    {
        path: "/filmes",
        component: Filme,
        exact: true
    },
    {
        path: "/filmes/cadastro/:id?",
        component: PageCadastroFilme
    },
    {
        path: "/filmes/listagem",
        component: PageListaFilme,
    },
    {
        path: "/generos/cadastro",
        component: PageCadastroGenero,
    }
]

export default routes;