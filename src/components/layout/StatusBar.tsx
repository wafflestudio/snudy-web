import { Box } from '@mui/material';

const StatusBar = () => {
  return (
    <Box
      sx={{
        width: '100 %',
        height: '40px',
        backgroundColor: 'gray',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'middle ',
      }}
    >
      <span>시간 / 남은 과제</span>
    </Box>
  );
};

export default StatusBar;
