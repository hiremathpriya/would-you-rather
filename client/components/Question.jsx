import React from 'react'
import {connect} from 'react-redux'

const Question = ({option, numberofclicks, totalnumberofclicks, isShowingPercentage}) => {
  let classes = (isShowingPercentage ? 'showing' : 'hidden')
  let decimal = numberofclicks / totalnumberofclicks
  let percentage = Math.round(decimal * 100)

  return <div>
    {option}<br/>
      <div className={classes}>{percentage}%</div>
    </div>
}
  

// isShowingPercentage = true or false. if true then render percentage

export default Question

