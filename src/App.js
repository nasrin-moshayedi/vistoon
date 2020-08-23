import React from "react";
import "./Styles/main.scss";
import Menu from "./Components/Menu/Menu";
import Header from "./Components/Header/Header";
import SpecialOffers from "./Components/Content/SpecialOffers/SpecialOffers";
import Salad from "./Components/Content/Salad/Salad";
import Appetizer from "./Components/Content/Appetizer/Appetizer";
// import ReadyToOrder from "./Components/ReadyToOrder/ReadyToOrder";
// import Footer from "./Components/Footer/Footer";

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="position-fixed w-100" style={{top: 0, zIndex: 2}}>
                    <Menu/>
                    <Header/>
                </div>
                <div style={{marginTop: 120}}>
                    <SpecialOffers/>
                    <Salad/>
                    <Appetizer/>
                </div>

                {/*<ReadyToOrder/>*/}
                {/*<Footer/>*/}

            </React.Fragment>


        );
    }
}
export default App;
