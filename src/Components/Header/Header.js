import React from "react";
import "./../../Styles/menu.scss";
import logo from "./../../Images/nav-dark-dotted.png"
import {Link, Route, Switch} from "react-router-dom";
import SvgIcon from '@material-ui/core/SvgIcon';
import CustomizedInputBase from "../Public/Search/Serach";
import cartIcon from "./../../Images/header-cart-ic.jpg";
import heart from "./../../Images/header-heart-ic.jpg";
import square from "./../../Images/header-square-ic.jpg";
function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}
class Header extends React.Component{
    state ={className:"" };

    componentDidMount(){
        window.addEventListener("scroll", this.handleScroll);
    }

    handleScroll=()=>{
        if (window.pageYOffset > 0) {
            if(!this.state.className){
                this.setState({ className: "grey" });
            }
        }else{
            if(this.state.className){
                this.setState({ className: "" });
            }
        }

    };

    render() {
        return (
            <div className={["menu-container", "header", this.state.className].join(" ")}>
                <div className="container-fluid d-flex align-items-center justify-content-between p-re">
                    <div className="p-1 d-flex justify-content-center align-items-center">
                        <p className="m-0">
                            فرم سفارش همکاری
                        </p>
                        <img src={logo} alt="logo" className="img-fluid ml-2"/>
                    </div>
                    <div className="d-flex align-items-center ">
                        <Link to="/" className="header-link p-2">نرم افزار</Link>
                        <Link to="/" className="header-link p-2">نرم افزار</Link>
                        <Link to="/" className="header-link p-2">نرم افزار</Link>
                        <Link to="/" className="header-link p-2">نرم افزار</Link>
                        <Link to="/" className="header-link p-2">نرم افزار</Link>
                        <Link to="/" className="header-link p-2">نرم افزار</Link>
                        <Link to="/" className="header-link p-2">نرم افزار</Link>
                        <Link to="/" className="header-link p-2">نرم افزار</Link>
                        <Link to="/" className="header-link p-2">نرم افزار</Link>
                        <Link to="/" className="header-link p-2">نرم افزار</Link>
                        <Link to="/" className="header-link p-2 d-flex justify-content-center align-items-center">
                            <HomeIcon className="mr-2" style={{color: "#ffb100e3"}}/>
                            <p className="m-0">
                                صفحه اصلی
                            </p>
                        </Link>
                    </div>
                    <Switch>
                        <Route path="/" render={() => console.log("cart")}/>
                        <Route path="/login" component={() => console.log("login")}/>
                        <Route path="/signup" component={() => console.log("signup")}/>
                        <Route path="/reservation" component={() => console.log("reservation")}/>
                        <Route path="/orders" component={() => console.log("orders")}/>
                        <Route path="/location" component={() => console.log("location")}/>
                    </Switch>
                </div>
                {/*</div>*/}
            </div>
        )
    }
}

export default Header;
