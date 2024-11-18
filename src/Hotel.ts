import { Reserva } from './Reserva';

/**
 * Classe que gerencia as reservas de um hotel.
 */
export class Hotel {
  // Lista privada que armazena as reservas ativas.
  private reservas: Reserva[] = [];

  /**
   * Registra uma nova reserva no hotel.
   * @param reserva - Instância da classe Reserva a ser adicionada.
   */
  registrarReserva(reserva: Reserva): void {
    // Verifica se o quarto já está reservado.
    const reservaExistente = this.reservas.find(r => r.numeroQuarto === reserva.numeroQuarto);
    if (reservaExistente) {
      console.warn(`Quarto ${reserva.numeroQuarto} já está reservado.`);
      return;
    }
    this.reservas.push(reserva);
    console.log(`Reserva para o quarto ${reserva.numeroQuarto} registrada com sucesso.`);
  }

  /**
   * Cancela uma reserva existente.
   * @param numeroQuarto - O número do quarto cuja reserva será cancelada.
   */
  cancelarReserva(numeroQuarto: number): void {
    const index = this.reservas.findIndex(r => r.numeroQuarto === numeroQuarto);
    if (index === -1) {
      console.error(`Reserva para o quarto ${numeroQuarto} não encontrada.`);
      return;
    }
    this.reservas.splice(index, 1);
    console.log(`Reserva para o quarto ${numeroQuarto} cancelada com sucesso.`);
  }

  /**
   * Consulta o status de um quarto específico.
   * @param numeroQuarto - O número do quarto a ser consultado.
   * @returns Retorna "Reservado" se o quarto estiver reservado ou "Disponível" caso contrário.
   */
  consultarStatusQuarto(numeroQuarto: number): string {
    const reserva = this.reservas.find(r => r.numeroQuarto === numeroQuarto);
    return reserva ? 'Reservado' : 'Disponível';
  }
}
