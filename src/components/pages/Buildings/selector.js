import {createSelector} from 'reselect';

const isLoadingSelector = state => state.isLoading;
const buildingsSelector = state => state.buildings;

export default createSelector(
  [buildingsSelector,isLoadingSelector],
  (buildings, isLoading) => ({
    buildings,
    isLoading
  })
);
