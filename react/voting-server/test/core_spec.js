import {List, Map} from 'immutable';
import {expect} from 'chai';
import {setEntries, next, vote} from '../src/core';

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

    it('puts winner of current vote back to entries', () => {
      const state = Map({
        vote: Map({
          pair: List.of('Moonrise Kingdom', 'The Grand Budapest Hotel'),
          tally: Map({
            'Moonrise Kingdom': 4,
            'The Grand Budapest Hotel': 2
          })
        }),
        entries: List.of('The Royal Tenenbaums', 'Fantastic Mr. Fox', 'Rushmore')
      });
      const nextState = next(state);
      expect(nextState).to.equal(Map({
        vote: Map({
          pair: List.of('The Royal Tenenbaums', 'Fantastic Mr. Fox')
        }),
        entries: List.of('Rushmore', 'Moonrise Kingdom')
      }));
    });

    it('puts both from tied vote back to entries', () => {
      const state = Map({
        vote: Map({
          pair: List.of('Moonrise Kingdom', 'The Grand Budapest Hotel'),
          tally: Map({
            'Moonrise Kingdom': 3,
            'The Grand Budapest Hotel': 3
          })
        }),
        entries: List.of('The Royal Tenenbaums', 'Fantastic Mr. Fox', 'Rushmore')
      });
      const nextState = next(state);
      expect(nextState).to.equal(Map({
        vote: Map({
          pair: List.of('The Royal Tenenbaums', 'Fantastic Mr. Fox')
        }),
        entries: List.of('Rushmore', 'Moonrise Kingdom', 'The Grand Budapest Hotel')
      }))
    })

  });

  describe('vote', () => {

    it('creates a tally for the voted entry', () => {
      const state = Map({
        vote: Map({
          pair: List.of('Moonrise Kingdom', 'The Grand Budapest Hotel')
        }),
        entries: List(),
      });
      const nextState = vote(state, 'Moonrise Kingdom');
      expect(nextState).to.equal(Map({
        vote: Map({
          pair: List.of('Moonrise Kingdom', 'The Grand Budapest Hotel'),
          tally: Map({
            'Moonrise Kingdom': 1
          })
        }),
        entries: List()
      }));
    });

    it('adds to existing tally for the voted entry', () => {
      const state = Map({
        vote: Map({
          pair: List.of('Moonrise Kingdom', 'The Grand Budapest Hotel'),
          tally: Map({
            'Moonrise Kingdom': 3,
            'The Grand Budapest Hotel': 2
          })
        }),
        entries: List()
      });
      const nextState = vote(state, 'Moonrise Kingdom');
      expect(nextState).to.equal(Map({
        vote: Map({
          pair: List.of('Moonrise Kingdom', 'The Grand Budapest Hotel'),
          tally: Map({
            'Moonrise Kingdom': 4,
            'The Grand Budapest Hotel': 2
          })
        }),
        entries: List()
      }));
    });
  });
});
