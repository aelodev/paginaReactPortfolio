import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Pages from "./Pages.jsx"
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev/index.js";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>

        <DevSupport ComponentPreviews={ComponentPreviews}
                    useInitialHook={useInitial}
        >
            <Pages/>
        </DevSupport>

    </React.StrictMode>
);