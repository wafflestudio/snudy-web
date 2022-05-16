import { TimeTableItem } from './TimeTable';

export enum Day {
  SUNDAY = 0,
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
}

export const mockData: TimeTableItem[] = [
  {
    name: '컴퓨터구조',
    color: '#42a5f5',
    time: [
      { day: Day.MONDAY, start_time: 11, duration: 1.5 },
      { day: Day.WEDNESDAY, start_time: 11, duration: 1.5 },
    ],
  },
  {
    name: '공학수학 1',
    color: '#5c6bc0',
    time: [
      { day: Day.TUESDAY, start_time: 11, duration: 1.5 },
      { day: Day.THURSDAY, start_time: 11, duration: 1.5 },
    ],
  },
  {
    name: '대학 글쓰기 2: 과학기술글쓰기',
    color: '#26c6da',
    time: [
      { day: Day.MONDAY, start_time: 12.5, duration: 1.5 },
      { day: Day.WEDNESDAY, start_time: 12.5, duration: 1.5 },
    ],
  },
  {
    name: '물리학',
    color: '#d4e157',
    time: [
      { day: Day.TUESDAY, start_time: 15.5, duration: 1.5 },
      { day: Day.THURSDAY, start_time: 15.5, duration: 1.5 },
    ],
  },
  {
    name: '자료구조',
    color: '#ffa726',
    time: [
      { day: Day.MONDAY, start_time: 17, duration: 1.5 },
      { day: Day.WEDNESDAY, start_time: 17, duration: 1.5 },
      { day: Day.MONDAY, start_time: 18.5, duration: 1.5 },
    ],
  },
  {
    name: '논리설계',
    color: '#ff7043',
    time: [
      { day: Day.TUESDAY, start_time: 17, duration: 1.5 },
      { day: Day.THURSDAY, start_time: 17, duration: 1.5 },
      { day: Day.THURSDAY, start_time: 19, duration: 1.5 },
    ],
  },
];
