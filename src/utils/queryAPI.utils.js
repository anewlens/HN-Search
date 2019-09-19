const queryAPI = queryTerm => 
    fetch(`http://hn.algolia.com/api/v1/search?query=${queryTerm}`)
        .then(res => res.json())
        .catch(error => console.log(error))

export default queryAPI