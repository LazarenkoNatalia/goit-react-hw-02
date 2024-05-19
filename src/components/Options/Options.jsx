import stylbtn from "./Options.module.css"

// const createInitialCounter = (key) => {
// 	const localCounter = localStorage.getItem(key)
// 	return localCounter ? JSON.parse(localCounter) : 0
// }


export default function option({ updFeedback, clearObj, total }
) {
 function isGood() {
    const feedBack = "good";
    updFeedback(feedBack);
  }
  function isNeutral() {
    const feedBack = "neutral";
    updFeedback(feedBack);
  }
  function isBad() {
    const feedBack = "bad";
    updFeedback(feedBack);
  }
  function resetObj() {
    clearObj();
  }


    return (
<div className={stylbtn.container}>
            <button className={stylbtn.btncard} value={"good"} onClick={isGood} >Good</button>
            <button className={stylbtn.btncard} value={"neutral"} onClick={isNeutral}>Neutral</button>
            <button className={stylbtn.btncard} value={"bad"} onClick={isBad}>Bad</button>
            {total !== 0 && (<button className={stylbtn.btncardshow} onClick={resetObj} >Reset</button>)}
</div> 

    )
}