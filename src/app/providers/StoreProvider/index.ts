import { StoreProvider } from 'app/providers/StoreProvider/ui/StoreProvider';
import type { StateSchema, ReduxStoreWithManager, ThunkConfig } from './config/StateSchema';
import { createReduxStore, AppDispatch } from './config/store';

export {
    StoreProvider,
    createReduxStore,
    StateSchema,
    AppDispatch,
    ThunkConfig,
    ReduxStoreWithManager,
};
