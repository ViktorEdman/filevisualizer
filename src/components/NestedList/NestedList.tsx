import ListNode from './ListNode'

export function NestedList({ node }: TreeProps) {
    return (
        <>
            <ul>
                {node.children.map((child: TreeNode) => (
                    <ListNode node={child} />
                ))}
            </ul>
        </>
    )
}

export default NestedList
