export default function search(data, searchTerm) {
    if (!searchTerm) {
        return data;
    }
    const searchWords = searchTerm.toLowerCase().split(' ');
    const result = data.filter(item => {
        const title = item.title.toLowerCase();
        return searchWords.every(word => title.includes(word));
    });

    return result;
}
