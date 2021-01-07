import React, { useState } from 'react';
import Nav from 'common/Nav';
import Main from 'modules/main';
import { Root } from '@vkontakte/vkui';
import routes from './routes';

export default function Router(): React.ReactElement {
  const [viewId, setViewId] = useState<string>(routes.active);

  const handleChangeView = (id: string): void => {
    setViewId(id);
  };

  return (
    <Root activeView={viewId}>
      <Main />
      <Nav changeView={handleChangeView} viewId={viewId} />
    </Root>
  );
}
