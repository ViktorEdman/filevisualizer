type TreeProps = {
    node: TreeNode
}

type TreeNode = {
    name: string
    children: TreeNode[]
    parent: TreeNode | null
}
