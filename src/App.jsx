import { OWProvider } from "./contexts/OWContext.jsx";
import { useState } from "react";

import "./styles/css/index.css";

import "./styles/css/header.css";
import "./styles/css/mobileSearch.css";
import "./styles/css/sectionCurrent.css";
import "./styles/css/sectionInfo.css";
import "./styles/css/pac.css";

import AppWrapper from "./components/app-wrapper.jsx";
import Header from "./components/header";
import CurrentSection from "./components/section-current";
import InfoSection from "./components/section-info";

import "./styles/css/queries.css";

function App() {
    const [isDataFetched, setIsDataFetched] = useState(false);

    return (
        <OWProvider setFetched={setIsDataFetched}>
            {isDataFetched && (
                <>
                    <main className="app-container container flex flex-column flex-center ">
                        <AppWrapper>
                            <div className="app-cover fade-out"></div>
                            <Header />
                            <CurrentSection />
                            <InfoSection />
                            <p className="ow-tag">
                                Data from openweathermap.org
                            </p>
                        </AppWrapper>
                    </main>
                </>
            )}
        </OWProvider>
    );
}

export default App;
