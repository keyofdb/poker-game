import SeatAssignment from './seat-assignment.js';
import seatAssignmentStatuses from './seat-assignment-statuses.js';

export default class PokerTable {
  #seatAssignments;
  #limits;
  #dealerButtonPosition;

  constructor({
    seatCount = 8,
    limits: {
      smallBet = 1,
      bigBet = 2
    }
  }) {
    this.#seatAssignments = new Array(seatCount);
    this.#limits = limits;
  }

  assignSeat(playerId, seatNumber, amount) {
    this.#seatAssignments[seatNumber - 1] = new SeatAssignment(
      playerId,
      seatAssignmentStatuses.ACTIVE,
      amount
    );
  }

  unAssignSeat(seatNumber) {
    this.#seatAssignments[seatNumber - 1] = null;
  }

  advanceDealerButton() {
    this.#dealerButtonPosition = this.#dealerButtonPosition === this.#seatAssignments.length
      ? 1
      : this.#dealerButtonPosition + 1;
  }

  startNewHand() {
    
  }
};

