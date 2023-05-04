import NestedList from './NestedList'
import { useState } from 'react'
import styles from './styles.module.css'
import { VscFolder, VscFolderOpened } from 'react-icons/vsc'
import { BsTrash3 } from 'react-icons/bs'
import hasChildren from '../../utils/hasChildren'

function ListNode({ node }: TreeProps) {
    const [showChildren, setShowChildren] = useState(false)

    return (
        <>
            <li
                className={styles.listItem}
                key={node.name}
            >
                <a
                    onClick={(e) => {
                        e.preventDefault()
                        setShowChildren(!showChildren)
                    }}
                    className={styles.treeNode}
                >
                    {hasChildren(node) ? (
                        <span className={styles.showChildrenIcon}>
                            {showChildren ? <VscFolderOpened /> : <VscFolder />}
                        </span>
                    ) : null}

                    {node.name}
                </a>
                {/* If state is set to show children, and the node has children, show the children */}
                <a
                >
                    <BsTrash3 />
                </a>
                {showChildren && node.children && <NestedList node={node} />}
            </li>
        </>
    )
}

export default ListNode
