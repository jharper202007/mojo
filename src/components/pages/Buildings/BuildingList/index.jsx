import React from 'react';

import BuildingListItem from './BuildingListItem';
import styles from '../buildings.module.css';

const BuildingList = ({ buildings }) => {
  return (
    <div className={styles.buildings_container}>
      {buildings.map(building => (
        <BuildingListItem key={building.name} building={building} />
      ))}
    </div>
  );
};

export default BuildingList;
