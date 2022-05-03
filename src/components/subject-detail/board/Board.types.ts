export interface Post {
  id: number;
  title: string;
  content: string;
  thumbnail: string;
  writer: string | 'anonymous';
  created_at: string;
  views: number;
}
