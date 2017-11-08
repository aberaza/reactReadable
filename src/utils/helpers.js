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
