import { format } from 'date-fns';

export const now = () => new Date();

export const formatDate = (date: Date | number) => format(date, 'yyyy-MM-dd');
