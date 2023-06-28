import React from 'react';
import { auth } from '../config/Firebase';
import { useAuthState } from "react-firebase-hooks/auth";

import "../styles/Dashboard.css";

// LEFT PANEL ICON
import DashboardIcon from "../assets/dashboard_icon.jpg";
import TransactionIcon from "../assets/transaction_icon.jpg";
import ScheduleIcon from "../assets/schedule_icon.jpg";
import UserIcon from "../assets/user_icon.jpg";
import SettingsIcon from "../assets/setting_icon.jpg";


const Dashboard = () => {

    const [user] = useAuthState(auth);

    return (
        <>
            <div id="dash-main">
                <div id="dash-left">
                    <div id="dash-lft-top">

                        <p id="dash-lft-title">Board.</p>

                        <ul id="dash-lft-ul">
                            <li style={{color:"#fff", fontWeight:"700"}} id="dash-lft-li"><img id="dash-lft-li-img" src={DashboardIcon} alt="" /> <p id="dash-lft-li-p">Dashboard</p></li>
                            <li id="dash-lft-li"><img id="dash-lft-li-img" src={TransactionIcon} alt="" /> <p id="dash-lft-li-p">Transactions</p></li>
                            <li id="dash-lft-li"><img id="dash-lft-li-img" src={ScheduleIcon} alt="" /> <p id="dash-lft-li-p">Schedules</p></li>
                            <li id="dash-lft-li"><img id="dash-lft-li-img" src={UserIcon} alt="" /> <p id="dash-lft-li-p">Users</p></li>
                            <li id="dash-lft-li"><img id="dash-lft-li-img" src={SettingsIcon} alt="" /> <p id="dash-lft-li-p">Settings</p></li>
                        </ul>
                    </div>


                    <div id="dash-lft-bottom">
                        <p id="dash-lft-btm">Help</p>
                        <p id="dash-lft-btm">Contact Us</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard