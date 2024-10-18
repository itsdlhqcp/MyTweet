import React from 'react';
import { Button, Drawer } from 'rsuite';
import ProfileAvatar from '../ProfileAvatar';

const Dashboard = () => {
  return (
    <>
      <Drawer.Header>
        <Drawer.Title>Dashboard</Drawer.Title>
      </Drawer.Header>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <ProfileAvatar src={ProfileAvatar} style={{ width: '150px', height: '150px' }}/>
      </div>

      <Drawer.Body>
        <Drawer.Footer>
          <Button block style={{ backgroundColor: 'red', color: 'white' }}>
            Sign Out
          </Button>
        </Drawer.Footer>
      </Drawer.Body>
    </>
  );
};

export default Dashboard;
