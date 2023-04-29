import NestedListTree from "./NestedListTree";
import { useState } from "react"

function ListNode({node}: { node: TreeNode } ) {
    const [showChildren, setShowChildren] = useState(false);
    return ( <>
    <li 
    key={node.name}
    >
        {node.name}
        
    {
        node.children?.length !== 0 
        ? <button
        onClick={() => setShowChildren(!showChildren)}
        >{showChildren ? "-" : "+"}</button>
        : null
    }
    


        {showChildren && node.children && <NestedListTree nodes={node.children} /> }
    </li>
    
    
    </> );
}

export default ListNode;