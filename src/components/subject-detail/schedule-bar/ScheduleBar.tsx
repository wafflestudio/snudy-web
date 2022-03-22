import { CalendarToday, AddOutlined } from '@mui/icons-material';
import { List, ListItem, ListItemButton, ListSubheader } from '@mui/material';
import classNames from 'classnames';

import ScheduleItem from './schedule-item/ScheduleItem';

import styles from './ScheduleBar.module.scss';

export interface Schedule {
  id: string;
  title: string;
  content: string;
  due: string;
}

interface Props {
  className?: string;
}

const dummySchedules: Schedule[] = [
  { id: '1', title: '제목1', content: '내용1', due: new Date().toISOString() },
  { id: '2', title: '제목2', content: '내용2', due: new Date().toISOString() },
  { id: '3', title: '제목3', content: '내용3', due: new Date().toISOString() },
];

const ScheduleBar = ({ className }: Props) => {
  return (
    <div className={classNames(className, styles.wrapper)}>
      <List
        subheader={
          <ListSubheader>
            <h3 className={styles.subHeader}>
              <CalendarToday /> 일정 등록
            </h3>
          </ListSubheader>
        }
      >
        {dummySchedules.map((schedule) => (
          <ScheduleItem schedule={schedule} key={schedule.id} />
        ))}
        <ListItem>
          <ListItemButton className={styles.addButton}>
            <AddOutlined />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );
};

export default ScheduleBar;
