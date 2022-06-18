let initialState = {
    products: [
        {
            category: 'FOOD',
            name: 'Pizza',
            url: 'https://static.toiimg.com/thumb/53110049.cms?width=1200&height=900',
            description: 'Italian Food',
            price: 7.50,
            InStock: 44,
            selected: false
        },
        {
            category: 'FOOD',
            name: 'Pasta',
            url: 'https://www.seriouseats.com/thmb/DeOzmC_A8yHIiCLo2KCcUfedwv4=/1500x844/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2020__03__20200224-carretteira-pasta-vicky-wasik-21-ffe68515b25f4b348cbde845a59d6a62.jpg',
            description: 'Italian Food',
            price: 5,
            InStock: 60,
            selected: false

        },
        {
            category: 'FOOD',
            name: 'Hamburger',
            url: 'https://www.eatthis.com/wp-content/uploads/sites/4/2022/04/epic-burger-cheeseburger.jpg?quality=82&strip=1',
            description: 'American Food',
            price: 2.75,
            InStock: 100,
            selected: false
        },
        {
            category: 'FOOD',
            name: 'Mansaf',
            url: 'https://www.experiencejordan.com/wp-content/uploads/2016/10/Blog-Headers2-1-768x427.jpg',
            description: 'jordanian Dish',
            price: 25.00,
            InStock: 55,
            selected: false

        },
        {
            category: 'DRINKS',
            name: 'Milkshake',
            url: 'https://data.thefeedfeed.com/static/2021/07/13/162620556160eded79da8e4.jpg',
            description: 'available in all flavors',
            price: 3.50,
            InStock: 40,
            selected: false

        },
        {
            category: 'DRINKS',
            name: 'Water',
            url: 'https://5.imimg.com/data5/GV/DP/MY-3831378/500ml-plastic-water-bottle-500x500.jpg',
            description: 'Bottle of water',
            price: 1.00,
            InStock: 500,
            selected: false

        },
        {
            category: 'DRINKS',
            name: 'Soda',
            url: 'https://thumbs.dreamstime.com/z/popular-soda-drinks-coca-cola-fanta-sprite-cans-pepsi-can-white-background-42420531.jpg',
            description: 'available in all flavors',
            price: 2.00,
            InStock: 70,
            selected: false

        },
        {
            category: 'DRINKS',
            name: 'Cocktail',
            url: 'https://images.deliveryhero.io/image/talabat/MenuItems/80850219_637733523798374329.jpg',
            description: 'available in all flavors',
            price: 100.00,
            InStock: 25,
            selected: false

        },
        {
            category: 'DRINKS',
            name: 'Redbull',
            url: 'https://m.media-amazon.com/images/I/61E28l8RSsL._SX425_.jpg',
            description: 'Energy Drink',
            price: 8.00,
            InStock: 70,
            selected: false
        },
    ]
}
let products;

export default function ProductsReducer(state = initialState, action) {
    let { type, payload } = action;
    switch (type) {
        case "SELECT_CATEGORY":
            products = state.products.map(product => {
                if (product.category === payload) {
                    product.selected = true;
                } else {
                    product.selected = false;
                }
                return product;
            });
            return { products: products };
        case "DECREMENT_STOCK":
            let decrementArr = [...state.products];
            console.log(payload, 'array');
            let decrementItem = payload;
            let array = decrementArr.map((item, index) => {
                if (item.name === decrementItem.name) {
                    item.InStock = item.InStock - 1;
                    return item;
                }
                return item;
            })
            console.log(array, 'array');
            return { products: array };
        case "INCREMENT_STOCK":
            let incrementArr = [...state.products];
            let incrementItem = payload;
            let array1 = incrementArr.map((item, index) => {
                if (item.name === incrementItem.name) {
                    item.InStock = item.InStock + 1;
                    return item;
                }
                return item;
            })
            console.log(array1, 'array');
            return { products: array1 };
        default:
            return state;
    }

}
export const selectCategory = (category) => {
    return {
        type: "SELECT_CATEGORY",
        payload: category
    }
}
export const decrementStock = (item) => {
    return {
        type: 'DECREMENT_STOCK',
        payload: item
    }
}
export const incrementStock = (item) => {
    return {
        type: 'INCREMENT_STOCK',
        payload: item
    }
}