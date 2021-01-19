# Passos para deploy da aplicação REACT com Docker

## Necessidade de instalação local da ferramenta Docker

Antes de realizar a geração das imagens de build do projeto é preciso ter instalado o Docker no sistema operacional, essa instalação varia de acordo com o seu Sistema Operacional de Preferência.
Como utilizamos o `docker-compose` para facilitar a geração e execução das imagens, também é necessário instalá-lo no Sistema Operacional  

## Configuração do Docker para ambiente de Desenvolvimento

Para preparar o ambiente de desenvolvimento são necessários dois arquivos `Dockerfile.dev` e `docker-compose-dev.yml`

### Dockerfile.dev

Arquivo responsável pela organizaçao dos comandos necessários para a geração da imagem que será disponibilizada.
No tópico `Principais Comandos para Geração de Dockerfiles` no final desse documento, encontra-se uma lista com os principais comandos utilizados para a montagem desse arquivo.

### docker-compose-dev.yml

Arquivo responsável pela junção dos passos de geração e execução das imagens.
Como queremos que a aplicação em ambiente de desenvolvimento seja atualizada automaticamente precisamos de dois comandos no arquivo:
`stdin_open: true`: Mantém aberto um canal de comunicação entre a imagem e o Sistema Operacional
`volumes`: Para que o Sistema Operacional consiga atualizar os arquivos é necessário definir os volumes.

### Executando o Ambiente de Desenvolvimento

```
docker-compose -f docker-compose-dev.yml up -d
```
## Configuração do Docker para deploy em produção

A preparação do ambiente de deploy é realizada de forma similar ao ambiente de desenvolvimento, também criamos dois arquivos: `Dockerfile`e `docker-compose.yml`.

### Dockerfile

Esse arquivo difere do arquivo `Dockerfile.dev` porque além de possuir as configurações de geração da imagem ele também possui as configurações de deploy da aplicação em um `nginx`.
Importante lembrar que para o nosso projeto foi utilizado o `nginx`, mas podem ser utilizados outros servidores para o deploy.

### docker-compose.yml

Arquivo responsável pela junção dos passos de geração e execução das imagens e muito próximo das configurações do arquivo `docker-compose-dev.yml`.
As diferenças são que não precisamos definir os `volumes` e o comando `stdin_open` e também que a definição das portas precisa respeitar agora a porta do `nginx (80)` e no caso do nosso projeto estamos expondo a mesma na porta `8080`

### Executando a Aplicaçao em Produção

```
docker-compose up -d --build
```

## Principais Comandos para Geração de Dockerfiles:

`FROM`: Define a imagem base que será usada como referência.
`ENV`: Comando para definir variáveis de ambiente. Segue a seguinte sintaxe:  `NOME_VARIAVEL=VALOR_VARIAVEL`.
`WORKDIR`: Define o caminho onde serão executados os comandos da imagem.
`COPY`: Copia arquivos para dentro da imagem gerada. Segue a seguinte sintaxe: `arquivo_ou_pasta_origem arquivo_ou_pasta_destino`
`RUN`: Executa comandos com base na pasta definida no `WORKDIR`
`EXPOSE`: Informa ao container que a porta especificada estará visível para o Sistema Operacional onde o container estará sendo executado
`CMD`: Executa os comandos listados quando o container é iniciado: Recebe uma lista de comandos que serão concatenados. Exemplo: `[ "npm", "start" ]` será executado o comando `npm start`
`ENTRYPOINT`: Sintaxe e funcionamento da mesma forma que o comando `CMD`

