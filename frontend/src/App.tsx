type directory = {
    name: string;
    parent?: string;
    children: directory[];
};

function getFolderTree(fileList: string[]): directory {
    const root: directory = {
        name: "/",
        children: [],
    };

    for (let i = 0; i < fileList.length; i++) {
      const pathLevels = fileList[i].split('/')
      const child = {
        name: pathLevels[0],
        children: []
      }
      for (let i = 0; i < pathLevels.length; i++) {
        const element = pathLevels[i];
        
      }
      root.children.push(child)
    }

    return root;
}

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
    const fileTree = getFolderTree(list);

    return (
        <>
            <h1>Hello world</h1>
            <h2>Raw list</h2>
            <pre>{JSON.stringify(list, null, 2)}</pre>
            <h2>Parsed tree</h2>
            <pre>{JSON.stringify(fileTree, null, 2)}</pre>
        </>
    );
}

export default App;
