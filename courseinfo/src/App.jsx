// Components
const Header = (props) => {
  console.log('Header component', props)

  const course = props.course

  return <h1>{course.name}</h1>
}

const Part = (props) => {
  console.log('Part component', props)

  return <p>{props.part.name} has {props.part.exercises} exercises</p>
}

const Content = (props) => {
  console.log('Content component', props)

  const courseParts = props.course.parts

  return (
    <>
      <Part part={courseParts[0]} />
      <Part part={courseParts[1]} />
      <Part part={courseParts[2]} />
    </>
  )
}

const Total = (props) => {
  console.log('Total component', props)

  const courseParts = props.course.parts

  return (
    <p>
      Total exercises {
        courseParts[0].exercises + courseParts[1].exercises + courseParts[2].exercises
      }
    </p>
  )
}


// Main Component
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App