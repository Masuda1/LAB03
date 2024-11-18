"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hotel = void 0;
class Hotel {
    constructor() {
        this.reservas = [];
    }
    registrarReserva(reserva) {
        const reservaExistente = this.reservas.find(r => r.numeroQuarto === reserva.numeroQuarto);
        if (reservaExistente) {
            console.warn(`Quarto ${reserva.numeroQuarto} já está reservado.`);
            return;
        }
        this.reservas.push(reserva);
        console.log(`Reserva para o quarto ${reserva.numeroQuarto} registrada com sucesso.`);
    }
    cancelarReserva(numeroQuarto) {
        const index = this.reservas.findIndex(r => r.numeroQuarto === numeroQuarto);
        if (index === -1) {
            console.error(`Reserva para o quarto ${numeroQuarto} não encontrada.`);
            return;
        }
        this.reservas.splice(index, 1);
        console.log(`Reserva para o quarto ${numeroQuarto} cancelada com sucesso.`);
    }
    consultarStatusQuarto(numeroQuarto) {
        const reserva = this.reservas.find(r => r.numeroQuarto === numeroQuarto);
        return reserva ? 'Reservado' : 'Disponível';
    }
}
exports.Hotel = Hotel;
//# sourceMappingURL=Hotel.js.map