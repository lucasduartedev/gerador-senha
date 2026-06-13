# Gerador de Senhas

Aplicação simples para gerar senhas aleatórias a partir de critérios escolhidos pelo usuário. O projeto combina uma interface em HTML/CSS com uma lógica de geração escrita em TypeScript, além de testes automatizados com Jasmine.

## Funcionalidades

- Definição do tamanho da senha, com limite entre 1 e 32 caracteres.
- Inclusão opcional de letras minúsculas.
- Inclusão opcional de letras maiúsculas.
- Inclusão opcional de números.
- Inclusão opcional de símbolos.
- Geração automática com valor padrão quando nenhuma opção é selecionada.
- Testes automatizados para validar as regras principais do gerador.

## Tecnologias

- HTML5
- CSS3
- TypeScript
- JavaScript
- Node.js
- Jasmine

## Estrutura do Projeto

```text
.
├── dist/
│   ├── index.html
│   └── css/
├── spec/
│   └── support/
├── src/
│   ├── conjuntoCaracteres.ts
│   ├── geradorSenha.ts
│   ├── index.ts
│   └── tests/
├── package.json
└── tsconfig.json
```

## Imagem do projeto

<img src="../img-projeto/img-projeto.png" alt="Imagem final do projeto" class="imagem-fundo">

## Como Executar

Instale as dependências:

```bash
npm install
```

Compile os arquivos TypeScript:

```bash
npm run build
```

Abra o arquivo `dist/index.html` no navegador para usar a interface.

## Testes

Execute a suíte de testes com:

```bash
npm test
```

## Observações

O Node.js é usado como apoio ao desenvolvimento, principalmente para compilar o TypeScript e executar os testes automatizados. A aplicação final é uma página web estática.

## Autor

Desenvolvido por Lucas Duarte.
