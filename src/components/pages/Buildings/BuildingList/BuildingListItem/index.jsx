import React from 'react';

import styles from '../../buildings.module.css';

const BuildingListItem = ({ building }) => {
  return (
    <article key={building.name} className={styles.building_item}>
      <img src={building.image} alt={building.name} className={styles.building_img}  />

      <div className={styles.building_name}>{building.name}</div>

      <div className={styles.address}>
        <div>{building.address.line1}</div>
        <div>{building.address.line2}</div>
      </div>

      <div className={styles.details}>
        <div className={styles.users}>
          <i className='fa fa-user' /> {building.users} Users
        </div>
        <div className={styles.offices}>
          <i className='fa fa-briefcase' /> {building.offices} Offices
        </div>
      </div>

      <div className={styles.rent_container}>
        <div className={styles.rent_label}>For Rent</div>
        <div className={styles.rent_price}>£{building.rent}/sqm</div>
      </div>
    </article>
  )
};

export default BuildingListItem;
