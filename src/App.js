import FirstScreen from "./components/Screens/FirstScreen";
import SecondScreen from "./components/Screens/SecondScreen";
import ThirdScreen from "./components/Screens/ThirdScreen";
import FourthScreen from "./components/Screens/FourthScreen";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div className="w-full h-full flex flex-col">
            <FirstScreen />
            <SecondScreen />
            <ThirdScreen />
            <FourthScreen />
            <Footer />
        </div>
    );
}

export default App;
