# Socius
![Socius Logo](/static/logo.png)
Somos a Socius, a plataforma de comercialização de seguros automobilísticos compartilhados, onde o usuário consegue adquirir um seguro de forma rápida, descomplicada e com valor menor do que o individual pelos meios tradicionais. Cuidamos do nosso cliente desde o momento em que ele entra na plataforma e busca o melhor produto para seu estilo de vida, visando entregar a ele a melhor experiência.

### Tech

Tecnologias e recursos utilizados pela equipe no hackagr1d Rio de Janeiro.
* [Vue.js](https://vuejs.org/)  - O framework JavaScript progressivo
* [Nuxt.js](https://nuxtjs.org/) - Nuxt.js predefine toda a configuração necessária para tornar agradável o desenvolvimento de um aplicativo Vue.js.
* [Vuetify.js](https://vuetifyjs.com/pt-BR/) - Framework de Componentes Material Design
* [Cordova](https://cordova.apache.org/) - Aplicativos móveis com HTML, CSS e JS. Segmente várias plataformas com uma base de código. Fonte livre e aberta.
######  -- API'S GR1D - API'S UTILIZADA DURANTE O EVENTO: 
* [INFOCAR - CODIFICAÇÃO](https://ic.insurance.gr1d.io/developers/api/2ed0729b-dbcf-48b5-9072-9bdbcfa8b504#documentation) - Através da placa ou chassi, retorna a decodificação dos dados básicos do veículo + sua precificação FIPE.
* [INFOCAR - CNH](https://ic.insurance.gr1d.io/developers/api/ac749d7e-d62a-4b94-b49d-7ed62a8b946c) - Esta pesquisa retorna os dados do condutor, bem como seus impedimentos e pontuação online.
* [COMPLINE - OCR CNH](https://ic.insurance.gr1d.io/developers/api/2aa5dc5f-d80b-4ff3-a5dc-5fd80b5ff3b8) - Extraia dados como; nome números, dados de uma forma simples e eficiente.

## Build Setup

``` bash
# install dependencies
$ yarn install
$ cd cordova && yarn install && yarn cordova plaform add android

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
