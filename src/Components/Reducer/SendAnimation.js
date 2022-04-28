
const SendAnimation = (state=false, action)=>{
    switch(action.type){
        case 'animation':
            return state=true
        default:
            return state
    }
}

export default SendAnimation;