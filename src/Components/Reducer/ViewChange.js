


const changeData={
    def:1,
    beds:2, 
    tests:3,
    medicine:4,
    newnode:5,
    patients:6,
}

const ViewChange = (state=1, action)=>{
    switch(action.type){
        case 'beds':
            return state=changeData[action.type]
        case 'tests':
            return state=changeData[action.type]
        case 'medicine':
            return state=changeData[action.type]
        case 'newnode':
            return state=changeData[action.type]
        case 'patients':
            return state=changeData[action.type]    
        case 'def':
            return state=changeData[action.type];
        default:
            return state
    }
}

export default ViewChange;