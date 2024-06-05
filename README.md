# Desafio de Projeto: Shopee-CAR

[Repositório Original](https://github.com/digitalinnovationone/formacao-nodejs/tree/main/06-shopee-cart)

Este é um projeto simples de um carrinho de compras utilizando JavaScript. Ele simula um carrinho de compras online, permitindo adicionar, remover e exibir itens, além de calcular o total do carrinho.

## Estrutura do Projeto

- `src/`
  - `services/`
    - `cart.js` - Módulo contendo as funcionalidades do carrinho.
    - `item.js` - Módulo para criação de itens.
  - `index.js` - Script principal que utiliza os módulos de carrinho e item.

- `.gitignore` - Arquivo para especificar quais arquivos/devem ser ignorados pelo Git.
- `arquitetura.png` - Imagem que descreve a arquitetura do projeto.
- `LICENSE` - Arquivo de licença do projeto.
- `package.json` - Arquivo de configuração do npm.
- `README.md` - Este arquivo.

## Requisitos

- Node.js instalado

## Como executar o projeto

1. Clone o repositório:
   ```sh
   git clone https://github.com/yuridiasp/shopee-car.git
   cd shopee-car
   ```

2. Instale as dependências:
   ```sh
   npm install
   ```

3. Execute o script principal:
   ```sh
   node src/index.js
   ```

## Descrição dos Arquivos

### `index.js`

Este arquivo é o ponto de entrada do projeto. Ele importa os serviços do carrinho e do item e realiza as seguintes ações:

- Cria um carrinho vazio.
- Adiciona itens ao carrinho.
- Exibe o conteúdo do carrinho.
- Calcula o total do carrinho.

### `services/cart.js`

Este módulo contém as funções relacionadas ao carrinho de compras:

- `addItem` - Adiciona um item ao carrinho.
- `deleteItem` - Remove um item do carrinho.
- `removeItemByIndex` - Remove um item do carrinho pelo índice.
- `removeItem` - Remove uma unidade de um item ou o item completo se a quantidade for 1.
- `calculateTotal` - Calcula o total do carrinho.
- `displayCart` - Exibe o conteúdo do carrinho.

### `services/item.js`

Este módulo contém a função para criar itens:

- `createItem` - Cria um item com nome, preço e quantidade.

## Exemplo de Uso

Aqui está um exemplo de como utilizar o projeto:

```javascript
import cartService from "./services/cart.js";
import { createItem } from "./services/item.js";

const cart = [];

console.log("🛒 Bem-vindo ao seu Shopee Cart! 🛒\n");

const item1 = await createItem("Hotwheels Ferrari", 20.99, 1);
await cartService.addItem(cart, item1);

const item2 = await createItem("Hotwheels Lamborghini", 39.99, 3);
await cartService.addItem(cart, item2);

cartService.displayCart(cart);

cartService.calculateTotal(cart);
```

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.


<h2 id="author">Desenvolvedor</h2>

<p>
    <a href="https://github.com/yuridiasp">
        <img
          align=left
          margin=10
          width=80
          src="https://avatars.githubusercontent.com/u/81938754?v=4"
        />
    </a>
      <p>
        <p>&nbsp&nbspYuri Dias<br>
        &nbsp&nbsp&nbsp
    </p>
</p>

<br>

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/yuridiasp/) [![Discord](https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white)](https://discord.com/channels/@yuridiasp/) [![Facebook](https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white)](https://www.facebook.com/yuri.dias.7739/) [![X](https://img.shields.io/badge/X-000?style=for-the-badge&logo=x)](https://x.com/YuriDias_P) [![Instagram](https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/yuridiasp/) [![E-mail](https://img.shields.io/badge/-Email-000?style=for-the-badge&logo=microsoft-outlook&logoColor=007BFF)](mailto:yuristardias@hotmail.com)