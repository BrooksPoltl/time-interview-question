import React, {useState} from 'react'

const App = () =>{
    const [board, setBoard] = useState([
        ['','',''],
        ['','',''],
        ['','','']
])
    const [turn,setTurn] = useState('X')
    const handleItem = (cords)=>{
        let first = cords[0]
        let second = cords[1]
        let current = board[first][second]
        if(turn === 'X' && !board[first][second]){
            board[first][second] = 'X'
            setTurn('O')
            
        }else if(!board[first][second]){
            board[first][second] = 'O'
            setTurn('X')
        }

        setBoard([...board])
    }
    return (
        <div style = {{marginTop: 200}}>
            <div style = {innerDiv}>
                <p onClick = {()=>handleItem([0,0])}style = {item} >{board[0][0]}</p>
                <p onClick = {()=>handleItem([0,1])} style = {middleItem}>{board[0][1]}</p>
                <p onClick = {()=>handleItem([0,2])} style = {item}>{board[0][2]}</p>
            </div>
            <div style = {middleDiv}>
                <p onClick = {()=>handleItem([1,0])} style = {item}>{board[1][0]}</p>
                <p onClick = {()=>handleItem([1,1])} style = {middleItem}>{board[1][1]}</p>
                <p onClick = {()=>handleItem([1,2])} style = {item}>{board[1][2]}</p>
            </div>
                
            <div style = {innerDiv}>
                <p onClick = {()=>handleItem([2,0])} style = {item}>{board[2][0]}</p>
                <p onClick = {()=>handleItem([2,1])}style = {middleItem}>{board[2][1]}</p>
                <p onClick = {()=>handleItem([2,2])}style = {item}>{board[2][2]}</p>
            </div>

            <button onClick = {()=>setBoard([['','',''],['','',''],['','','']])}>reset</button>
        </div>
        
    )
}

const innerDiv = {
    display:'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 300,
}
const middleDiv = {
    display:'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottom: '3px solid black',
    borderTop: '3px solid black',
    width: 300,
}
const item = {
    width: '33%',
    padding: 0,
    margin: 0,
    height: 50,
    fontSize: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}
const middleItem = {
    borderLeft: '3px solid black',
    borderRight: '3px solid black',
    width: '33%',
    padding: 0,
    margin: 0,
    height: 50,
    fontSize: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

export default App

/*
  |  | 
=========
  |  |
=========
  |  |

*/