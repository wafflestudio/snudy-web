import { Table, TableContainer, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

import styles from './SubjectInfoTable.module.scss';

interface Props {
  data: { label: string; value: number }[];
}

const SubjectInfoTable = ({ data }: Props) => {
  return (
    <article className={styles.tableContainer}>
      <TableContainer>
        <Table size="small">
          <TableBody>
            <TableRow>
              {data.map((item, i) => (
                <TableCell className={styles.bodyCell} align="center" key={i}>
                  {item.value}
                </TableCell>
              ))}
            </TableRow>
          </TableBody>
          <TableHead>
            <TableRow>
              {data.map((item, i) => (
                <TableCell className={styles.headCell} align="center" key={i}>
                  {item.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
    </article>
  );
};

export default SubjectInfoTable;
