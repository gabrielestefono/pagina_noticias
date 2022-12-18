// # Selecionar corpo
const corpo = document.body;

// ## Seleção da tag header
const header = document.getElementsByTagName('header');


// CRIAR ELEMENTOS NECESSÁRIOS

// # DIV filha do Body - primária
const criarDivPrincipal = document.createElement('div');

// ## DIV Secundária
const criarDivSecundaria = document.createElement('div');

// ### Lista Não Ordenada, filha da DIV secundária
const criarListaNaoOrdenada = document.createElement('ul');

// #### Itens da lista não ordenada
const criarItemHome = document.createElement('li');
const criarItemNew = document.createElement('li');
const criarItemPopular = document.createElement('li');
const criarItemTrending = document.createElement('li');
const criarItemCategories = document.createElement('li');

// ##### Links dos itens da lista
const criarLinkItemHome = document.createElement('a');
const criarLinkItemNew = document.createElement('a');
const criarLinkItemPopular = document.createElement('a');
const criarLinkItemTrending = document.createElement('a');
const criarLinkItemCategories = document.createElement('a');


// INSERIR OS ITENS ONDE DEVEM SER INSERIDOS


// # Inserindo DIV primária
corpo.insertBefore(criarDivPrincipal, header[0]);

// ## Inserindo DIV secundária como filha da DIV primária
criarDivPrincipal.appendChild(criarDivSecundaria);

// ### Inserindo lista não ordenada na DIV secundária
criarDivSecundaria.appendChild(criarListaNaoOrdenada);

// #### Inserindo itens na lista não ordenada
criarListaNaoOrdenada.appendChild(criarItemHome);
criarListaNaoOrdenada.appendChild(criarItemNew);
criarListaNaoOrdenada.appendChild(criarItemPopular);
criarListaNaoOrdenada.appendChild(criarItemTrending);
criarListaNaoOrdenada.appendChild(criarItemCategories);

// ##### Inserindo tags de links aos itens da lista
criarItemHome.appendChild(criarLinkItemHome);
criarItemNew.appendChild(criarLinkItemNew);
criarItemPopular.appendChild(criarLinkItemPopular);
criarItemTrending.appendChild(criarLinkItemTrending);
criarItemCategories.appendChild(criarLinkItemCategories);


// INSERINDO TEXTOS AOS LINKS


criarLinkItemHome.innerText = 'Home'
criarLinkItemNew.innerText = 'New'
criarLinkItemPopular.innerText = 'Popular'
criarLinkItemTrending.innerText = 'Trending'
criarLinkItemCategories.innerText = 'Categories'


// ADICIONAR CLASSES E ID'S ÀS TAG'S


// # DIV Primária
criarDivPrincipal.classList = 'sidemenu--hide';
criarDivPrincipal.id = 'show';

// ## DIV Secundária
criarDivSecundaria.classList = 'sidemenu__div-secundaria'

// ### Lista não ordernada
criarListaNaoOrdenada.classList = 'sidemenu__div-secundaria--lista'

// #### Itens da lista
criarItemHome.classList = 'sidemenu__div-secundaria--lista-item'
criarItemNew.classList = 'sidemenu__div-secundaria--lista-item'
criarItemPopular.classList = 'sidemenu__div-secundaria--lista-item'
criarItemTrending.classList = 'sidemenu__div-secundaria--lista-item'
criarItemCategories.classList = 'sidemenu__div-secundaria--lista-item'

// ##### Links da lista
criarLinkItemHome.classList = 'sidemenu__div-secundaria--lista-item_link'
criarLinkItemNew.classList = 'sidemenu__div-secundaria--lista-item_link'
criarLinkItemPopular.classList = 'sidemenu__div-secundaria--lista-item_link'
criarLinkItemTrending.classList = 'sidemenu__div-secundaria--lista-item_link'
criarLinkItemCategories.classList = 'sidemenu__div-secundaria--lista-item_link'

// Adicionando Links aos itens
criarLinkItemHome.href = '#'
criarLinkItemNew.href = '#'
criarLinkItemPopular.href = '#'
criarLinkItemTrending.href = '#'
criarLinkItemCategories.href = '#'

//ADDEVENTLISTERNER FICOU SEPARADO NO ARQUIVO SCRIPT.JS