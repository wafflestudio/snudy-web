import { ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import dayjs from 'dayjs';

import { Schedule } from '../ScheduleBar';

import styles from './ScheduleItem.module.scss';

interface Props {
  schedule: Schedule;
}

const ScheduleItem = ({ schedule }: Props) => {
  return (
    <ListItem className={styles.item}>
      <ListItemAvatar className={styles.avatar}>
        <h3>{schedule.title}</h3>
      </ListItemAvatar>
      <ListItemText
        className={styles.text}
        primary={schedule.content}
        secondary={dayjs(schedule.due).format('~M/DD')}
      />
    </ListItem>
  );
};

export default ScheduleItem;
