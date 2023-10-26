import "./styles/css/index.css";

import "./styles/css/header.css";
import "./styles/css/sectionCurrent.css";

import Header from "./components/header";
import CurrentSection from "./components/section-current";

function App() {
    return (
        <>
            <div className="app-container container flex flex-column flex-center clear">
                <Header />
                <CurrentSection />
            </div>
        </>
    );
}

export default App;
