import { getFileTree } from './utils/getFileTree'
import NestedList from './components/NestedList/NestedList'
import FileBrowser from './components/FileBrowser/FileBrowser'
import { useState, useEffect } from 'react'

function App() {
    // Set initial state to be the sample data from the assignment, also acts as mock data for dev
    const [list, setList] = useState([
        'marvel/black_widow/bw.png',
        'marvel/drdoom/the-doctor.png',
        'marvel/marvel_logo.png',
        'dc/aquaman/mmmmmomoa.png',
        'dc/aquaman/movie-review-collection.txt',
        'dc/character_list.txt',
        'fact_marvel_beats_dc.txt',
        'marvel/black_widow/why-the-widow-is-awesome.txt',
    ])
    // State variable decides whether source data is rendered or not
    const [showData, setShowData] = useState(false)
    // On app component mount, fetch data from api, if deployed with docker-compose
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/api')
            const data = await res.json()
            setList(data)
        }
        // On failure to fetch, state is unchanged
        fetchData().catch(() => {
            console.log("Couldn't retrieve data")
        })
        // Dependency array is empty, useEffect is never retriggered except on component remount (which shouldn't happen)
    }, [])
    // call to function which converts file list to a tree of nodes, see utils/getFileTree and types/Tree.d.ts
    const fileTree = getFileTree(list)
    // Object with JSX for conditional rendering of either visualization
    const visualizations = {
        'nested-list': (
            <div>
                <h2>Nested List</h2>
                <NestedList node={fileTree} />
            </div>
        ),
        'file-browser': <FileBrowser node={fileTree} />,
    }
    // State variable for current visualization selection
    const [selection, setSelection] = useState('nested-list')
    // @ts-expect-error
    // Receiving a type error that visualizations cannot be indexed by string
    // I don't understand why.
    const selectedElement = visualizations[selection]
    return (
        <>
            <h1>File tree visualizer</h1>
            {/* Input group for visualization selection and showing input data or not */}
            <div id='visOptions'>
                <div>
                    <input
                        type='radio'
                        id='nested-list'
                        value={selection}
                        checked={selection === 'nested-list'}
                        onChange={() => setSelection('nested-list')}
                    />
                    <label htmlFor='nested-list'> Nested list </label>
                </div>
                <div>
                    <input
                        type='radio'
                        id='file-browser'
                        value={selection}
                        checked={selection === 'file-browser'}
                        onChange={() => setSelection('file-browser')}
                    />
                    <label htmlFor='file-browser'> File browser </label>
                </div>
                <div>
                    <input
                        type='checkbox'
                        id='showData'
                        value='showData'
                        checked={showData}
                        onChange={(e) => {
                            setShowData(e.target.checked)
                        }}
                    />
                    <label htmlFor='showData'>Show source data</label>
                </div>
            </div>
            {/* Show visualization based on selected element radio input above */}
            <div className='visualization-container'>
                {selectedElement}
                {/* Show input data based on show data checkbox input above */}
                {showData ? (
                    <div className='data-container'>
                        <h2>Source data:</h2>
                        <pre>{JSON.stringify(list, null, '  ')}</pre>
                    </div>
                ) : null}
            </div>
        </>
    )
}

export default App
