import { useState } from 'react';

import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NavigationBar = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState(0);
  return (
    <Box sx={{ width: '100%', position: 'fixed', bottom: 0 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="SNUDY Space"
          onClick={() => {
            navigate('/');
          }}
        />
        <BottomNavigationAction
          label="Schedule"
          onClick={() => {
            navigate('/schedule');
          }}
        />
        <BottomNavigationAction
          label="To Do"
          onClick={() => {
            navigate('/todo');
          }}
        />
      </BottomNavigation>
    </Box>
  );
};

export default NavigationBar;
