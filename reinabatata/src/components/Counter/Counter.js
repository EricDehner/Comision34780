import "./Counter.css"
import {useState} from "react"

const Counter = ({maxStock} ) => {
    const [counter, setCounter] = useState(0)

const subtract = () => {
    if (counter > 0) {
        setCounter(counter - 1)
    }
}
const add = () => {
    if (counter < maxStock ){
        setCounter(counter + 1)
    }
}
console.log(maxStock);


    return (
        <div className="counterBtn" >
            <button className="counter-subtract" onClick={subtract}>-</button>
            <p className="counter-numb" >{counter}</p>
            <button className="counter-add" onClick={add}>+</button>
        </div>
    )
}

export default Counter