import SeatAssignment from './seat-assignment.js';
import seatAssignmentStatuses from './seat-assignment-statuses.js';
import PokerHand from './poker-hand.js';
import PokerHandParticipant from './poker-hand-participant.js';
import pokerHandParticipantStatuses from './poker-hand-participant-statuses.js';

export default class PokerTable {
  #seatAssignments;
  #limits;
  #dealerButtonPosition;
  #currentHand;

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

  requestBlinds() {

  }

  startNewHand() {
    const participants = [
      ...this.#seatAssignments
        .filter((seatAssignment, index) => index + 1 > this.#dealerButtonPosition)
        .map((seatAssignment) => new PokerHandParticipant(seatAssignment.playerId, pokerHandParticipantStatuses.ACTIVE)),
      ...this.#seatAssignments
        .filter((seatAssignment, index) => index + 1 <= this.#dealerButtonPosition)
        .map((seatAssignment) => new PokerHandParticipant(seatAssignment.playerId, pokerHandParticipantStatuses.ACTIVE)),      
    ];

    this.#currentHand = new PokerHand(participants);
  }
};

