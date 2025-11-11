const searchResultElement = document.getElementById('searchResult');

function clear() {
    searchResultElement.innerHTML = '';
}

function search() {
    clear();
    for(let item of data) {
        const newListItem = document.createElement('li');
        newListItem.innerHTML = `${item.show.name} - ${item.show.rating.average || 'N/A'}`;
        searchResultElement.appendChild(newListItem);
    }
    
}

function sort() {
    clear();
    let sortedData = data.sort((a, b) => {
        return b.show.rating.average - a.show.rating.average;;
    });
    for (let item of sortedData) {
        const newListItem = document.createElement('li');
        newListItem.innerHTML = `${item.show.name} - ${item.show.rating.average || 'N/A'}`;
        searchResultElement.appendChild(newListItem);
    }
}