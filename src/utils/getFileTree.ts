export function getFileTree(fileList: string[]) {
    const fileTree: TreeNode[] = []

    //Loop over list of files where each file is the path of a single file
    // for example "marvel/black_widow/bw.png"
    fileList.forEach((file) => {
        //Split each file´s path into individual  parts
        // for example [ "marvel", "black_widow", "bw.png"]
        const parts = file.split('/')
        let currentLevel = fileTree
        //Loop over each level in the path of the file
        parts.forEach((part) => {
            // See if current level already has a node with the same name as the part
            const matchingPart = currentLevel.findIndex(
                (node) => node.name === part
            )
            // if not, add a node with the name of the part
            if (matchingPart === -1) {
                // save new node to be able to access it by reference
                let newNode: TreeNode = { name: part, children: [] }

                currentLevel.push(newNode)
                // set the new level to be the children array of the new node and
                // and run the next iteration in that context
                if (newNode.children !== undefined) {
                    currentLevel = newNode.children
                }
            } else {
                // if there is a matching name at this level already, go to the next iteration at that node's children
                currentLevel = currentLevel[matchingPart].children || []
            }
        })
    })
    return fileTree
}
