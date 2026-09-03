# LojaProject / AngularJava-CRUD
Um simples CRUD Fullstack feito em Java e Angular.

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/GabrielNZ/FinalProject-AppAgendamento/blob/main/LICENSE)

### [English Version](./READMEus.md)

## Estrutura do Projeto

Duas paginas, uma de produtos, onde os mesmos podem ser **Criados**, *Atualizados**, **Deletados** ou **"Comprados"** e **adicionados** a um Pedido, a outra de Pedidos, onde se **lista** ou **deleta** tanto um Produto de um Pedido ou um Pedido inteiro.

Indo além do projeto anterior em Angular onde se tinha apenas o Frontend, dou um paço a mais no meu aprendizado, incluindo um Backend inteiro na implementação do projeto.

Regras de negocio:
- ❌ Pedido com valor **maior que R$ 1.000**
- ❌ Lista de produtos com **mais de 5 produtos**

## 📃 Features:
- CRUD completo de Produtos
- CRUD completo de Pedidos
- Backend capturado via HttpService
- Regras de negocio validadas via Backend
- PrimeNG como componentes visuais

## ✨ Front end

<img width="600" height="380" alt="image" src="https://github.com/user-attachments/assets/2e0e1215-a5ad-4547-b3c4-64ad411d192b" />
<img width="600" height="380" alt="image" src="https://github.com/user-attachments/assets/c10f08f1-6acd-41d1-b499-1b9e234d2665" />

# 🚦 Como Executar o Projeto
### 🛠 Pré-requisitos
- Git
- MySQL
- Java
### 🚀 Como rodar na minha máquina?
1. Clone o repositório: `git clone https://github.com/GabrielNZ/AngularJava-CRUD`.
2. Crie o banco de dados `produto_pedido_db`:
```bash
CREATE DATABASE IF NOT EXISTS produto_pedido_db;
```
3. Configure as variáveis de ambiente do MySQL:
```bash
DB_USERNAME=seu_usuario
DB_PASSWORD=sua_senha
```
4. Por fim inicie o ``iniciar.bat`` ou digite ``npm start`` na raiz do projeto.

## 🎯 Tecnologias
### Back end
- Java
- SpringBoot
### Front end
- Angular
- Angular Material
- HTML
- CSS
### Implementation
- DataBase: MySQL
## Autor

Gabriel Nicolodi Zimmermann

[https://www.linkedin.com/in/gabriel-n-zimmermann-aba618338/]
