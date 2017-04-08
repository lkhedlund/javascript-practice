import {Map, fromJS} from 'immutable';
import {expect} from 'chai';

import reducer from '../src/reducer';

describe('reducer', () => {

  it('handles SET_ENTRIES', () => {
    const initialState = Map();
    const action = {type: 'SET_ENTRIES', entries: ['Moonrise Kingdom']};
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      entries: ['Moonrise Kingdom']
    }));
  });

  it('handles NEXT', () => {
    const initialState = fromJS({
      entries: ['Moonrise Kingdom', 'The Grand Budapest Hotel']
    });
    const action = {type: 'NEXT'};
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      vote: {
        pair: ['Moonrise Kingdom', 'The Grand Budapest Hotel']
      },
      entries: []
    }));
  });

  it('handles VOTE', () => {
    const initialState = fromJS({
      vote: {
        pair: ['Moonrise Kingdom', 'The Grand Budapest Hotel']
      },
      entries: []
    });
    const action = {type: 'VOTE', entry: 'Moonrise Kingdom'};
    const nextState = reducer(initialState , action);

    expect(nextState).to.equal(fromJS({
        vote: {
          pair: ['Moonrise Kingdom', 'The Grand Budapest Hotel'],
          tally: {'Moonrise Kingdom': 1}
        },
        entries: []
    }));
  });

  it('has an initial state', () => {
    const action = {type: 'SET_ENTRIES', entries: ['Moonrise Kingdom']};
    const nextState = reducer(undefined, action);
    expect(nextState).to.equal(fromJS({
      entries: ['Moonrise Kingdom']
    }));
  });

});
