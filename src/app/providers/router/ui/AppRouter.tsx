import {Route, Routes} from "react-router-dom";
import React, {Suspense} from "react";
import {routeConfig} from "shared/config/routeConfig/routeConfig";
import path from "path";

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {Object.values(routeConfig).map(({element, path}) => (
                    <Route
                        key={path}
                        path={path}
                        element={(
                            <Suspense fallback={<div>Loading...</div>}>
                                {element}
                            </Suspense>
                        )}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;