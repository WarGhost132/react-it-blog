import { StoreProvider } from 'app/providers/StoreProvider/ui/StoreProvider';
import type { StateSchema } from './config/StateSchema';
import { createReduxStore } from './config/store';

export {
    StoreProvider,
    createReduxStore,
    StateSchema,
};
