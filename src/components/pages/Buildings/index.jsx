import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadBuildings } from '../../../actions/buildings';
import TopBar from '../../layout/TopBar';


const BuildingsPage = () => {
  const dispatch = useDispatch();
  const { buildings, isLoading } = useSelector(state => state);

  useEffect(() => {
    dispatch(loadBuildings());
  }, [dispatch]);

  console.log(buildings);

  return (
    <div>
      <TopBar title="All Buildings" />
      {isLoading && (<div>Loading buildings...</div>)}
      {!isLoading && (
        <div>
          Buildings listing page
        </div>
      )}
    </div>
  );
}

export default BuildingsPage;
