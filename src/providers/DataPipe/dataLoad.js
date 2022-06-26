const getTickets = () => {
    
    return new Promise((resolve, reject) => {
        fetch("/data/tickets")
        .then(response => resolve(response.json()))
        .catch(err => reject(err))
    })
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