import styles from './styles.module.css'
import { VscFolder, VscFile } from 'react-icons/vsc'
import { MdOutlineKeyboardBackspace } from 'react-icons/md'
import hasChildren from '../../utils/hasChildren'
import { useState } from 'react'

type FolderState = {
    current: TreeNode[] | TreeNode
    path?: TreeNode[]
}

function FileBrowser({ nodes = [] }: TreeProps) {
    const [folder, setFolder] = useState<FolderState>({
        path: [],
        current: nodes,
    })
    return (
        <>
            <h2>File browser</h2>
            <div className={styles.container}>
                {folder.path && folder.path.length > 0 ? (
                    <div
                        className={styles.folder}
                        onClick={() => {
                            if (folder.path !== undefined) {
                                const parent =
                                    folder.path[folder.path.length - 1]
                                const parentPath = folder.path.slice(0, -1)
                                setFolder({ current: parent, path: parentPath })
                            }
                        }}
                    >
                        <MdOutlineKeyboardBackspace
                            className={styles.folderIcon}
                        />
                        <span className={styles.folderName}>Go back</span>
                    </div>
                ) : null}
                {folder.current.map((node: TreeNode) => (
                    <div
                        className={styles.folder}
                        key={node.name}
                        onClick={() => {
                            if (
                                folder.path &&
                                node.children &&
                                hasChildren(node)
                            ) {
                                const path = [...folder.path, folder.current]
                                setFolder({
                                    path: path,
                                    current: node.children,
                                })
                            }
                        }}
                    >
                        {hasChildren(node) ? (
                            <VscFolder className={styles.folderIcon} />
                        ) : (
                            <VscFile className={styles.folderIcon} />
                        )}

                        <span className={styles.folderName} title={node.name}>
                            {node.name}
                        </span>
                    </div>
                ))}
            </div>
        </>
    )
}

export default FileBrowser
