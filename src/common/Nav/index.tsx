import React from 'react';

interface INav {
  changeView: (id: string) => any;
  viewId: string;
}

export default function Nav({ changeView, viewId }: INav) {
  return <div onClick={() => changeView('main')}>Main</div>;
}
