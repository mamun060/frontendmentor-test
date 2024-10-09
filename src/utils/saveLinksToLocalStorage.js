export const saveLinksToLocalStorage = (links) => {
    localStorage.setItem('links', JSON.stringify(links));
};