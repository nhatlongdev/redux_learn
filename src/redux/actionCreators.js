export function isAdding(){
    return {type:'IS_ADDING'};
};

export function memorized(id){
    return { type:'MEMORIZED',id};
};

export function show(id){
    return {type:'SHOW', id};
};

export function addWord(en, vn){
    return {type:'ADD_WORD', en, vn};
};

export function deleteWord(id){
    return {type:'DELETE_WORD', id};
};