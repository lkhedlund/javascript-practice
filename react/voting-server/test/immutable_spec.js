import {expect} from 'chai';
import {List} from 'immutable';

describe('immutability', () => {

  describe('A List', () => {

    function addMovie(currentState, movie) {
      return currentState.push(movie);
    }

    it('is immutable', () => {
      let state = List.of('Moonrise Kingdom', 'The Grand Budapest Hotel');
      let nextState = addMovie(state, 'The Royal Tenenbaums');

      expect(nextState).to.equal(List.of(
        'Moonrise Kingdom',
        'The Grand Budapest Hotel',
        'The Royal Tenenbaums'
      ));

      expect(state).to.equal(List.of(
        'Moonrise Kingdom',
        'The Grand Budapest Hotel'
      ));
    });
  });
});
