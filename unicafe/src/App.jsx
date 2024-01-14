import { useState } from "react"

const Button = ({ handlerClick, text }) => {
  console.log("Rendering Button component | text:", text)
  return <button onClick={handlerClick}>{text}</button>
}

const StatisticsLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({ allOpinions }) => {
  console.log("Rendering Statistics component | allOpinions:", allOpinions)
  const numberOfOpinions = Object.values(allOpinions).reduce(
    (acc, value) => acc + value, 0
  )

  let average = 0
  let positive = 0

  if (numberOfOpinions > 0) {
    average = (allOpinions["good"] / numberOfOpinions) - (allOpinions["bad"] / numberOfOpinions)
    positive = ((allOpinions["good"] / numberOfOpinions) * 100).toString().concat('%')

    return (
      <>
        <table>
          <tbody>
            <StatisticsLine text="Good" value={allOpinions["good"]} />
            <StatisticsLine text="Neutral" value={allOpinions["neutral"]} />
            <StatisticsLine text="Bad" value={allOpinions["bad"]} />
            <StatisticsLine text="All" value={numberOfOpinions} />
            <StatisticsLine text="Average" value={average} />
            <StatisticsLine text="Positive" value={positive} />
          </tbody>
        </table>
      </>
    )
  }

  return <p>No feedback given</p>
}

function App() {
  console.log("Rendering App component")
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const opinionsObject = {
    "good": good,
    "neutral": neutral,
    "bad": bad
  }
  const [allOpinions, setAllOpinions] = useState(opinionsObject)

  const addGoodOpinion = () => {
    const updatedGoodValue = good + 1
    setGood(updatedGoodValue)
    setAllOpinions({ ...allOpinions, good: updatedGoodValue })

    console.log(
      "%cButton: ", "color: #800080", "Added a good opinion | value=",
      updatedGoodValue
    )
  }

  const addNeutralOpinion = () => {
    const updatedNeutralValue = neutral + 1
    setNeutral(updatedNeutralValue)
    setAllOpinions({ ...allOpinions, neutral: updatedNeutralValue })

    console.log(
      "%cButton: ", "color: #800080", "Added a neutral opinion | value=",
      updatedNeutralValue
    )
  }

  const addBadOpinion = () => {
    const updatedBadValue = bad + 1
    setBad(updatedBadValue)
    setAllOpinions({ ...allOpinions, bad: updatedBadValue })

    console.log(
      "%cButton: ", "color: #800080", "Added a bad opinion | value=",
      updatedBadValue
    )
  }

  return (
    <>
      <h1>Give feedback</h1>

      <Button handlerClick={addGoodOpinion} text="Good"></Button>
      <Button handlerClick={addNeutralOpinion} text="Neutral"></Button>
      <Button handlerClick={addBadOpinion} text="Bad"></Button>

      <h2>Statistics</h2>

      <Statistics allOpinions={allOpinions} />
    </>
  )
}

export default App
