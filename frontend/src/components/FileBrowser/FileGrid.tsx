import styles from  "./styles.module.css"

function FileBrowser({ nodes = [] }: TreeProps) {
  return (
    <>
      <h2>File browser</h2>
      <div className={styles.container}>
        {nodes.map((node) => (
          <div className={styles.folder}>
            
            <span className={styles.folderName}>{node.name}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default FileBrowser;
