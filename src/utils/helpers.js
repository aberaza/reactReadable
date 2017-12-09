/** HELPERS */
export const flagAsDeleted = (id) => (item) => {
    if(item.id === id){
        item.deleted = true;
    }
    return item;
};

export const setVoteScore = (id, score) => (item) => {
    if(item.id === id){
        item.voteScore = score;
    }
    return item;
}

export const updateElement = nItem => (oItem) => {
    if(oItem.id === nItem.id){
        return nItem;
    }
    return oItem;
}

export const timestamp2String = (timestamp) => {
    const pastTime = Date.now() - timestamp;
    if(pastTime < 5*60*1000){ //<5min 
        return "just now!";
    }
    if(pastTime < 60*60*1000){ //<1h
        return `${pastTime % 60*100} minutes ago`;
    }
    if(pastTime < 7*60*60*1000){
        return `${pastTime % 60*60*1000} days ago`;
    }
    return `${(new Date(timestamp).toDateString())}`
}

export const sortBy = (field, asc) => (a,b) => (asc ? a[field] - b[field]: b[field] - a[field])
