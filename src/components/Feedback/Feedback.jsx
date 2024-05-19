import stylFeedback from './Feedback.module.css'

function Feedback({ feedObj, total, plusFeedback }) {
    return (
      <>
      <p className={stylFeedback.text}>Good : {feedObj.good}</p>
      <p className={stylFeedback.text}>Neutral {feedObj.neutral}</p>
      <p className={stylFeedback.text}>Bad {feedObj.bad}</p>
      <p className={stylFeedback.text}>Total {total}</p>
      <p className={stylFeedback.text}> Positive :  {plusFeedback}%</p> 
 </> )
}

export default Feedback