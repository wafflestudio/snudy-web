import { ArrowBack } from '@mui/icons-material';
import { Button, Tab, Tabs } from '@mui/material';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';

import Board from './board/Board';
import Reference from './reference/Reference';
import ScheduleBar from './schedule-bar/ScheduleBar';
import SubjectInfoTable from './subject-info-table/SubjectInfoTable';

import styles from './SubjectDetail.module.scss';

const dummyData = [
  { label: '강의', value: 31 },
  { label: '시험', value: 2 },
  { label: '과제', value: 2 },
];

const SubjectDetail = () => {
  const { id } = useParams();
  const [params, setParams] = useSearchParams();
  const navigate = useNavigate();

  const tab = Number(params.get('tab') ?? 0);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Button variant="outlined" onClick={() => navigate('/')}>
          <ArrowBack />
          {id}
        </Button>
        <SubjectInfoTable data={dummyData} />
      </div>
      <div className={styles.tabWrapper}>
        <Tabs
          value={tab}
          onChange={(_, v) => {
            params.set('tab', v);
            setParams(params);
          }}
          className={styles.tabs}
        >
          <Tab label="게시판" />
          <Tab label="자료실" />
        </Tabs>
        {tab === 0 ? <Board /> : <Reference />}
      </div>
      <ScheduleBar className={styles.scheduleBar} />
    </div>
  );
};

export default SubjectDetail;
