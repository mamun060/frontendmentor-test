export const loadLinksLocalStorage = () => {
    const links = localStorage.getItem('links');
    return links ? JSON.parse(links) : [];
};