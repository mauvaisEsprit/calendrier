import '../styles/Day.css';
const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
function Day({ date, month }) {
    const current = month === date.getMonth();
    const today = new Date().toDateString() === date.toDateString();

    return (
        <div className={'day ' + (today ? 'today ' : '' )
        + (current ? 'current' : '')
        }>
            <span>{weekdays[date.getDay()]}</span> 
            &nbsp;
            <span>{date.getDate()}</span>
        </div>
    );
}

export default Day;