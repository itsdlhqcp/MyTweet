// import React from 'react'
// import DashboardToogle from './dashboard/DashboardToogle'

// const Sidebar = () => {
//   return (
//    <div className='h-100 pt-2'>
//       <div>
//         <DashboardToogle />
//       </div>
//       bottom
//    </div>
//   )
// }

// export default Sidebar

import React from 'react';
import DashboardToogle from './dashboard/DashboardToogle';
import CreateRoomBtnModal from './dashboard/CreateRoomBtnModal';

const Sidebar = () => {
  return (
    <div className="h-100 pt-3"> 
      <div>
        <DashboardToogle />
        <CreateRoomBtnModal/>
      </div>
      <div>
        bottom
      </div>
    </div>
  );
};

export default Sidebar;
