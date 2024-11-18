# Sistema de Gerenciamento de Reservas de Hotel

## Descrição

Este projeto é uma aplicação em TypeScript que permite gerenciar reservas de quartos em um hotel. O sistema inclui funcionalidades para:

- Registrar reservas
- Cancelar reservas
- Consultar o status de reservas

## Funcionalidades

- **Registro de Reservas**: Permite registrar novas reservas, especificando o número do quarto, nome do hóspede, data de entrada e data de saída.
- **Cancelamento de Reservas**: Permite cancelar uma reserva existente, liberando o quarto para novas reservas.
- **Consulta de Reservas**: Permite verificar o status dos quartos, indicando se estão "Reservados" ou "Disponíveis".

## Estrutura do Projeto

- **Reserva.ts**: Classe que representa uma reserva, definindo as propriedades e inicializando-as através de um construtor.

- **Hotel.ts**: Classe que gerencia o cadastro e as operações com reservas. Possui uma lista privada de reservas e métodos para registrar, cancelar e consultar reservas. Inclui verificações para tratar erros, como tentativas de cancelar ou registrar uma reserva de um quarto já reservado.

- **main.ts**: Script que contém a função de teste para simular o uso do sistema. A função `testarHotel` cria instâncias de reservas, registra-as, cancela uma reserva e consulta o status dos quartos para demonstrar as funcionalidades do sistema.

## Explicação do Código

### Classe `Reserva`

Define as propriedades de uma reserva:

- `numeroQuarto`: Número do quarto reservado.
- `nomeHospede`: Nome do hóspede que fez a reserva.
- `dataEntrada`: Data de entrada do hóspede.
- `dataSaida`: Data de saída do hóspede.

O construtor inicializa todas as propriedades da reserva.

### Classe `Hotel`

Possui uma lista privada de reservas e métodos para:

- **Registrar Reservas**: Adiciona novas reservas ao sistema, garantindo que o quarto não esteja previamente reservado.
- **Cancelar Reservas**: Remove uma reserva existente, liberando o quarto para novas reservas.
- **Consultar Reservas**: Verifica o status dos quartos, indicando se estão "Reservados" ou "Disponíveis".

Inclui tratamento de erros para:

- **Quartos Já Reservados**: Impede que um quarto já reservado seja reservado novamente.
- **Reservas Inexistentes**: Informa quando uma tentativa de cancelar uma reserva não existente é feita.

### Funções de Teste

A função `testarHotel` em `main.ts` simula o fluxo de uso do sistema:

- Cria instâncias de reservas.
- Registra as reservas no sistema.
- Cancela uma reserva específica.
- Consulta o status dos quartos, verificando se estão "Reservados" ou "Disponíveis".
- Demonstra o tratamento de erros ao tentar cancelar uma reserva inexistente.

## Como Executar

1. **Pré-requisitos**: Certifique-se de ter o Node.js e o TypeScript instalados em sua máquina.

   Instale o TypeScript globalmente, se necessário:

   ```bash
   npm install -g typescript
   ```

2. **Compilar os Arquivos TypeScript**:

   Estando como o cmd aberto dentro da pasta *src* compile os arquivos TypeScript usando o comando:

   ```bash
   tsc
   ```

   Isso irá gerar os arquivos JavaScript correspondentes.

3. **Executar o Script Principal**:

   Estando com o cmd aberto dentro da pasta *dist* execute o arquivo compilado `main.js`:

   ```bash
   node main.js
   ```

## Testes Realizados

- **Registro de Reservas**: Registro de duas reservas de quartos no sistema.
- **Cancelamento de Reservas**: Cancelamento de uma reserva existente.
- **Consulta do Status de Quartos**: Verificação do status dos quartos, confirmando se estão "Reservados" ou "Disponíveis".
- **Tratamento de Erros**: Verificações para garantir que não ocorram operações inválidas, como tentar cancelar uma reserva inexistente, exibindo mensagens de erro apropriadas.

## Tratamento de Erros

O sistema inclui verificações para:

- **Quartos Já Reservados**: Ao tentar registrar uma reserva para um quarto já reservado, o sistema informa que o quarto está indisponível.
- **Reservas Inexistentes**: Ao tentar cancelar uma reserva que não existe, o sistema informa que a reserva não foi encontrada.