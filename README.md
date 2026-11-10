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

CREATE DATABASE IF NOT EXISTS clinica_db;
USE clinica_db;

CREATE TABLE IF NOT EXISTS medicos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    especialidade VARCHAR(60) NOT NULL
);

CREATE TABLE IF NOT EXISTS agendamentos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    medico_id INT NOT NULL,
    paciente_nome VARCHAR(100) NOT NULL,
    data_hora DATETIME NOT NULL,
    observacao VARCHAR(255),
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (medico_id) REFERENCES medicos(id) ON DELETE CASCADE
);

-- Dados iniciais para teste
INSERT INTO medicos (nome, especialidade) VALUES
('Dra. Ana Costa', 'Cardiologia'),
('Dr. Carlos Eduardo', 'Ortopedia'),
('Dra. Mariana Lima', 'Dermatologia');


Arquivo .env:

PORT=3000

DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_NAME=clinica_db
