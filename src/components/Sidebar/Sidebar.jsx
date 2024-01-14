import { Link } from "react-router-dom";
import "./Sidebar.css";
import img1 from "./../../assets/img/Group 8341.svg";
import img2 from "./../../assets/img/Avatar-Image.png";
import img3 from "./../../assets/img/Frame.svg"
import img4 from "./../../assets/img/Dashboard-Icon.svg"
import img5 from "./../../assets/img/Exchange-Icon.svg"
import img6 from "./../../assets/img/Price-Icon.svg"
import img7 from "./../../assets/img/Wallet-Icon.svg"
import img8 from "./../../assets/img/Market-Icon.svg"
import img9 from "./../../assets/img/Transaction-Icon.svg"
import img10 from "./../../assets/img/Settings-Icon.svg"
import img11 from "./../../assets/img/News-Icon.svg"
import img12 from "./../../assets/img/Chat-Icon.svg"
import img13 from "./../../assets/img/Dark-Icon.svg"
import img14 from "./../../assets/img/Light-Icon.svg"
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [toggled, setToggled] = useState(false);

    const handleClick = () => {
        setToggled(!toggled);
      };

    const toggleSidebar = () => {
        setCollapsed(!collapsed);
        document.body.classList.toggle("collapsed");
    }
    return (
        <nav className={`AB-sidebar ${collapsed ? 'collapsed' : ''}`}>
            <div className="AB-sidebar-top-wrapper">
                <div className="AB-sidebar-top">
                    <Link className="AB-logo__wrapper">
                        <img src={img1} alt="" className="AB-logo-small" />
                        <span className="AB-hide">Whale.</span>
                    </Link>
                </div>
                <div className="AB-expand-btn" onClick={toggleSidebar}>
                    {collapsed ? <FaChevronRight /> : <FaChevronLeft />}
                </div>
            </div>
            <div className="AB-perconal-ph">
                <img src={img2} alt="" className="AB-perconal" />
                <h3 className="AB-hide">Erfan Amade</h3>
                <div className="AB-span-img">
                    <span className="AB-hide">verified</span>
                    <img src={img3} alt="" className="AB-name-icon-true" />
                </div>
            </div>
            <div className="AB-sidebar-links">
                <ul>
                    <li>
                        <Link to="/" className="AB-tooltip">
                            <img src={img4} alt="" className="AB-the-icon-sidebar" />
                            <span className="AB-link AB-hide">Dashboard</span>
                            <span className="AB-tooltip__content">Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Exchange" className="AB-tooltip">
                            <img src={img5} alt="" className="AB-the-icon-sidebar" />
                            <span className="AB-link AB-hide">Exchange</span>
                            <span className="AB-tooltip__content">Exchange</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/LivePrices" className="AB-tooltip">
                            <img src={img6} alt="" className="AB-the-icon-sidebar" />
                            <span className="AB-link AB-hide">Live prices</span>
                            <span className="AB-tooltip__content">Live prices</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Wallet" className="AB-tooltip">
                            <img src={img7} alt="" className="AB-the-icon-sidebar" />
                            <span className="AB-link AB-hide">Wallet</span>
                            <span className="AB-tooltip__content">Wallet</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/NFTMarket" className="AB-tooltip">
                            <img src={img8} alt="" className="AB-the-icon-sidebar" />
                            <span className="AB-link AB-hide">NFT Market</span>
                            <span className="AB-tooltip__content">NFT Market</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Transaction" className="AB-tooltip">
                            <img src={img9} alt="" className="AB-the-icon-sidebar" />
                            <span className="AB-link AB-hide">Transaction</span>
                            <span className="AB-tooltip__content">Transaction</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Settings" className="AB-tooltip">
                            <img src={img10} alt="" className="AB-the-icon-sidebar" />
                            <span className="AB-link AB-hide">Settings</span>
                            <span className="AB-tooltip__content">Settings</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/News" className="AB-tooltip">
                            <img src={img11} alt="" className="AB-the-icon-sidebar" />
                            <span className="AB-link AB-hide">News</span>
                            <span className="AB-tooltip__content">News</span>
                        </Link>
                    </li>
                </ul>
                <div className="AB-sidebar-links-part2">
                    <h5 className="AB-sidebar-links-h5">Insignts</h5>
                    <ul>
                        <li>
                            <Link to="/Inbox" className="AB-tooltip">
                                <img src={img12} alt="" className="AB-the-icon-sidebar" />
                                <span className="AB-link AB-hide">Inbox</span>
                                <span className="AB-tooltip__content">Inbox</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="AB-dark-white">
                <button>
                    <img src={img14} alt="" />
                    Light
                </button>
                <button>
                    <img src={img13} alt="" />
                    Dark
                </button>
            </div>
            <button className="AB-btn-dark-white" onClick={handleClick}>
                {toggled ? <img src={img13} alt="" /> : <img src={img14} alt="" />}
            </button>
        </nav>
    )
}

export default Sidebar;