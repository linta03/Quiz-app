import React, { useCallback, useState } from "react";
import Message from "./components/Message";
import NextQuestionButton from "./components/NextQuestionButton";
import Option from "./components/Option";
import Question from "./components/Question";
import Restart from "./components/Restart";
import Score from "./components/Score";
import { DATA } from "./config";

const App = () => {
  const [scoreScreen, setscoreScreen] = useState(false);
  const [states, setstates] = useState({
    index: 0,
    score: 0,
    msg: "",
  });

  const nextQuestion = useCallback(() => {
    const { index } = states;
    if (index === DATA.length - 1) {
      setscoreScreen(true);
    } else {
      setstates((prev) => ({
        ...prev,
        index: prev.index + 1,
      }));
    }
  }, [states.index]);

  const restart = useCallback(() => {
    setstates((prev) => ({
      ...prev,
      index: 0,
      score: 0,
      msg: "",
    }));
    setscoreScreen(false);
  }, []);

  const handleAnswer = useCallback((isCorrect) => {
    if (isCorrect) {
      setstates((prev) => ({
        index: prev.index + 1,
        score: prev.score + 1,
        msg: "",
      }));
    } else {
      setstates((prev) => ({
        ...prev,
        msg: "Your Answer is Wrong😟",
      }));
    }
  }, []);
   
  
  return (
    <>
      {scoreScreen ? (
        <>
          <Score score={states.score} question={states.index} />
           <Restart restart={restart}/>
        </>
      ) : (
        <div>
          <div>
            
            <Question question={DATA[states.index]?.question}/>
            <h4>Qno : {states.index + 1}</h4>
            <Option questionsArray={DATA[states.index]?.options}   handleAnswer={handleAnswer}/>
          <Message msg={states.msg}/>
           <NextQuestionButton nextQuestion={nextQuestion}/>

           
          </div>
        </div>
      )}
    </>
  );
};

export default App;
