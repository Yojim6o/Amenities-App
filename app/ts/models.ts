import { uuid } from './util/uuid';

export class Amenities {
    id: string;

    constructor(obj?: any) {
        this.id = obj && obj.id || uuid();
    }
}