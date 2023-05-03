import styles from './styles.module.css'
import { VscFolder, VscFile } from 'react-icons/vsc'
import { MdOutlineKeyboardBackspace } from 'react-icons/md'
import hasChildren from '../../utils/hasChildren'
import { useState } from 'react'

function FileBrowser({ node }: TreeProps) {
    const [currentNode, setCurrentNode] = useState(node)
    return (
        <>
            <h2>File browser</h2>
            <div className={styles.container}>
                {currentNode.parent !== null ? (
                    <div
                        className={styles.folder}
                        onClick={() => {
                            if (currentNode.parent !== null) {
                                setCurrentNode(currentNode.parent)
                            }
                        }}
                    >
                        <MdOutlineKeyboardBackspace className={styles.folderIcon} />
                        <span className={styles.folderName}>Go back</span>
                    </div>
                ) : null}
                {currentNode.children.map((node: TreeNode) => (
                    <div
                        className={styles.folder}
                        key={node.name}
                        onClick={() => {
                            if (node.children.length > 0) {
                                setCurrentNode(node)
                            }
                        }}
                    >
                        {hasChildren(node) ? (
                            <VscFolder className={styles.folderIcon} />
                        ) : (
                            <VscFile className={styles.folderIcon} />
                        )}

                        <span
                            className={styles.folderName}
                            title={node.name}
                        >
                            {node.name}
                        </span>
                    </div>
                ))}
            </div>
        </>
    )
}

export default FileBrowser
