import { ITEM_CLICKED, ITEM_VIEW, ADD_ITEM } from '../actions/list_actions';

let ListItems = [
    { name: 'Actions => click me', description: 'Description for actions' },
    { name: 'Containers => click me', description: 'Description for containers' },
    { name: 'Reducers => click me', description: 'Description for reducer' }
];

const INITIAL_STATE = { all: ListItems, item: null};

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case ITEM_CLICKED:
            return { ...state, item: action.payload };
        case ITEM_VIEW:
            switch(action.payload) {
                case 'Actions':
                    return {...state, item: ListItems[0] };
                case 'Containers':
                    return {...state, item: ListItems[1] };
                case 'Reducers':
                    return {...state, item: ListItems[2] };
            }
    }
    return state;
}
