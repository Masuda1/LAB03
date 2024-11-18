import { Reserva } from './Reserva';
import { Hotel } from './Hotel';

// Função para testar o sistema de gerenciamento de reservas
function testarHotel(): void {
  const hotel = new Hotel();

  // Criar e registrar reservas
  const reserva1 = new Reserva(101, 'Wagner Masuda', new Date('2024-11-10'), new Date('2024-11-15'));
  const reserva2 = new Reserva(102, 'Camilo Masuda', new Date('2024-11-12'), new Date('2024-11-20'));

  hotel.registrarReserva(reserva1);
  hotel.registrarReserva(reserva2);

  // Consultar status de quartos
  console.log(`Status do quarto 101: ${hotel.consultarStatusQuarto(101)}`);
  console.log(`Status do quarto 103: ${hotel.consultarStatusQuarto(103)}`);

  // Cancelar uma reserva
  hotel.cancelarReserva(101);

  // Consultar status após cancelamento
  console.log(`Status do quarto 101 após cancelamento: ${hotel.consultarStatusQuarto(101)}`);

  // Tentar cancelar uma reserva inexistente
  hotel.cancelarReserva(104);
}

testarHotel();
