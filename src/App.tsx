import { getFileTree } from './utils/getFileTree'
import NestedList from './components/NestedList/NestedList'
import FileBrowser from './components/FileBrowser/FileBrowser'
import { useState, useEffect } from 'react'

function App() {
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

    const [showData, setShowData] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/api')
            const data = await res.json()
            setList(data)
        }
        fetchData().catch(() => {
            console.log("Couldn't retrieve data")
        })
    }, [])
    const fileTree = getFileTree(list)
    console.log(fileTree)
    const visualizations = {
        'nested-list': (
            <div>
                <h2>Nested List</h2>
                <NestedList node={fileTree} />
            </div>
        ),
        'file-browser': <FileBrowser node={fileTree} />,
    }

    const [selection, setSelection] = useState('nested-list')
    // @ts-expect-error
    const selectedElement: JSX.Element = visualizations[selection]
    return (
        <>
            <h1>File tree visualizer</h1>
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
            <div className='visualization-container'>
                {selectedElement}
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
