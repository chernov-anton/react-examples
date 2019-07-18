import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const Clock = (props) => {
  const [date, setDate] = useState(props.initialDate)


  useEffect(() => {
    const timerID = setInterval(
      () => setDate(new Date()),
      1000
    )

    return () => {
      clearInterval(timerID)
    }
  })

  return (
    <div>
      <h1>
        It is {date.toLocaleTimeString()}.
      </h1>
    </div>
  )
}

ReactDOM.render(
  <Clock initialDate={new Date()}/>,
  document.getElementById('root')
)

