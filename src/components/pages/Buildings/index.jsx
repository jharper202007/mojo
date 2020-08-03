import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadBuildings } from '../../../actions/buildings';
import TopBar from '../../layout/TopBar';
import BuildingList from './BuildingList';
import buildingsSelector from './selector';

const BuildingsPage = () => {
  const dispatch = useDispatch();
  const { buildings, isLoading } = useSelector(buildingsSelector);

  useEffect(() => {
    if (!buildings.length) {
      dispatch(loadBuildings());
    }
  }, [buildings, dispatch]);

  console.log(buildings);

  return (
    <div>
      <TopBar title="All Buildings" />
      {isLoading && (<div>Loading buildings...</div>)}
      {!isLoading && (
        <div>
          <BuildingList buildings={buildings} />
        </div>
      )}
    </div>
  );
}

export default BuildingsPage;
