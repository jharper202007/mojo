import {
  LOAD_BUILDINGS_INIT,
  LOAD_BUILDINGS_SUCCESS,
  LOAD_BUILDINGS_ERROR
} from '../actions/buildings';

const initialState = {
  buildings: [],
  isLoading: false,
  notificationCounts: {
    conversations: 2,
    posts: 0
  },
  error: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_BUILDINGS_INIT: {
      return {
        ...state,
        isLoading: true
      };
    }
    case LOAD_BUILDINGS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: null,
        buildings: action.payload
      };
    }
    case LOAD_BUILDINGS_ERROR: {
      return {
        ...state,
        error: action.payload,
        isLoading: false
      }
    }
    default:
      return state;
  }
}
