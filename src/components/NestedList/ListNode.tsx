import NestedList from './NestedList'
import { useState } from 'react'
import styles from './styles.module.css'
import { VscFolder, VscFolderOpened, VscFile } from 'react-icons/vsc'
import hasChildren from '../../utils/hasChildren'

function ListNode({ node }: TreeProps) {
    // Each ListNode can either display its child nodes or not
    const [showChildren, setShowChildren] = useState(false)
    return (
        <>
            <li
                className={styles.listItem}
                key={node.name}
            >
                {/* 
                On clicking a folder, an opened folder is rendered and its children is listed below the open folder
                On clicking the folder again, the folder is once again closed and its children are removed from the render output
                 */}
                <a
                    onClick={(e) => {
                        e.preventDefault()
                        setShowChildren(!showChildren)
                    }}
                    className={styles.treeNode}
                >
                    {/* If the node has children, it gets a folder icon, otherwise, it gets a file icon */}
                    {hasChildren(node) ? (
                        <span className={styles.icon}>{showChildren ? <VscFolderOpened /> : <VscFolder />}</span>
                    ) : (
                        <span>
                            <VscFile className={styles.icon} />
                        </span>
                    )}

                    {node.name}
                </a>
                {/* If state is set to show children, and the node has children, show the children 
                    Since this component calls itself, it is considered a recursive component*/}
                {showChildren && hasChildren(node) && <NestedList node={node} />}
            </li>
        </>
    )
}

export default ListNode
