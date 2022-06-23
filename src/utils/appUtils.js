function setLocalStorageItem(key="key", value){
    if(localStorage){
        localStorage.setItem(key, value)
    }
}

function getLocalStorageItem(key){
    if(localStorage){
        return localStorage.getItem(key)
    }
}

export {
    setLocalStorageItem,
    getLocalStorageItem
}