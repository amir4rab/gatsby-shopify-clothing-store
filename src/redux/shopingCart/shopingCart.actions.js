export const addItem = data => ({
    type: 'ADD_ITEM',
    payload: data
});

export const removeItem = data => ({
    type: 'REMOVE_ITEM',
    payload: data
})

export const changeAmmount = data => ({
    type: 'CHANGE_THE_AMMOUNT',
    payload: data
});