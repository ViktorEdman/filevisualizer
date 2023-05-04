import ListNode from './ListNode'

// This component only exists to wrap the recursive ListNode in a ul element
// If this was integrated in the ListNode component, every li element would be wrapped in a ul element
export function NestedList({ node }: TreeProps) {
    return (
        <>
            <ul>
                {node.children.map((child: TreeNode) => (
                    <ListNode
                        node={child}
                        key={child.name}
                    />
                ))}
            </ul>
        </>
    )
}

export default NestedList
