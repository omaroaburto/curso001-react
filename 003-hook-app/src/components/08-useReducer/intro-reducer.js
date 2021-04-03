const initialState = [{
    id: 1,
    todo: 'comprar pan',
    done: false
}];

const todoReducer = (state = initialState, action) => {
    if(action?.type ==='add'){
        return [...state, action.payload];
    }
    return state;
}

const newTodo = {
    id:2,
    todo: 'comprar leche',
    done: false
}

const addTodo = {
    type: 'add',
    payload: newTodo
}
let todos = todoReducer();

console.log(todos);