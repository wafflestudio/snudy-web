import { ArrowBack } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';

import SubjectInfoTable from './subject-info-table/SubjectInfoTable';

import styles from './SubjectDetail.module.scss';

const dummyData = [
  { label: '강의', value: 31 },
  { label: '시험', value: 2 },
  { label: '과제', value: 2 },
];

const SubjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className={styles.header}>
      <Button variant="outlined" onClick={() => navigate('/')}>
        <ArrowBack />
        {id}
      </Button>
      <SubjectInfoTable data={dummyData} />
    </div>
  );
};

export default SubjectDetail;
