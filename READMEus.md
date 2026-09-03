# LojaProject / AngularJava-CRUD
A simple Fullstack CRUD built with Java and Angular.

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/GabrielNZ/FinalProject-AppAgendamento/blob/main/LICENSE)

## Project Structure

Two pages, one for products, where they can be **Created**, **Updated**, **Deleted** or **"Purchased"** and **added** to an Order, and another for Orders, where it is possible to **list** or **delete** either a Product from an Order or an entire Order.

Going beyond the previous Angular project where there was only the Frontend, I take one more step in my learning process by including an entire Backend in the project implementation.

Regras de negocio:
- ❌ Order with a value** greater than R$ 1,000**
- ❌ Product list with **more than 5 products**

## 📃 Features:
- Complete Product CRUD
- Complete Order CRUD
- Backend accessed via HttpService
- Business rules validated through the Backend
- PrimeNG as visual components

## ✨ Front end

<img width="600" height="380" alt="image" src="https://github.com/user-attachments/assets/2e0e1215-a5ad-4547-b3c4-64ad411d192b" />
<img width="600" height="380" alt="image" src="https://github.com/user-attachments/assets/c10f08f1-6acd-41d1-b499-1b9e234d2665" />

# 🚦 Como Executar o Projeto
### 🛠 Prerequisites
- Git
- MySQL
- Java
### 🚀 How to run it on my machine?
1. Clone the repository: `git clone https://github.com/GabrielNZ/AngularJava-CRUD`.
2. Create the `produto_pedido_db` database:
```bash
CREATE DATABASE IF NOT EXISTS produto_pedido_db;
```
3. Configure the MySQL environment variables:
```bash
DB_USERNAME=seu_usuario
DB_PASSWORD=sua_senha
```
4. Finally, run ``iniciar.bat`` or type ``npm start`` in the project root.

## 🎯 Technologies
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
## Author

Gabriel Nicolodi Zimmermann

[https://www.linkedin.com/in/gabriel-n-zimmermann-aba618338/]
