let initialState = [
    {id: 1, name: 'tv', cost:1000},
    {id: 2, name: 'phone', cost:300}
]

export default function products(state=initialState,action){
    switch (action.type){
        default:
            return state
    }
}