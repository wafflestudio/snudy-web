import { useNavigate } from 'react-router-dom';

import { Subject } from '../SnudySpace';

import styles from './SubjectItem.module.scss';

interface Props {
  subject: Subject;
}
const SubjectItem = ({ subject }: Props) => {
  const navigate = useNavigate();
  return (
    <div
      className={styles.box}
      onClick={() => {
        navigate(`/snudyspace/${subject.id}`);
      }}
    >
      <span className={styles.name}>{subject.name}</span>
      <span className={styles.taskNum}>남은 과제 : {subject.taskNum}</span>
    </div>
  );
};

export default SubjectItem;
