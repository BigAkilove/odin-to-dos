import { formatDistanceToNowStrict } from "date-fns";
import { intervalToDuration } from "date-fns";
export { timeLeft }
import { formatDuration } from "date-fns";


const distanceBetweenDates = (dueDate) => intervalToDuration ({
    start: new Date(),
    end: dueDate
  });
  //=> { years: 39, months: 2, days: 20, hours: 7, minutes: 5, seconds: 0 }

let timeLeft = (dueDate) => formatDuration(distanceBetweenDates(dueDate),{ format: ['years','months', 'days'] })


const distanceYear = (dueDate) => formatDistanceToNowStrict(dueDate, {
    unit: 'year',
    roundingMethod: 'floor'
})

const distanceMonth = (dueDate) => formatDistanceToNowStrict(dueDate, {
    unit: 'month',
    roundingMethod: 'floor'
})

const distanceDay = (dueDate) => formatDistanceToNowStrict(dueDate, {
    unit: 'day',
    roundingMethod: 'floor'
})