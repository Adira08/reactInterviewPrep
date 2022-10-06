import { useState,useMemo } from 'react';

const UseMemo = () => {
    const[counter1,setCount1] = useState(0);
    const[counter2,setCount2] = useState(0);

    const setIncrement1 = () => {
        setCount1(counter1+1)
    }
    const setIncrement2 = () => {
        setCount2(counter2+1)
    }
    const IsEven = useMemo(() => {
        let i = 0
        while(i<1000)
        i++
        return counter1 % 2 === 0
    },[counter1])
  return (
    <div>
        <h5><b><u>Implementation</u></b></h5>
        <div>
            <button onClick={setIncrement1}>Count1: <b>{counter1}</b></button>
            <span><b>{IsEven ? 'Even' : 'Odd'}</b></span>
        </div>
        <div>
            <button onClick={setIncrement2}>Count2: <b>{counter2}</b></button>
        </div>
    </div>
  )
}

export default UseMemo;