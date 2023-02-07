import React from 'react'

const Option = ({questionsArray,handleAnswer}) => {
  return (
    <div>
      {questionsArray?.map((items, i) => {
              return (
                <div key={i}>
                  <button onClick={() => handleAnswer(items.isCorrect)}>
                    {items.answer}
                  </button>
                  <br />
                </div>
              );
            })
          }
    </div>
  )
}

export default Option
