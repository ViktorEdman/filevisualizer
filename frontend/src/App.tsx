

function App() {
  const list = [
    "marvel/black_widow/bw.png",
    "marvel/drdoom/the-doctor.png",
    "fact_marvel_beats_dc.txt",
    "dc/aquaman/mmmmmomoa.png",
    "marvel/black_widow/why-the-widow-is-awesome.txt",
    "dc/aquaman/movie-review-collection.txt",
    "marvel/marvel_logo.png",
    "dc/character_list.txt"
  ]
  return (
    <>
      <h1>Hello world</h1>
      <ul>
        {list.map(item => <li>{item}</li>)}
      </ul>
      
    </>
  )
}

export default App
