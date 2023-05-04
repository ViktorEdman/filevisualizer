import ListNode from './ListNode'

export function NestedList({ node }: TreeProps) {
    return (
        <>
            <ul>
                {node.children.map((child: TreeNode) => (
                    <ListNode node={child} key={child.name}/>
                ))}
            </ul>
        </>
    )
}

export default NestedList
