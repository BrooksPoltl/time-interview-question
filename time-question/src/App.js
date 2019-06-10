import React, {useState} from 'react'

const App = () =>{
    const [times, setTimes] = useState([]);

    return (
        <div>
            <ul>
                {times.map((time, index)=>{
                    return <div key = {time} style = {divStyle}>
                            <li>{time}</li>
                            <a onClick ={()=>{
                                times.splice(index,1)
                                setTimes([...times])
                            }}>delete</a>
                        </div>
                })}
            </ul>
            <button onClick = {()=> setTimes([...times, Date()])}>Click me</button>
        </div>

    )
}
const divStyle = {
    display: 'flex',
    flexDirection: 'row'
}
export default App