import { getFileTree } from './utils/getFileTree'
import NestedList from './components/NestedList/NestedList'
import FileBrowser from './components/FileBrowser/FileGrid'
import { useState } from 'react'

function App() {
    const list = [
        'marvel/black_widow/bw.png',
        'marvel/drdoom/the-doctor.png',
        'marvel/marvel_logo.png',
        'dc/aquaman/mmmmmomoa.png',
        'dc/aquaman/movie-review-collection.txt',
        'dc/character_list.txt',
        'fact_marvel_beats_dc.txt',
        'marvel/black_widow/why-the-widow-is-awesome.txt',
    ]
    const fileTree = getFileTree(list)
    const visualizations = {
        'nested-list': (
            <>
                <h2>Nested List</h2>
                <NestedList nodes={fileTree} />
            </>
        ),
        'file-browser': <FileBrowser nodes={fileTree} />,
    }

    const [selection, setSelection] = useState('nested-list')
    // @ts-expect-error
    const selectedElement: JSX.Element = visualizations[selection]
    return (
        <>
            <h1>File tree visualizer</h1>
            <div id="visOptions">
                <div>
                    <input
                        type="radio"
                        id="nested-list"
                        value={selection}
                        checked={selection === 'nested-list'}
                        onChange={() => setSelection('nested-list')}
                    />
                    <label htmlFor="nested-list"> Nested list </label>
                </div>
                <div>
                    <input
                        type="radio"
                        id="file-browser"
                        value={selection}
                        checked={selection === 'file-browser'}
                        onChange={() => setSelection('file-browser')}
                    />
                    <label htmlFor="file-browser"> File browser </label>
                </div>
            </div>
            {selectedElement}
        </>
    )
}

export default App
