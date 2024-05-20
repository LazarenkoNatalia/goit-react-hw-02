 import { useState , useEffect} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
//  import './App.css'
import Description from './components/Description/Description.jsx'
import Options from './components/Options/Options.jsx'
import Notification from './components/Notification/Notification.jsx'
import Feedback from './components/Feedback/Feedback.jsx'
  
function App() {

  
  const [feedOpt, setFeedOpt] = useState(() => {
  const savedFeedOpt = localStorage.getItem("saved-feedopt");

  return savedFeedOpt!== null ? JSON.parse(savedFeedOpt) :
    {
      good: 0,
      neutral: 0,
      bad: 0,
    };
});

  useEffect(() => {
    localStorage.setItem("saved-feedopt", JSON.stringify(feedOpt));
  }, [feedOpt]);

  const totalFeedback = feedOpt.good + feedOpt.neutral + feedOpt.bad;
  const PositiveFeedback = (totalFeedback!==0) ?  Math.round((feedOpt.good / totalFeedback) * 100): 0;

  function updateFeedback(feedbackType) {
    switch (feedbackType) {
      case "good":
        setFeedOpt({
          ...feedOpt,
          good: feedOpt.good + 1,
        });
        break;

      case "neutral":
        setFeedOpt({
          ...feedOpt,
          neutral: feedOpt.neutral + 1,
        });
        break;

      case "bad":
        setFeedOpt({
          ...feedOpt,
          bad: feedOpt.bad + 1,
        });
        break;
    }
  }

  function resetState() {
   setFeedOpt({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  }

  return (
    <>
    <div>
        <Description />
        <Options
        updFeedback={updateFeedback}
        clearObj={resetState}
        total={totalFeedback}
      />
{totalFeedback === 0 && <Notification />}
        {totalFeedback !== 0 && <Feedback
          feedObj={feedOpt}
          total={totalFeedback}
          plusFeedback={PositiveFeedback}
        /> }      
    </div>
  </> 
  )
}



 export default App
