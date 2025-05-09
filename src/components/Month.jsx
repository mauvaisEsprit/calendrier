import "../styles/Month.css";
import Day from "./Day";

function getDates(year, month) {
  const dates = [];
  const firstDate = new Date(year, month);
  const firstDateWeekday = firstDate.getDay();
  const shift = (firstDateWeekday ? firstDateWeekday - 1 : 6) || 7;
  const start = firstDate.getDate() - shift;

  for (let i = 0; i < 42; i++) {
    const date = new Date(year, month, start + i);

    dates.push(date);
  }

  return dates;
}

function Month({ year, month }) {
  const dates = getDates(year, month);

  return (
    <div className="month">
      {dates.map((date) => (
        <Day key={date.getTime()} date={date} month={month} />
      ))}
    </div>
  );
}

export default Month;