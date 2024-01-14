import { useState, useEffect } from "react"


function AnecdoteDisplay({ selectedAnecdote, votes }) {

  return (
    <p>{selectedAnecdote} <br />has {votes} votes</p>
  )
}

function Button({ handlerClick, text }) {
  return <button onClick={handlerClick}>{text}</button>
}

function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  const [mostVoted, setMostVoted] = useState(0)

  const getRandomInt = (max) => Math.floor(Math.random() * max)

  const nextAnecdote = () => {
    const randomIndex = getRandomInt(anecdotes.length)
    setSelected(randomIndex)
    console.log("randomIndex", randomIndex)
    console.log("Selected before:", selected)
  }


  const getMostVoted = () => {
    const copyVotes = [...votes]
    const sortedVotes = copyVotes.sort((a, b) => b - a)
    setMostVoted(votes.indexOf(sortedVotes[0]))
  }

  const voteForAnecdote = () => {
    let copyVotes = [...votes]
    copyVotes[selected] += 1
    setVotes(copyVotes)
  }
  console.log("Votes", votes)

  useEffect(getMostVoted)
  useEffect(() => console.log("Selected after:", selected))

  return (
    <>
      <h1>Anecdote of the day</h1>
      <AnecdoteDisplay selectedAnecdote={anecdotes[selected]} votes={votes[selected]} />

      <Button handlerClick={nextAnecdote} text="Next anecdote" />
      <Button handlerClick={voteForAnecdote} text="Vote" />

      <h2>Anecdote with most votes</h2>
      <AnecdoteDisplay selectedAnecdote={anecdotes[mostVoted]} votes={votes[mostVoted]} />
    </>
  )
}

export default App
