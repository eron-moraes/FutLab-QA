# ⚽ FutLab QA

Sistema de Cadastro de Jogadores desenvolvido com Vue.js 3.

## 📋 Sobre o Projeto

O FutLab QA é uma aplicação web moderna para cadastro e gerenciamento de jogadores de futebol. Com uma interface imersiva inspirada no mundo do futebol, permite cadastrar, editar e excluir jogadores com informações completas.

## ✨ Funcionalidades

- ✅ **Cadastro de Jogadores**: Cadastre jogadores com informações completas
  - Nome do jogador
  - Número (até 3 dígitos)
  - Posição em campo
  - Pé dominante (Direito, Esquerdo ou Ambidestro)
  - Altura em metros
  - Foto do jogador (upload)
  - Time brasileiro

- ✅ **Edição de Jogadores**: Edite informações de jogadores já cadastrados
- ✅ **Exclusão de Jogadores**: Remova jogadores com confirmação
- ✅ **Visualização**: Lista visual com cards estilizados mostrando todas as informações
- ✅ **Interface Responsiva**: Funciona perfeitamente em desktop e mobile
- ✅ **Design Temático**: Interface imersiva com tema de futebol

## 🚀 Como Usar

### Opção 1: Abrir diretamente no navegador

1. Clone ou baixe este repositório
2. Abra o arquivo `index.html` no seu navegador

### Opção 2: Usar um servidor local

Para uma melhor experiência, use um servidor local:

```bash
# Com Python 3
python -m http.server 8000

# Com Node.js (http-server)
npx http-server

# Com PHP
php -S localhost:8000
```

Depois acesse `http://localhost:8000` no navegador.

## 🌐 Deploy no GitHub Pages

O projeto está configurado para deploy automático no GitHub Pages!

### Passo a Passo:

1. **Faça commit e push das alterações:**
   ```bash
   git add .
   git commit -m "Preparando para deploy"
   git push origin crud_player
   ```

2. **Configure o GitHub Pages no repositório:**
   - Vá até o repositório no GitHub
   - Clique em **Settings** (Configurações)
   - No menu lateral, clique em **Pages**
   - Em **Source**, selecione **GitHub Actions**
   - Salve as configurações

3. **Aguarde o deploy automático:**
   - O GitHub Actions irá fazer o deploy automaticamente
   - Você pode acompanhar o progresso na aba **Actions**
   - Quando concluído, seu site estará disponível em:
     `https://SEU-USUARIO.github.io/FutLab-QA/`

### Deploy Manual (Alternativa):

Se preferir fazer deploy manual:

1. Vá em **Settings** → **Pages**
2. Em **Source**, selecione a branch desejada (ex: `crud_player`)
3. Selecione a pasta `/ (root)`
4. Clique em **Save**

O site ficará disponível em alguns minutos!

### 🔗 Link do Deploy:

Após configurar, seu site estará disponível em:
```
https://SEU-USUARIO.github.io/FutLab-QA/
```

## 📁 Estrutura do Projeto

```
FutLab-QA/
├── css/
│   └── style.css          # Estilos da aplicação
├── js/
│   ├── app.js             # Lógica principal do Vue.js
│   └── teams.js           # Lista de times brasileiros
├── index.html             # Página principal
├── LICENSE                # Licença do projeto
└── README.md              # Este arquivo
```

## 🛠️ Tecnologias Utilizadas

- **Vue.js 3** - Framework JavaScript (via CDN)
- **HTML5** - Estrutura da aplicação
- **CSS3** - Estilização moderna com gradientes e animações
- **JavaScript ES6+** - Lógica da aplicação

## 🎨 Características do Design

- Background com gradiente verde simulando campo de futebol
- Cards de jogadores com design moderno
- Badges coloridos com cores dos times
- Animações suaves e transições
- Layout responsivo para diferentes tamanhos de tela
- Efeitos de hover e interatividade

## 📝 Campos do Formulário

1. **Nome do Jogador** - Texto obrigatório
2. **Número** - Número inteiro de 1 a 999 (máximo 3 dígitos)
3. **Posição** - Selectbox com 10 posições:
   - Goleiro
   - Lateral Direito
   - Lateral Esquerdo
   - Zagueiro
   - Volante
   - Meia
   - Atacante
   - Ponta Direita
   - Ponta Esquerda
   - Centroavante
4. **Pé Dominante** - Radio buttons:
   - Direito
   - Esquerdo
   - Ambidestro
5. **Altura** - Número decimal em metros (ex: 1.75)
6. **Foto** - Upload de imagem com preview
7. **Time** - Selectbox com 12 times brasileiros:
   - Flamengo
   - Corinthians
   - Palmeiras
   - São Paulo
   - Santos
   - Vasco
   - Fluminense
   - Botafogo
   - Grêmio
   - Internacional
   - Atlético-MG
   - Cruzeiro

## 🎯 Funcionalidades de Gerenciamento

### Editar Jogador
- Clique no botão ✏️ no card do jogador
- O formulário será preenchido com os dados do jogador
- Faça as alterações desejadas
- Clique em "Salvar Alterações" ou "Cancelar"

### Deletar Jogador
- Clique no botão 🗑️ no card do jogador
- Confirme a exclusão na caixa de diálogo
- O jogador será removido da lista

## 📱 Responsividade

A aplicação é totalmente responsiva e se adapta a diferentes tamanhos de tela:
- Desktop: Layout completo com todos os elementos visíveis
- Tablet: Ajustes de espaçamento e tamanhos
- Mobile: Layout otimizado com elementos empilhados verticalmente

## 🔧 Personalização

### Adicionar Novos Times

Edite o arquivo `js/teams.js` e adicione novos times no array:

```javascript
const teams = [
    { name: "Nome do Time", color: "#COR_HEX" },
    // ...
];
```

### Modificar Posições

Edite o array `positions` no arquivo `js/app.js`:

```javascript
positions: [
    "Nova Posição",
    // ...
]
```

## 📄 Licença

Veja o arquivo [LICENSE](LICENSE) para mais detalhes sobre a licença do projeto.

## 👨‍💻 Desenvolvimento

Este projeto foi desenvolvido como uma aplicação de demonstração para cadastro e gerenciamento de jogadores de futebol.

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

---

Desenvolvido com ⚽ e 💚
