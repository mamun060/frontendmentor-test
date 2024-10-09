"use client"
import { useState , useEffect } from 'react';
import UploadImage from './UploadImage';
import styles from '../assets/css/components/LinkForm.module.css'

const LinkForm = ({ initialLink, onAddLink, onCancel }) => {
    const [linkName, setLinkName] = useState("");
  const [linkUrl, setLinkUrl] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    if (initialLink) {
      setLinkName(initialLink.linkName || "");
      setLinkUrl(initialLink.linkUrl || "");
      setImage(initialLink.image || "");
    }
  }, [initialLink]);

  const resetForm = () => {
    setLinkName("");
    setLinkUrl("");
    setImage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (linkName && linkUrl) {
      const newLink = { linkName, linkUrl, image };
      onAddLink(newLink); // Ensure this is properly passed
      resetForm();
    }
  };
  
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Link Name"
            value={linkName}
            onChange={(e) => setLinkName(e.target.value)}
            />
            <input
            type="url"
            placeholder="Link URL"
            value={linkUrl}
            onChange={(e) => setLinkUrl(e.target.value)}
            />
            <input
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            />
            <button type="submit">Submit</button>
            <button type="button" onClick={onCancel}>
            Cancel
            </button>
        </form>
    );
  };
  
  export default LinkForm;
