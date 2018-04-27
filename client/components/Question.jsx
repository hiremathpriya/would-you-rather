import React from 'react'
import {connect} from 'react-redux'

const Question = ({option, numberofclicks, totalnumberofclicks}) => {

  let decimal = numberofclicks / totalnumberofclicks
  let percentage = Math.round(decimal * 100)

  return <div>
    {option}<br/>
    {percentage}%
    </div>
}
  



export default Question

