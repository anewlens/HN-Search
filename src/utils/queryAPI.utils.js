const queryAPI = (queryTerm, sort, filter) => {
    const sortBy = sort === 'date' ? '_by_date' : ''
    const filterBy = filter === 'any' ? '' : `&tags=${filter}`

    const url = `http://hn.algolia.com/api/v1/search${sortBy}?query=${queryTerm}${filterBy}`

    return fetch(url)
        .then(res => res.json())
        .catch(error => console.log(error))
}

export default queryAPI