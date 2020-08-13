export const initialState = {
    basket: [
        {
            id:"12321341",
            title:"New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)",
            price:598.99,
            rating:4,
            image:"https://images-na.ssl-images-amazon.com/images/I/81FH2j7EnJL._AC_SL1500_.jpg"
        },
        {
            id:"12321347",
            title:"New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)",
            price:598.99,
            rating:4,
            image:"https://images-na.ssl-images-amazon.com/images/I/81FH2j7EnJL._AC_SL1500_.jpg"
        },
    ],
    user: null
};

export const getBasketTotal = (basket) => (
    basket?.reduce((amount, item) =>  item.price + amount, 0)
);

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case 'REMOVE_FROM_BASKET':
            let newBasket = [...state.basket];
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            if (index >= 0){
                newBasket.splice(index, 1);
            } else {
                console.warn(`Cant remove product (id: ${action.id}) as its no in basket`);
            }
            return { ...state, basket: newBasket};
        default:
            return state;
    }
}

export default reducer;