import {List, Map} from 'immutable';
import {expect} from 'chai';

import {setEntries} from '../src/core';

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
});
