import React from 'react';
import { useLocation } from "react-router-dom";

import navigation from '../../../data/navigation';

function getTitle(path) {
  const allItems = Object.values(navigation)
    .map(nav => nav.items)
    .flat();

  const match = allItems.find(item => item.link === path);
  const title = match ? match.title : 'Unknown';
  return `${title} Page`;
}

const GenericPage = () => {
  const location = useLocation();

  return (
    <div>
      {getTitle(location.pathname)}
    </div>
  );
}

export default GenericPage;
