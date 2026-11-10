Fazer:

npm init -y 
npm install express mysql2 dotenv


Para o package.json: 
"type": "module",
  "scripts": {
    "dev": "node --watch src/server.js",
    "start": "node src/server.js"
  },


No MySQL:

CREATE DATABASE aula;
USE aula;

CREATE TABLE produtos (
  id      INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  sku     VARCHAR(30)   NOT NULL UNIQUE,
  nome    VARCHAR(120)  NOT NULL,
  preco   DECIMAL(10,2) NOT NULL CHECK (preco >= 0),
  estoque INT UNSIGNED  NOT NULL DEFAULT 0,
  criado_em TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO produtos (sku, nome, preco, estoque) VALUES
  ('TEC-001', 'Teclado mecânico', 349.90, 15),
  ('MOU-001', 'Mouse sem fio',    129.90, 40),
  ('MON-001', 'Monitor 24"',      999.00,  8);


Arquivo .env:

PORT=3000

DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_NAME=aula
