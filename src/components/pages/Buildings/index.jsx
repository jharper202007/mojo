import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadBuildings } from '../../../actions/buildings';

const BuildingsPage = () => {
  const dispatch = useDispatch();
  const { buildings, isLoading } = useSelector(state => state);

  useEffect(() => {
    dispatch(loadBuildings());
  }, [dispatch]);

  console.log(buildings);

  if (isLoading) {
    return (
      <div>Loading buildings...</div>
    );
  }

  return (
    <div>
      Buildings listing Page
    </div>
  );
}

export default BuildingsPage;
