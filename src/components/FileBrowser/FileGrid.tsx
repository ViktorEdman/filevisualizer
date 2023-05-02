import styles from  "./styles.module.css"
import {VscFolder, VscFile} from "react-icons/vsc"
import {MdOutlineKeyboardBackspace} from "react-icons/md"
import hasChildren from "../../utils/hasChildren";
import { useState } from "react";

type FolderState = {
  current: TreeNode[]
  parent?: TreeNode[] | undefined
}

function FileBrowser({ nodes = [] }: TreeProps) {
  const [folder, setFolder] = useState<FolderState>({current: nodes, parent: undefined})
  return (
    <>
      <h2>File browser</h2>
      <div className={styles.container}>
        {folder.parent !== undefined
        ? <div className={styles.folder} onClick={() => {

          setFolder({current: folder.parent})
        }}>
              <MdOutlineKeyboardBackspace className={styles.folderIcon} />
              <span className={styles.folderName}>Go back</span>
          </div>
        : null}
        {folder.current.map((node) => (
          
          <div 
          className={styles.folder} 
          key={node.name}
          
          onClick={() => {
            if (node.children &&hasChildren(node)){
              setFolder({current: node.children, parent: folder.current})
          }
          }}
          >
            {hasChildren(node) 
            ? <VscFolder className={styles.folderIcon}/>
            : <VscFile className={styles.folderIcon}/>}
            
            <span className={styles.folderName}>{node.name}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default FileBrowser;
