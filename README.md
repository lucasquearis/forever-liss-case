# Bem vindo(a) ao repositorio do meu desafio técnico para empresa Forever Liss

O case tem o objetivo de avaliar os conhecimentos técnicos para a vaga de web developer.
Sendo avaliado nos seguintes tópicos:

- Fundamentos de Design;
- Experiência do usuário com a interface (conceitos de UI/UX);
- Desenvolvimento de interface a partir de um protótipo de alta     fidelidade;
- Desenvolvimento de layout responsivo;
- Conhecimentos sobre HTML5, CSS + SASS, Javascript, ReactJS, Bootstrap e integração de API.

## Sumário

- [Deploy](#deploy)
- [Requisitos](#requisitos)
- [Iniciando a aplicação Localmente](#initApp)
- [Arquitetura](#architecture)
- [Tecnologias utilizadas](#technologies)

# <a name="deploy"></a> Deploy

O deploy projeto está disponível no Netlifly no seguinte link:

<code><https://lucasquearis-forever-baby.netlify.app/></code>

# <a name="requisitos"></a> Requisitos

O objetivo foi desenvolver um site totalmente responsivo com base no layout fornecido pela própria empresa: [Projeto Forever Baby](https://www.figma.com/file/3d3n13iBXQjw9sAAsie7wu/Forever-Baby).

Sempre respeitando os espaçamentos e medidas propostas, assim como, o color scheme fornecido.

Para esse desafio, tinhamos a liberdade de escolher qualquer uma das seguintes tecnologias para criação da *landing page*:

- HTML5
- SASS
- Bootstrap
- Tailwind CSS
- ReactJS

# <a name="initApp"></a> Iniciando a Aplicação Localmente

Para iniciar a aplicação primeiramente clone este repositório com o seguinte comando:

<code>$ git clone git@github.com:lucasquearis/forever-liss-case.git</code>

Apos clonado o repositório, entre em sua pasta principal com o comando:

<code>$ cd forever-liss-case</code>

 e instale todas as dependências com o comando:

<code>$ npm install </code>

Após isso, inicie a aplicação com o seguinte comando:

<code>$ npm start </code>

# <a name="architecture"></a> Arquitetura

![Imagem Arquitetura pastas](/src/images/documentation/arquitetura.png)

A arquitetura do projeto está dividida em pastas referentes a caracteristicas dos conteúdos,

- components - todos os componentes React da aplicação.
- constants - todas as constantes já estabelecidas usadas na aplicação.
- context - todos os arquivos referentes ao context API.
- hooks - hooks personalizados usados no projeto.
- icons - icones usados na aplicação.
- images - imagens usadas no projeto.
- mocks - mocks para testes e renderizações do projeto.

# <a name="technologies"></a> Tecnologias utilizadas

- bootstrap 5.1.3 - estilização
- react 17.0.2 - Desenvolvimento da página
- uuid 8.3.2 - Gerador de ids para maps com keys únicas.
- eslint 8.7.0 - Padronização do código.
- eslint-config-airbnb 19.0.4 - Configuração do lint no modelo airbnb.
