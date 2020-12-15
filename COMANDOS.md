# Passos de criação da aplicação REACT

## Dependência do Node para o gerenciamento de dependências

Antes de realizar a criação do projeto é preciso ter instalado o Node no sistema operacional, essa instalação varia de acordo com o seu Sistema Operacional de Preferência.
Junto com a instalação do Node, vem o `npm` e o `npx` que são os comandos utilizados para criação do projeto e instalação de dependências necessárias para o projeto.

## Criação do projeto
```
npx create-reactp-app devinhouse-react-app
```
## Estruturação do Projeto

Nessa seção apenas criamos as pastas onde serão inseridos os nossos componentes. Nesse projetos usamos uma separação por Feature, mas a estruturação pode ser feita utilizando a organização que mais atende as necessidades de cada Projeto/Desenvolvedor.

### Estrutura de pastas criada:

`assets`: Onde ficam os estilos e imagens da aplicação.
`components`: Onde ficam os componentes comuns a toda a aplicação.
`pages`: Onde ficam as páginas da aplicação.
`redux`: Onde ficam os módulos redux.
`routes`: Onde ficam as rotas da aplicação
`services`: Onde ficam as apis responsáveis pelos acessos externos. Também pode ser nomeada como `api`. 

## Arquivos de Configuração criados

`.env`: Arquivo para criação de variáveis de ambiente.
`services/constants.js`: Arquivo contendo a(s) url(s) de acesso externo que serão utilizadas pela aplicação. Podem vir do arquivo `.env` ou podem estar diretamente nesse arquivo, cada Projeto/Desenvolvedor pode utilizar o formato que melhor atende as necessidades.

## Scripts

Quando criamos o projeto, o create-react-app deixa alguns scripts prontos para facilitar algumas etapas do desenvolvimento.
`npm start`: Roda a aplicação em modo de desenvolvimento.
`npm build`: Realiza o build da aplicação e inclua os arquivos de produção na pasta `build`
`npm test`: Roda a suíte de testes da aplicação.

No arquivo `README.md` tem uma explicação mais detalhada dos scripts gerados.
