import {ICategory} from './ICategory.ts'
import {ICustomer} from './ICustomer.ts'
import {ITag} from './ITag.ts'

export interface IProjectCreate {
    id?: number;
    name: string;
    description?: string | null;
    url?: string | null;
    image?: string | null;
    from?: string | null;
    to?: string | null;
    category_id?: number | null;
    category?: ICategory | null;
    customer_id?: number | null;
    customer?: ICustomer | null;
    tags?: ITag[];
}