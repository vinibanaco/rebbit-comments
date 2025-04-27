import styles from "./index.module.css";

export default function Comments() {
  return (
    <>
      <h2>Comments</h2>
      <div className={styles.commentInput}>
        <textarea placeholder="What are your thoughts?" />
        <button>Comment</button>
      </div>
      <div className={styles.comment}>
        <p className={styles.commentMeta}>u/commenter • 1h ago</p>
        <p className={styles.commentText}>This is a comment.</p>
        <div className={styles.commentActions}>
          <button>Upvote</button>
          <button>Downvote</button>
          <button>Reply</button>
        </div>
      </div>
    </>
  );
}
