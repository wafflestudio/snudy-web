import { Select, MenuItem } from '@mui/material';

import NotificationBar from './notificatioin-bar/NotificationBar';
import SubjectItem from './subject-item/SubjectItem';

import styles from './SnudySpace.module.scss';

const dummySemester = [
  { label: '2022년 1학기', value: 0 },
  { label: '2021년 2학기', value: 1 },
  { label: '2021년 1학기', value: 2 },
];

const dummySubjects = [
  {
    id: '1',
    name: '논리 설계',
    taskNum: 1,
  },
  {
    id: '2',
    name: '컴퓨터 프로그래밍',
    taskNum: 3,
  },
  {
    id: '3',
    name: '통계학',
    taskNum: 2,
  },
  {
    id: '4',
    name: '자료구조',
    taskNum: 0,
  },
  {
    id: '5',
    name: '체력단련',
    taskNum: 0,
  },
];

export interface Subject {
  id: string;
  name: string;
  taskNum: number;
}

const SnudySpace = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Select defaultValue={0}>
          {dummySemester.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </div>
      <div className={styles.subjectWrapper}>
        {dummySubjects.map((subject) => (
          <SubjectItem key={subject.id} subject={subject} />
        ))}
      </div>
      <NotificationBar className={styles.notificationBar} />
    </div>
  );
};

export default SnudySpace;
