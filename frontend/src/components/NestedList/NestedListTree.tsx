import ListNode from "./ListNode";

export function NestedListTree({nodes = []}: TreeProps) {
    return (<ul>
            {nodes.map((node: TreeNode) => 
                <ListNode node={node} />
            )}

    </ul>)
}

export default NestedListTree;