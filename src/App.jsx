import "./styles/css/index.css";

import "./styles/css/header.css";
import "./styles/css/sectionCurrent.css";
import "./styles/css/sectionInfo.css";

import Header from "./components/header";
import CurrentSection from "./components/section-current";
import InfoSection from "./components/section-info";

function App() {
    return (
        <>
            <div className="app-container container flex flex-column flex-center clear">
                <Header />
                <CurrentSection />
                <InfoSection />
            </div>
        </>
    );
}

export default App;
