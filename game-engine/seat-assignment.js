export default class SeatAssignment {
    #playerId;
    #status;
    #balance;

    constructor (playerId, status, balance) {
        this.#playerId = playerId;
        this.#status = status;
        this.#balance = balance;
    }
}