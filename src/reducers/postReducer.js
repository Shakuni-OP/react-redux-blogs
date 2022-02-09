

export default (state=[],action)=>{
    // this is old way of doing stuffs
    // if(action.type=='FETCH_POSTS'){
    //     return action.payload;
    // }
    //  return state;

    // NEW WAY USING SWITCH

    switch(action.type){
        case 'FETCH_POSTS':
            return action.payload;
        
        default:
            return state;
    }

};