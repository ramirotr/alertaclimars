-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 02/07/2025 às 13:46
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `alerta_clima_rs`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `eventos_extremos`
--

CREATE TABLE `eventos_extremos` (
  `id` int(11) NOT NULL,
  `nome_evento` varchar(100) DEFAULT NULL,
  `data_inicio` date DEFAULT NULL,
  `data_fim` date DEFAULT NULL,
  `nivel_max` decimal(5,2) DEFAULT NULL,
  `descricao` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `media_anual_nivel_guaiba`
--

CREATE TABLE `media_anual_nivel_guaiba` (
  `ano` year(4) NOT NULL,
  `nivel_medio` decimal(5,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `media_anual_nivel_guaiba`
--

INSERT INTO `media_anual_nivel_guaiba` (`ano`, `nivel_medio`) VALUES
('2020', 2.35),
('2021', 2.41),
('2022', 2.10),
('2023', 2.46),
('2024', 4.12),
('2025', 2.78);

-- --------------------------------------------------------

--
-- Estrutura para tabela `media_mensal_2020`
--

CREATE TABLE `media_mensal_2020` (
  `mes` varchar(20) NOT NULL,
  `nivel_medio` decimal(5,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `media_mensal_2020`
--

INSERT INTO `media_mensal_2020` (`mes`, `nivel_medio`) VALUES
('Abril', 2.40),
('Agosto', 2.00),
('Dezembro', 2.30),
('Fevereiro', 2.20),
('Janeiro', 2.15),
('Julho', 2.05),
('Junho', 2.10),
('Maio', 2.35),
('Março', 2.25),
('Novembro', 2.25),
('Outubro', 2.20),
('Setembro', 2.05);

-- --------------------------------------------------------

--
-- Estrutura para tabela `media_mensal_2021`
--

CREATE TABLE `media_mensal_2021` (
  `mes` varchar(20) NOT NULL,
  `nivel_medio` decimal(5,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `media_mensal_2021`
--

INSERT INTO `media_mensal_2021` (`mes`, `nivel_medio`) VALUES
('Abril', 2.50),
('Agosto', 2.10),
('Dezembro', 2.40),
('Fevereiro', 2.30),
('Janeiro', 2.25),
('Julho', 2.15),
('Junho', 2.20),
('Maio', 2.45),
('Março', 2.35),
('Novembro', 2.35),
('Outubro', 2.30),
('Setembro', 2.15);

-- --------------------------------------------------------

--
-- Estrutura para tabela `media_mensal_2022`
--

CREATE TABLE `media_mensal_2022` (
  `mes` varchar(20) NOT NULL,
  `nivel_medio` decimal(5,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `media_mensal_2022`
--

INSERT INTO `media_mensal_2022` (`mes`, `nivel_medio`) VALUES
('Abril', 2.20),
('Agosto', 1.90),
('Dezembro', 2.25),
('Fevereiro', 2.10),
('Janeiro', 2.05),
('Julho', 1.95),
('Junho', 2.00),
('Maio', 2.25),
('Março', 2.15),
('Novembro', 2.20),
('Outubro', 2.10),
('Setembro', 2.00);

-- --------------------------------------------------------

--
-- Estrutura para tabela `media_mensal_2023`
--

CREATE TABLE `media_mensal_2023` (
  `mes` varchar(20) NOT NULL,
  `nivel_medio` decimal(5,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `media_mensal_2023`
--

INSERT INTO `media_mensal_2023` (`mes`, `nivel_medio`) VALUES
('Abril', 2.60),
('Agosto', 2.25),
('Dezembro', 2.50),
('Fevereiro', 2.45),
('Janeiro', 2.40),
('Julho', 2.30),
('Junho', 2.35),
('Maio', 2.55),
('Março', 2.50),
('Novembro', 2.45),
('Outubro', 2.40),
('Setembro', 2.35);

-- --------------------------------------------------------

--
-- Estrutura para tabela `media_mensal_2024`
--

CREATE TABLE `media_mensal_2024` (
  `mes` varchar(20) NOT NULL,
  `nivel_medio` decimal(5,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `media_mensal_2024`
--

INSERT INTO `media_mensal_2024` (`mes`, `nivel_medio`) VALUES
('Abril', 2.70),
('Agosto', 2.50),
('Dezembro', 2.35),
('Fevereiro', 2.25),
('Janeiro', 2.30),
('Julho', 2.90),
('Junho', 3.10),
('Maio', 4.12),
('Março', 2.45),
('Novembro', 2.60),
('Outubro', 2.55),
('Setembro', 2.40);

-- --------------------------------------------------------

--
-- Estrutura para tabela `media_mensal_2025`
--

CREATE TABLE `media_mensal_2025` (
  `mes` varchar(20) NOT NULL,
  `nivel_medio` decimal(5,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `media_mensal_2025`
--

INSERT INTO `media_mensal_2025` (`mes`, `nivel_medio`) VALUES
('Abril', 2.90),
('Fevereiro', 2.80),
('Janeiro', 2.70),
('Julho', 2.85),
('Junho', 2.95),
('Maio', 3.00),
('Março', 2.85);

-- --------------------------------------------------------

--
-- Estrutura para tabela `nivel_guaiba`
--

CREATE TABLE `nivel_guaiba` (
  `id` int(11) NOT NULL,
  `data_medicao` date NOT NULL,
  `hora_medicao` time DEFAULT NULL,
  `nivel_metros` decimal(5,2) NOT NULL,
  `fonte` varchar(100) DEFAULT 'ANA',
  `observacao` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `eventos_extremos`
--
ALTER TABLE `eventos_extremos`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `media_anual_nivel_guaiba`
--
ALTER TABLE `media_anual_nivel_guaiba`
  ADD PRIMARY KEY (`ano`);

--
-- Índices de tabela `media_mensal_2020`
--
ALTER TABLE `media_mensal_2020`
  ADD PRIMARY KEY (`mes`);

--
-- Índices de tabela `media_mensal_2021`
--
ALTER TABLE `media_mensal_2021`
  ADD PRIMARY KEY (`mes`);

--
-- Índices de tabela `media_mensal_2022`
--
ALTER TABLE `media_mensal_2022`
  ADD PRIMARY KEY (`mes`);

--
-- Índices de tabela `media_mensal_2023`
--
ALTER TABLE `media_mensal_2023`
  ADD PRIMARY KEY (`mes`);

--
-- Índices de tabela `media_mensal_2024`
--
ALTER TABLE `media_mensal_2024`
  ADD PRIMARY KEY (`mes`);

--
-- Índices de tabela `media_mensal_2025`
--
ALTER TABLE `media_mensal_2025`
  ADD PRIMARY KEY (`mes`);

--
-- Índices de tabela `nivel_guaiba`
--
ALTER TABLE `nivel_guaiba`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `eventos_extremos`
--
ALTER TABLE `eventos_extremos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `nivel_guaiba`
--
ALTER TABLE `nivel_guaiba`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
