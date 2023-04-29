import {getFileTree} from "./utils/getFileTree"
import NestedListTree from "./components/NestedList/NestedListTree";
import alternateList from "./utils/alternateList"


function App() {
    const list = [
        "marvel/black_widow/bw.png",
        "marvel/drdoom/the-doctor.png",
        "marvel/marvel_logo.png",
        "dc/aquaman/mmmmmomoa.png",
        "dc/aquaman/movie-review-collection.txt",
        "dc/character_list.txt",
        "fact_marvel_beats_dc.txt",
        "marvel/black_widow/why-the-widow-is-awesome.txt",
    ];
    const fileTree = getFileTree(list);
    const alternateFileTree = getFileTree(alternateList)

    return (
        <>
            <h1>Hello world</h1>
            <h2>Raw list</h2>
            <pre>{JSON.stringify(list, null, 2)}</pre>
            <h2>VSCode viz</h2>
            <ul>
                <NestedListTree nodes={fileTree}/>
            </ul>
            <h2>Node modules</h2>
            <ul>
                <NestedListTree nodes={alternateFileTree}/>
            </ul>
            <h2>Debug data</h2>
            <pre>{JSON.stringify(alternateFileTree, null, "  ")}</pre>
            <pre>{JSON.stringify(fileTree, null, "  ")}</pre>
        </>
    );
}

export default App;
