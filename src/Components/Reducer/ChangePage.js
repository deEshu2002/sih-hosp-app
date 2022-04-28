


const ChangePage = (state=1, action)=>{
    switch(action.type){
        case 'goForward':
            return state+1
        case 'goBackward':
            return state-1
        default:
            return state
    }
}

export default ChangePage;