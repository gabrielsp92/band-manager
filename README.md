# === INICIO DA CHECKLIST ===
## ANTES DE INICIAR O DESENVOLVIMENTO, POR FAVOR SIGA OS PASSOS DESCRITOS ABAIXO

* [ ] Remover a pasta `.git`
* [ ] Iniciar um novo repositório com o comando `git init`
* [ ] Atualizar os dados do **package.json**
    * [ ] Nome do projeto
    * [ ] Descrição do projeto
    * [ ] Nome do autor
* [ ] Atualizar os dados do **nuxt.config.js**
    * [ ] Título da aplicação
    * [ ] Nome do aplicativo PWA
    * [ ] Nome do atalho na home (PWA)
    * [ ] Cor da barra de progresso
    * [ ] URLs da API
* [ ] Atualizar os dados do **README.MD**
    * [ ] Nome do projeto
    * [ ] Descrição do projeto
    * [ ] Inclua seu nome na lista de colaboradores, no lugar do atual responsável pelo projeto
* [ ] Ler o arquivo README atentamente
* [ ] Remover este bloco inteiro do arquivo **README.md** (O conteúdo deve iniciar com o nome do projeto)
* [ ] Fazer o commit inicial do seu repositório

# === FIM DA CHECKLIST ===

# TITULO DO PROJETO

> DESCRIÇÃO DO PROJETO

## Comandos do console

``` bash
# Instalar dependências
$ npm install

# Iniciar com hot-reload em http://localhost:3000
$ npm run dev

# Iniciar com hot-reload em http://localhost:3001
$ npm run dev -- --port 3001

# Rodar o teste do Lint
$ npm run lint

# Rodar o teste do Lint e corrigir todos os erros possíveis
$ npm run lint -- --fix
```

## Estrutura de diretórios

### Nuxt.js
Mais informações e detalhes sobre cada um dos itens abaixo estão disponíveis na [documentação oficial](https://nuxtjs.org/guide/directory-structure) do Nuxt

- `/assets` - Contém arquivos não compilados, como estilos em Sass, imagens ou fontes
- `/components` - Contém os componentes específicos do projeto
- `/layouts` - Contém os layouts da aplicação
- `/middleware` - Contém arquivos que podem ser executados antes do carregamento de um determinado grupo de páginas
- `/pages` - Contém as Views e as Routes do projeto. Todos os arquivos aqui são convertidos nas URLs do site
- `/plugin` - Contém arquivos que podem ser executados antes da criação da instância principal do Vue.js
- `/static` - Todos os arquivos dessa pasta são mapeados diretamente para a raiz do servidor de execução.
- `/store` - Contém módulos da Vuex Store
- `nuxt.config.js` - Configurações do Nuxt

### Específicos do projeto
- `/utils` - Usado para criação de pequenos scrips que possam auxiliar no desenvolvimento, como manipuladores de dados, strings e matemática
- `/services` - Usado para a criação de scripts complexos que não estão relacionados a nenhum componente visual, como uma interface virtual de comunicação com a API

## O que foi usado no projeto

### Base
Itens essenciais para o projeto.
**Não podem ser removidos**

- [Vue.js](https://vuejs.org/) como biblioteca JS de componentização
- [Nuxt.js](https://github.com/nuxt/nuxt.js) como framework e estrutura
- [Pug.js](https://pugjs.org/) como pre-processor de HTML e linguagem de template padrão
- [Sass](https://sass-lang.com/) como pre-processor de CSS e linguagem de estilo padrão
### Módulos
Módulos e plugins externos instalados
**Deve sempre estar atualizado**

- [PWA Module](https://pwa.nuxtjs.org) para configuração automática de PWA
- [Vuetify.js](https://vuetifyjs.com/) como framework de componentes visuais padrão
- [Auth Module](https://auth.nuxtjs.org) para autenticação
- [Axios Module](https://axios.nuxtjs.org) para consumo de APIs REST
- [Moment Module](https://github.com/nuxt-community/moment-module) para manipulação de datas

### Desenvolvimento
Módulos e ferramentas usadas somente durante o desenvolvimento inicial ou em protótipos.
**Devem ser removidos futuramente, com evolução do projeto**
- [Faker](https://github.com/Marak/faker.js) para ajudar na geração de valores aleatórios durante prototipagens

### Padrões do projeto
Todos os padrões abaixo devem ser respeitados. Qualquer alteração deve ser solicitada e autorizada pelo responsável técnico da empresa.
- [JavaScript Standard Style](https://standardjs.com/)
- [Vue.js Style Guide](https://vuejs.org/v2/style-guide/) (todas as regras recomendadas)
- [Gitmoji](https://github.com/carloscuesta/gitmoji) como padrão de mensagem de commit
- [Git Flow](https://datasift.github.io/gitflow/IntroducingGitFlow.html) como padrão de nome para branches

## Contribuindo
- Siga os padrões estabelicidos
- Ao instalar/remover módulos no projeto, lembre-se de atualizar a lista neste arquivo, incluindo sempre o link para a documentação oficial da ferramenta
- Peça que o responsável pelo projeto revise suas alterações antes de finaliza-las
- Todos os merges de branches devem ser feitos através da interface indicada do provedor de repositório oficial da empresa
- Inclua seu nome na lista de colaboradores e não deixe que seu esforço seja esquecido

## Colaboradores
Todas as pessoas que já ajudaram este projeto:
- Seu Nome <seu_email@emiolo.com> - Responsável atual do projeto
- Antonio Eduardo <antonio@emiolo.com> - Definição da estrutura e os padrões de desenvolvimento
