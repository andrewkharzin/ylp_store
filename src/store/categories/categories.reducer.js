import {CATEGORIES_ACTION_TYPES} from './categories.types';

export const CATEGORIES_INITIAL_STATE = {
  categories: [],
  isLoaidng: false,
  error: null
};

export const categoriesReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
      return {...state, isLoaidng: true}
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
      return { ...state, categories: payload, isLoaidng: false };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAIED:
      return { ...state, error: payload, isLoaidng: false };
    default:
      return state;
  }
};