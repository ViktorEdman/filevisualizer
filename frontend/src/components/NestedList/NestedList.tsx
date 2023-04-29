import ListNode from "./ListNode";

export function NestedList({ nodes = [] }: TreeProps) {
  return (
    <>
      <h2>Nested List</h2>
      <ul>
        {nodes.map((node: TreeNode) => (
          <ListNode node={node} />
        ))}
      </ul>
    </>
  );
}

export default NestedList;
