const API = '/api/livros';

const form = document.getElementById('form-livro');
const campoId = document.getElementById('id_livro');
const campoTitulo = document.getElementById('titulo');
const campoAutor = document.getElementById('autor');
const campoPreco = document.getElementById('preco');
const campoEstoque = document.getElementById('quantidade_estoque');
const formTitulo = document.getElementById('form-titulo');
const btnSalvar = document.getElementById('btn-salvar');
const btnCancelar = document.getElementById('btn-cancelar');
const mensagem = document.getElementById('mensagem');
const lista = document.getElementById('lista');
const vazio = document.getElementById('vazio');
const formBusca = document.getElementById('form-busca');
const campoBusca = document.getElementById('busca');
const btnLimpar = document.getElementById('btn-limpar');

let termoBusca = '';

// ---------- Utilidades ----------
function mostrarMensagem(texto, tipo) {
  mensagem.textContent = texto;
  mensagem.className = 'mensagem ' + tipo;
  mensagem.hidden = false;
}

function limparMensagem() {
  mensagem.hidden = true;
  mensagem.textContent = '';
}
function limparFormulario() {
  mensagem.textContent = '';
  mensagem.className = 'mensagem';
  mensagem.hidden = true;
}
function formatarprecos(number) {
    return number.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}
function limparinvalidos() {
    campoTitulo.classList.remove('invalido');
    campoAutor.classList.remove('invalido');
    campoPreco.classList.remove('invalido');
    campoEstoque.classList.remove('invalido');
}
async function buscarLivros() {