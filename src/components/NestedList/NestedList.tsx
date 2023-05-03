import ListNode from './ListNode'

export function NestedList({ nodes = [] }: TreeProps) {
    return (
        <>
            <ul>
                {nodes.map((node: TreeNode) => (
                    <ListNode node={node} />
                ))}
            </ul>
        </>
    )
}

export default NestedList
