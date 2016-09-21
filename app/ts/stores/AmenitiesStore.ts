export const amenities: any = (state: any = {}, {type, payload}: any) => {
    switch (type) {
        case 'ADD_AMENITIES':
            return payload;
        default:
            return state;
    }
};
