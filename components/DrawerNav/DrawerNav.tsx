import React from 'react';
import { Drawer } from './style';

const DrawerNav = ({ onClick }: { onClick: () => void }) => (
  <Drawer onClick={() => onClick()}>
    Toggle Button
  </Drawer>
);

export default DrawerNav;
