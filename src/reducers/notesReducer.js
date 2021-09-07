import { notesTypes } from 'types';

const initialState = {
  notes: [],
  active: null,
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case notesTypes.active:
      return {
        ...state,
        active: {
          ...action.payload,
        },
      };
    case notesTypes.load:
      return {
        ...state,
        notes: [...action.payload],
      };

    default:
      return state;
  }
};
