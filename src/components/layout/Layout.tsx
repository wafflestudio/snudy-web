import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

import NavigationBar from './NavigationBar';
import StatusBar from './StatusBar';

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
