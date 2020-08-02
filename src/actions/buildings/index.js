import axios from 'axios';

axios.defaults.headers['Access-Control-Allow-Origin'] = '*';
const API_BASE_PATH = process.env.API_BASE_PATH || 'http://localhost:8000';
const LOAD_BUILDINGS_API_PATH = `${API_BASE_PATH}/buildings`;

// Load buildings action name constants
export const LOAD_BUILDINGS_INIT = 'LOAD_BUILDINGS/INIT';
export const LOAD_BUILDINGS_SUCCESS = 'LOAD_BUILDINGS/SUCCESS';
export const LOAD_BUILDINGS_ERROR = 'LOAD_BUILDINGS/ERROR';

const loadBuildingsActions = {
  init() {
    return {
      type: LOAD_BUILDINGS_INIT
    };
  },
  success(buildings) {
    return {
      type: LOAD_BUILDINGS_SUCCESS,
      payload: buildings
    };
  },
  error(message) {
    return {
      type: LOAD_BUILDINGS_ERROR,
      payload: message
    };
  }
};

export const loadBuildings = () => async (dispatch) => {
  dispatch(
    loadBuildingsActions.init()
  );

  try {
    const result = await axios.get(LOAD_BUILDINGS_API_PATH);
    dispatch(
      loadBuildingsActions.success(result)
    );
  } catch (err) {
    dispatch(
      loadBuildingsActions.error(err.message)
    );
  }
};
