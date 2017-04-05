import {List, Map} from 'immutable';
import {expect} from 'chai';
import {setEntries, next} from '../src/core';

describe('application logic', () => {

  describe('setEntries', () => {

    it('adds the entries to the state', () => {
      const state = Map();
      const entries = List.of('Moonrise Kingdom', 'The Grand Budapest Hotel');
      const nextState = setEntries(state, entries);
      expect(nextState).to.equal(Map({
        entries: List.of('Moonrise Kingdom', 'The Grand Budapest Hotel')
      }));
    });

    it('coverts to immutable', () => {
      const state = Map();
      const entries = ['Moonrise Kingdom', 'The Grand Budapest Hotel'];
      const nextState = setEntries(state, entries);

      expect(nextState).to.equal(Map({
        entries: List.of('Moonrise Kingdom', 'The Grand Budapest Hotel')
      }));
    });
  });

  describe('next', () => {

    it('takes the next two entries under vote', () => {
      const state = Map({
        entries: List.of('Moonrise Kingdom', 'The Grand Budapest Hotel', 'The Royal Tenenbaums')
      });
      const nextState = next(state);
      expect(nextState).to.equal(Map({
        vote: Map({
          pair: List.of('Moonrise Kingdom', 'The Grand Budapest Hotel')
        }),
        entries: List.of('The Royal Tenenbaums')
      }));
    });
  });
});
