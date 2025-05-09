import { useState } from 'react';
import Month from './components/Month';

function App() {
  const date = new Date;
  const y = date.getFullYear();
  const m = date.getMonth();

  const [year,setYear] = useState(y);
  const [month,setMonth] = useState(m);

  return (

      <div className='cont'>
        <button onClick={() => setMonth(month - 1)}>◁</button>
        <span>{year} / {month + 1}</span>
        <button onClick={() => setMonth(month + 1)}>▷</button>
  
        <Month year={year} month={month}/>
      </div>
  )
}

export default App
