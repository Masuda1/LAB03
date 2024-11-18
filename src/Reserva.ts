/**
 * Classe que representa uma reserva de quarto em um hotel.
 */
export class Reserva {
  numeroQuarto: number; // Número do quarto reservado.
  nomeHospede: string; // Nome do hóspede.
  dataEntrada: Date; // Data de entrada do hóspede.
  dataSaida: Date; // Data de saída do hóspede.

  /**
   * Construtor da classe Reserva.
   * @param numeroQuarto - O número do quarto reservado.
   * @param nomeHospede - O nome do hóspede.
   * @param dataEntrada - A data de entrada.
   * @param dataSaida - A data de saída.
   */
  constructor(numeroQuarto: number, nomeHospede: string, dataEntrada: Date, dataSaida: Date) {
    this.numeroQuarto = numeroQuarto;
    this.nomeHospede = nomeHospede;
    this.dataEntrada = dataEntrada;
    this.dataSaida = dataSaida;
  }
}
