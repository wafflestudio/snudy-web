import { Card, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { Subject } from '../SnudySpace';

import styles from './SubjectItem.module.scss';

interface Props {
  subject: Subject;
}
const SubjectItem = ({ subject }: Props) => {
  const navigate = useNavigate();
  return (
    <Card
      className={styles.box}
      variant="outlined"
      onClick={() => {
        navigate(`/space/${subject.id}`);
      }}
    >
      <Typography className={styles.name}>{subject.name}</Typography>
      <Typography className={styles.taskNum}>남은 과제 : {subject.taskNum}</Typography>
    </Card>
  );
};

export default SubjectItem;
