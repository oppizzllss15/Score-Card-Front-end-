import React, {useState} from 'react'
import "./component.css"


export const ListWeek = () => {
const [show, setShow] = useState(true)
  return (
      <div>
          <div className="weekbox">
              <p>Week 1</p>
              <p>Week 2</p>
              <p>Week 3</p>
              <p>Week 4</p>
              <p>More</p>
              <p>Week 5</p>
              <p>Week 6</p>
              <p>Week 7</p>
          </div>
    </div>
  )
}
