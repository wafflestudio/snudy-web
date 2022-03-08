import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

import NavigationBar from './navigationbar/NavigationBar';
import StatusBar from './statusbar/StatusBar';

const Layout = () => {
  return (
    <Box>
      <StatusBar />

      <main>
        <Outlet />
      </main>
      <NavigationBar />
    </Box>
  );
};

export default Layout;
