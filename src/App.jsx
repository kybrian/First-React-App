import { useState } from "react"

const Card = ({title}) => {
  const [hasLiked, setHasLiked] = useState(initialState, false);
  return (
    <div className="card">
      <h2>{title}</h2>
    </div>
  )
}

const App = () => {
  return (
    <div className="card-container">
      <Card title="Alita Battle Angel" rating={5} isCool={true} />
      <Card title="Moana"/>
      <Card title="Fast and Furious"/>
    </div>
  )
}

export default App