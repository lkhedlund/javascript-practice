import {expect} from 'chai';
import {List, Map} from 'immutable';

describe('immutability', () => {

  describe('A tree', () => {

    function addMovie(currentState, movie) {
      return currentState.update('movies', movies => movies.push(movie));
    }

    it('is immutable', () => {
      let state = Map({
        movies: List.of('Moonrise Kingdom', 'The Grand Budapest Hotel')
      });
      let nextState = addMovie(state, 'The Royal Tenenbaums');

      expect(nextState).to.equal(Map({
        movies: List.of(
          'Moonrise Kingdom',
          'The Grand Budapest Hotel',
          'The Royal Tenenbaums'
        )
      }));

      expect(state).to.equal(Map({
        movies: List.of(
          'Moonrise Kingdom',
          'The Grand Budapest Hotel'
        )
      }));
    });
  });
});
