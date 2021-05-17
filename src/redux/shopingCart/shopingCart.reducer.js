const INITIAL_STATE = {
    dataArr: [],
    synced: false
};

// product = {
//     ammount: 0,
//     data: {

//     }
// }

const shopingCartReducer = ( state = INITIAL_STATE, action ) => {
    switch( action.type ){
        case 'ADD_ITEM':{
            //* defalt ammount of new item *//
            let itemAmmount = 1;

            //* filtering to check if the item is alredy in Arr *//
            const newArr = state.dataArr.filter( product => {
                if( product.data.shopifyId !== action.payload.shopifyId ) return true;

                //* changing the ammount to the ammount in dataArr *//
                itemAmmount = product.ammount + 1;
                return false;
            });


            //* returning results *//
            return ({
                synced: false,
                dataArr: [
                    ...newArr,
                    {
                        data: action.payload,
                        ammount: itemAmmount
                    }
                ]
            });
        }
        case 'REMOVE_ITEM':{
            //* filtering to remove specific item *//
            const newArr= state.dataArr.filter( product => product.data.shopifyId !== action.payload );

            //* returning results *//
            return ({
                synced: false,
                dataArr: newArr
            })
        }
        case 'CHANGE_THE_AMMOUNT':{
            //* filtering to remove specific item *//
            const newArr = state.dataArr.filter( product => product.data.shopifyId !== action.payload.shopifyId );

            //* returning results *//
            return ({
                synced: false,
                dataArr: [
                    ...newArr,
                    {
                        data: action.payload.data,
                        ammount: action.payload.ammount
                    }
                ]
            });
        }
        default:
            return state
    }
};

export default shopingCartReducer;