import styles from  "./styles.module.css"

function FileBrowser({ nodes = [] }: TreeProps) {
  return (
    <>
      <h2>File browser</h2>
      <div className={styles.container}>
        {nodes.map((node) => (
          <div>{node.name}</div>
        ))}
      </div>
    </>
  );
}

export default FileBrowser;
