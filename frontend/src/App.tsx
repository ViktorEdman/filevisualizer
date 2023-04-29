type treeNode = {
    name: string,
    children?: treeNode[]
}

function getFileTree(fileList: string[]) {
    const fileTree: treeNode[] = []

    //Loop over list of files where each file is the path of a single file
    // for example "marvel/black_widow/bw.png"
    fileList.forEach((file) => {
        //Split each file´s path into individual  parts
        // for example [ "marvel", "black_widow", "bw.png"]
        const parts = file.split('/');
        let currentLevel = fileTree
        //Loop over each level in the path of the file
        parts.forEach((part) => {
            // See if current level already has a node with the same name as the part
            const matchingPart = currentLevel.findIndex((node) => node.name === part)
            // if not, add a node with the name of the part
            if (matchingPart === -1) {
                // save new node to be able to access it by reference
                let newNode = { name: part, children: [] };
                currentLevel.push(newNode);
                // set the new level to be the children array of the new node and
                // and run the next iteration in that context
                currentLevel = newNode.children
            } else {
                // if there is a matching name at this level already, go to the next iteration at that node's children
                currentLevel = currentLevel[matchingPart].children || [];
            }
        });
      });
      return fileTree;
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
    const fileTree = getFileTree(list);
    console.log(fileTree)

    return (
        <>
            <h1>Hello world</h1>
            <h2>Raw list</h2>
            <pre>{JSON.stringify(list, null, 2)}</pre>
            <h2>VSCode viz</h2>
            <ul>

            </ul>
        </>
    );
}

export default App;
