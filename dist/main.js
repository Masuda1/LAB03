"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Reserva_1 = require("./Reserva");
const Hotel_1 = require("./Hotel");
function testarHotel() {
    const hotel = new Hotel_1.Hotel();
    const reserva1 = new Reserva_1.Reserva(101, 'João Silva', new Date('2024-11-10'), new Date('2024-11-15'));
    const reserva2 = new Reserva_1.Reserva(102, 'Maria Oliveira', new Date('2024-11-12'), new Date('2024-11-20'));
    hotel.registrarReserva(reserva1);
    hotel.registrarReserva(reserva2);
    console.log(`Status do quarto 101: ${hotel.consultarStatusQuarto(101)}`);
    console.log(`Status do quarto 103: ${hotel.consultarStatusQuarto(103)}`);
    hotel.cancelarReserva(101);
    console.log(`Status do quarto 101 após cancelamento: ${hotel.consultarStatusQuarto(101)}`);
    hotel.cancelarReserva(104);
}
testarHotel();
//# sourceMappingURL=main.js.map