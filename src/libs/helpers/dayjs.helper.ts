import dayjs from 'dayjs';

import utc from 'dayjs/plugin/utc';
import dayOfYear from 'dayjs/plugin/dayOfYear';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(dayOfYear);
dayjs.extend(weekOfYear);
dayjs.extend(timezone);

export default dayjs;
