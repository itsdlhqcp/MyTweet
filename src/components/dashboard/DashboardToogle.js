import React, { useCallback } from 'react';
import { Button, Drawer } from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import { useMediaQuery, useModalState } from '../../misc/custom-hooks';
import Dashboard from '.';

const DashboardToggle = () => {
  const { isOpen,close,open} = useModalState();
  const isMobile = useMediaQuery('(max-width: 992px)');

  // create a signOut function then pass it to the index.js component

  // const onSignOut = useCallback(() => {

  //   auth .signOut()

  //   Alert.info('Signed out', 4000);

  //   close();
  // },[close])

  return (
    <>
      <Button onClick={open} block style={{ backgroundColor: '#1DA1F2', color: 'white' }}>
        <DashboardIcon  style={{ marginRight: '8px' }} /> Dashboard 
      </Button>
      <Drawer size={isMobile ? 'full' : 'sm'} open={isOpen} onClose={close} placement="left" >
        <Dashboard />
      </Drawer>
    </>
  
  );
};

export default DashboardToggle;


