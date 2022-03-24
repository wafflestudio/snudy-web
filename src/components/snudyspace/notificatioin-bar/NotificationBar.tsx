import NotificationsIcon from '@mui/icons-material/Notifications';
import { List, ListSubheader } from '@mui/material';
import classNames from 'classnames';

import NotificationItem from './NotificationItem/NotificationItem';

import styles from './NotificationBar.module.scss';

interface Props {
  className?: string;
}

export interface Notification {
  id: string;
  title: string;
  content: string;
}

const dummyNotifications: Notification[] = [
  { id: '1', title: '제목', content: '내용' },
  { id: '2', title: '제목', content: '내용' },
];
const NotificationBar = ({ className }: Props) => {
  return (
    <div className={classNames(className, styles.wrapper)}>
      <List
        subheader={
          <ListSubheader className={styles.item}>
            <h3 className={styles.subHeader}>
              <NotificationsIcon />
              알림
            </h3>
          </ListSubheader>
        }
      >
        {dummyNotifications.map((notification) => (
          <NotificationItem notification={notification} key={notification.id} />
        ))}
      </List>
    </div>
  );
};

export default NotificationBar;
