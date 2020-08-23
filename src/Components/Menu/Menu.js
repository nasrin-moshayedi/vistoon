import React from "react";
import "./../../Styles/menu.scss";
import logo from "./../../Images/mini_logo.png"
import {Link, Route, Switch} from "react-router-dom";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import CustomizedInputBase from "../Public/Search/Serach";
import cartIcon from "./../../Images/header-cart-ic.jpg";
import heart from "./../../Images/header-heart-ic.jpg";
import square from "./../../Images/header-square-ic.jpg";
class Menu extends React.Component{
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

    }

    render() {
        return (
            <div className={["menu-container","menu-position", this.state.className].join(" ")}>
                <div className="menu-height container-fluid d-flex align-items-center justify-content-between p-re">
                    <div className="border p-1" style={{width: 60}}>
                        <img src={logo} alt="logo" className="img-fluid"/>
                    </div>
                    <div className="d-flex align-items-center ">
                        <Link to="/login" className="mx-2" style={{fontSize: 12}}>Login</Link>
                        <Link to="/signup" className="d-none signup d-md-flex align-items-center mx-2">SignUp</Link>
                    </div>
                        <CustomizedInputBase/>
                        <div className="text-center">
                            <Link to="/" className="btn mt-2" style={{fontSize: 20}}>
                                TOVSEE.IR
                                <p style={{fontSize: 14}}>
                                    به سایت توسعه خوش آمدید
                                </p>
                            </Link>
                        </div>
                        <div className="border-bottom" style={{fontSize: 12}}>
                            +98 21 22 84 63 78
                        </div>
                        <div className="d-flex justify-content-center align-items-center px-2 h-100 bg-white">
                            <Link to="/cart" className="mx-1 cart ">
                                <div className="rounded-circle border ">
                                    <div className="bg-black rounded-circle border ">
                                        <img src={cartIcon} className="cart-icon img-fluid p-1"/>
                                    </div>
                                </div>
                            </Link>
                            <Link to="/cart" className="mx-1 cart">
                                <div className="rounded-circle border ">
                                    <div className="bg-black rounded-circle border ">
                                        <img src={heart} className="cart-icon img-fluid p-1"/>
                                    </div>
                                </div>
                            </Link>
                            <Link to="/cart" className="mx-1 cart">
                                <div className="rounded-circle border ">
                                    <div className="bg-black rounded-circle border ">
                                        <img src={square} className="cart-icon img-fluid p-1"/>
                                    </div>
                                </div>
                            </Link>
                            <Link to="/cart" className="mx-2 cart">EN</Link>
                        </div>

                        <Switch>
                            <Route path="/cart" render={() => console.log("cart")}/>
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

export default Menu
