import { ListItem, ListItemAvatar, ListItemText } from '@mui/material';

import { Notification } from '../NotificationBar';

import styles from './NotificationItem.module.scss';

interface Props {
  notification: Notification;
}
const NotificationItem = ({ notification }: Props) => {
  return (
    <ListItem className={styles.item}>
      <ListItemAvatar className={styles.avatar}>
        <h3>{notification.title}</h3>
      </ListItemAvatar>
      <ListItemText className={styles.text} primary={notification.title} />
    </ListItem>
  );
};

export default NotificationItem;
