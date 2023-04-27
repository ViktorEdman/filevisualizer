

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
  const nestedList = list.map(item => {
    const splitItem = item.split("/")
    console.log(splitItem)
    return splitItem
  })
  return (
    <>
      <h1>Hello world</h1>
      <ul>
{/*       {nestedList.map(item => {

      })} */}
      </ul>
      
    </>
  )
}

export default App
