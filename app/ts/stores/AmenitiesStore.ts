export const amenities = (state: any = {}, {type, payload}) => {
    switch (type) {
        case 'ADD_AMENITIES':
            return payload;
        default:
            return state;
    }
};
