import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadBuildings } from '../../../actions/buildings';
import Page from '../../pages/Page';
import BuildingList from './BuildingList';
import buildingsSelector from './selector';
import styles from './buildings.module.css';
import ViewSelector from './ViewSelector';

const BuildingsPage = () => {
  const dispatch = useDispatch();
  const { buildings, isLoading } = useSelector(buildingsSelector);

  useEffect(() => {
    if (!buildings.length) {
      dispatch(loadBuildings());
    }
  }, [buildings, dispatch]);

  return (
    <Page title='All Buildings' isListPage={true}>
      <div className={styles.container}>
        {isLoading && (<div>Loading buildings...</div>)}
        {!isLoading && (
          <div className={styles.container}>
            <div className={styles.list_container}>
              <div className={styles.options_container}>
                <div className={styles.subtitle}>{buildings.length} Buildings</div>
                <ViewSelector />
              </div>
              <BuildingList buildings={buildings} />
            </div>
            <div className={styles.map_container}>
              <img
                src='https://www.google.com/maps/d/thumbnail?mid=1yJFj8sZlnVZhViVOtzqUMcasGuU&hl=en'
                alt='map preview'
                className={styles.map_preview}
              />
            </div>
          </div>
        )}
      </div>
    </Page>
  );
}

export default BuildingsPage;
