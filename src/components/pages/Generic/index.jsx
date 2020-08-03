import React from 'react';
import { useLocation } from "react-router-dom";

import navigation from '../../../data/navigation';
import TopBar from './../../layout/TopBar';

function getTitle(path) {
  const allItems = Object.values(navigation)
    .map(nav => nav.items)
    .flat();

  const match = allItems.find(item => item.link === path);
  return match ? match.title : 'Unknown';
}

const GenericPage = () => {
  const location = useLocation();

  const title = getTitle(location.pathname);
  return (
    <div>
    <TopBar title={title} />
      {title} Page
    </div>
  );
}

export default GenericPage;
