const getTickets = () => {
    return fetch({
        method:"GET",
        url:"http://localhost:8000/data/tickets"
    }).then((res) => res)
    .catch((err) => console.log(err))
}



const getGraphData = () => {
    return new Promise((resolve, reject) => {
        fetch("/data/graphical")
        .then(response => resolve(response.json()))
        .catch(err => reject(err))
    })
          
}


export {
    getGraphData,
    getTickets
}