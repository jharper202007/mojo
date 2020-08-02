// Can fallback to nothing because 'proxy' is set in package.json
const API_BASE_PATH = process.env.API_BASE_PATH || '';
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
    const result = await fetch(LOAD_BUILDINGS_API_PATH);
    const json = await result.json();
    dispatch(
      loadBuildingsActions.success(json.buildings)
    );
  } catch (err) {
    dispatch(
      loadBuildingsActions.error(err.message)
    );
  }
};
