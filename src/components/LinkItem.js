import styles from '../assets/css/components/LinkItem.module.css';

const LinkItem = ({ link, onEdit, onDelete }) => {
    return (
      <li className={styles.item}>
        {link.image && <img src={link.image} alt="Link preview" />}
        <a href={link.linkUrl} target="_blank" rel="noopener noreferrer">
          {link.linkName}
        </a>
        <button onClick={onEdit}>Edit</button>
        <button onClick={onDelete}>Delete</button>
      </li>
    );
};
  
export default LinkItem;