export type Notification = {
  id: number;
  title: string;
  description: string;
  time: string;
  icon: React.ComponentType<any>;
  isMarked: boolean;
};
