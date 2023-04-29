import NestedList from "./NestedList";
import { useState } from "react";
import styles from "./styles.module.css";
import { VscFolder, VscFolderOpened } from "react-icons/vsc"
import hasChildren from "../../utils/hasChildren";

function ListNode({ node }: { node: TreeNode }) {
  const [showChildren, setShowChildren] = useState(false);
  
  return (
    <>
      <li className={styles.listItem} key={node.name}>
        <a
          onClick={(e) => {
            e.preventDefault();
            setShowChildren(!showChildren);
          }}
          className={styles.treeNode}
        >
          {hasChildren(node) ? (
            <span className={styles.showChildrenIcon}>
              {showChildren ? <VscFolderOpened/> : <VscFolder/>}
            </span>
          ) : null}

          {node.name}
        </a>

        {showChildren && node.children && <NestedList nodes={node.children} />}
      </li>
    </>
  );
}

export default ListNode;
