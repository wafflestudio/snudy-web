import { useState } from 'react';

import { CalendarToday, FormatListNumbered, BorderColor } from '@mui/icons-material';
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import styles from '../../styles/NavigationBar.module.scss';

const NavigationBar = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState(0);
  return (
    <Box className={styles.wrapper}>
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
          icon={<BorderColor />}
        />
        <BottomNavigationAction
          label="Schedule"
          onClick={() => {
            navigate('/schedule');
          }}
          icon={<CalendarToday />}
        />
        <BottomNavigationAction
          label="To Do"
          onClick={() => {
            navigate('/todo');
          }}
          icon={<FormatListNumbered />}
        />
      </BottomNavigation>
    </Box>
  );
};

export default NavigationBar;
