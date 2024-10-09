"use client"
import { useState, useEffect } from "react";
import LinkForm from "@/components/LinkForm";
import LinkList from "@/components/LinkList";
import { loadLinksLocalStorage } from "@/utils/loadLinksLocalStorage";
import { saveLinksToLocalStorage } from "@/utils/saveLinksToLocalStorage";
import { DragDropContext } from "react-beautiful-dnd";

export default function Home() {
  const [links, setLinks] = useState([]);
  const [currentLink, setCurrentLink] = useState(null);

  useEffect(() => {
    const storedLinks = loadLinksLocalStorage();
    if (storedLinks) {
      setLinks(storedLinks);
    }
  }, []);

  const handleFormSubmit = (data) => {
    let updatedLinks;
    if (currentLink) {
      updatedLinks = links.map((link) =>
        link.id === currentLink.id ? data : link
      );
    } else {
      updatedLinks = [...links, { ...data, id: Date.now() }];
    }

    setLinks(updatedLinks);
    saveLinksToLocalStorage(updatedLinks);
    setCurrentLink(null);
  };

  const handleEditClick = (link) => setCurrentLink(link);

  const handleDeleteClick = (id) => {
    const updatedLinks = links.filter((link) => link.id !== id);
    setLinks(updatedLinks);
    saveLinksToLocalStorage(updatedLinks);
  };

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedLinks = Array.from(links);
    const [movedLink] = reorderedLinks.splice(result.source.index, 1);
    reorderedLinks.splice(result.destination.index, 0, movedLink);

    setLinks(reorderedLinks);
    saveLinksToLocalStorage(reorderedLinks); // Save to local storage
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
       <div>
      <LinkForm
        initialLink={currentLink}
        onAddLink={handleFormSubmit} // Added here
        onCancel={() => setCurrentLink(null)}
      />
      <LinkList
        links={links}
        onEditClick={handleEditClick}
        onDeleteClick={handleDeleteClick}
      />
    </div>
    </DragDropContext>
  );
}
