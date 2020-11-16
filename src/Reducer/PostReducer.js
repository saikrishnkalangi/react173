
const PostReducer = (state = {} , action) => {

    switch(action.type){
        case "posts":
            return{
                ...state,
                posts:action.data
            }

            case "users":
                return{
                    ...state,
                    users:action.data
                }


            default:
                return state;
    }
}

export default PostReducer;