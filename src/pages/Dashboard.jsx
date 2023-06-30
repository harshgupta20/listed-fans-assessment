import React from 'react';
import { auth } from '../config/Firebase';
import { useAuthState } from "react-firebase-hooks/auth";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

import "../styles/Dashboard.css";

// LEFT PANEL ICON
import DashboardIcon from "../assets/dashboard_icon.jpg";
import TransactionIcon from "../assets/transaction_icon.jpg";
import ScheduleIcon from "../assets/schedule_icon.jpg";
import UserIcon from "../assets/user_icon.jpg";
import SettingsIcon from "../assets/setting_icon.jpg";

// RIGHT PANEL ICON
import SearchIcon from "../assets/search_icon.jpg";
import NotifyIcon from "../assets/notifyIcon.png";
import RevenueIcon from "../assets/revenue_icon.jpg";
import TransactionsIcon from "../assets/transactionsIcon.jpg";
import LikeIcon from "../assets/likeIcon.jpg";
import UsersIcon from "../assets/userssIcon.jpg";
import DownArrow from "../assets/downArrow.jpg";
import RedDot from "../assets/red-dot.jpg";
import GreenDot from "../assets/green-dot.jpg";
import YellowDot from "../assets/yellow_dot.jpg";
import SingleUserIcon from "../assets/Sample_User_Icon.png";
import Piechart from '../components/Piechart';

const Dashboard = () => {

    const [user] = useAuthState(auth);

    return (
        <>
            <div id="dash-main">
                <div id="dash-left">
                    <div id="dash-lft-top">

                        <p id="dash-lft-title">Board.</p>

                        <ul id="dash-lft-ul">
                            <li style={{ color: "#fff", fontWeight: "700" }} id="dash-lft-li"><img id="dash-lft-li-img" src={DashboardIcon} alt="" /> <p id="dash-lft-li-p">Dashboard</p></li>
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



                <div id="dash-right">

                    {/* DASHBOARD TOP */}
                    <div id="dash-ryt-top">
                        <h2 id="dash-ryt-top-left">Dashboard</h2>
                        <div id="dash-ryt-top-right">
                            <div id="dash-ryt-top-search">
                                <input id="dash-ryt-top-input" placeholder='Search...' type="text" />
                                <img id="dash-ryt-top-img" src={SearchIcon} alt="SearchIcon" />
                            </div>
                            <img id="dash-ryt-top-notify" src={NotifyIcon} alt="notifyIcon" />
                            <img id="dash-ryt-top-profile" src={user?.photoURL || SingleUserIcon} alt="profile_pic" />
                        </div>
                    </div>

                    <div id="dash-sec1">
                        {
                            CardData.map((data) => {
                                return (
                                    <div id="dash-ryt-card" style={{ backgroundColor: `${data.color}` }}>
                                        <div id="dash-ryt-card-image">
                                            <img id="dash-ryt-card-revenue-img" src={data.image} alt="RevenveIcon" />
                                        </div>
                                        <p id="dash-ryt-card-revenue-title">{data.title}</p>
                                        <p id="dash-ryt-card-revenue-amount">{data.amount}</p>
                                    </div>
                                )
                            })
                        }
                    </div>



                    <div id="dash-sec2">
                        <p id="dash-sec2-title">Activities</p>
                        <div id="dash-sec2-extras">
                            <div id="dash-sec2-time">
                                <p id="dash-sec2-date">May - June 2021</p>
                                <img id="dash-sec2-arrow-img" src={DownArrow} alt="arrow" />
                            </div>
                            <div id="dash-sec2-indicator">
                                <div id="dash-sec2-indicator1">
                                    <img id="dash-sec2-indicator2-img" src={RedDot} alt="redDot" />
                                    <p id="dash-sec2-indicator1-p">Guest</p>
                                </div>
                                <div id="dash-sec2-indicator2">
                                    <img id="dash-sec2-indicator2-img" src={GreenDot} alt="greenDot" />
                                    <p id="dash-sec2-indicator2-p">User</p>
                                </div>
                            </div>
                        </div>

                        {/* jkdf000 */}
                        <div id="dash-sec2-chart">

                            <LineChart
                                width={1000}
                                height={300}
                                data={data}
                                margin={{
                                    top: 35,
                                    right: 0,
                                    left: 0,
                                    bottom: 35
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                {/* <Legend /> */}
                                <Line
                                    type="monotone"
                                    dataKey="pv"
                                    stroke="#9bdd7c"
                                    activeDot={{ r: 8 }}
                                />
                                <Line type="monotone" dataKey="uv" stroke="#e9a0a0" />
                            </LineChart>
                        </div>

                    </div>

                    {/* main */}
                    <div id="dash-ryt-sec3">

                        {/* content1 */}
                        <div id="dash-ryt-sec3-products">
                            {/* top */}
                            <div id="dash-ryt-sec3-pro-title">
                                <p id="dash-ryt-sec3-pro-p">Top products</p>
                                <div id="dash-ryt-sec3-pro-date">
                                    <p id="dash-ryt-sec3-pro-time">May - June 2021</p>
                                    <img id='dash-ryt-sec3-pro-arrow' src={DownArrow} alt="arrow" />
                                </div>
                            </div>

                            {/* content1-section2 */}
                            <div id="dash-ryt-sec3-pro-info">
                                {/* PIE CHART */}
                                <div id="dash-ryt-sec3-pie">
                                    <Piechart />
                                </div>
                                {/* PIE CHART INFO */}
                                <div id="dash-ryt-sec3-pro-pie-info">
                                    {
                                        BarData.map((data) => {
                                            return (
                                                <div id="dash-ryt-sec3-pro-info-card">
                                                    <div id="dash-ryt-sec3-pro-info-card-body">
                                                        <img id="dash-ryt-sec3-info-img" src={data.img} alt={data.color} />
                                                        <p id="dash-ryt-sec3-info-title">{data.title}</p>
                                                    </div>
                                                    <p id="dash-ryt-sec3-info-percentage">{data.percentage}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>


                        {/* Content2 */}
                        <div id="dash-ryt-sec3-schedule">
                            <div id="dash-ryt-sec3-schedule-title">
                                <p id="dash-ryt-sec3-schedule-today">Today’s schedule</p>
                                <p id="dash-ryt-sec3-schedule-p">See All</p>
                            </div>

                            {
                                ScheduleData.map((data) => {
                                    return (
                                        <div style={{ borderLeft: `4px solid ${data.color}` }} id="dash-ryt-sec3-schedule-card">
                                            <p id="dash-ryt-sec3-schedule-card-title">{data.title}</p>
                                            <p id="dash-ryt-sec3-schedule-time">{data.time}</p>
                                            <p id="dash-ryt-sec3-schedule-location">{data.location} </p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const data = [
    {
        name: "Week 1",
        uv: 200,
        pv: 100,
        amt: 2400
    },
    {
        name: "Week 2",
        uv: 400,
        pv: 450,
        amt: 2210
    },
    {
        name: "Week 3",
        uv: 200,
        pv: 150,
        amt: 2290
    },
    {
        name: "Week 4",
        uv: 300,
        pv: 450,
        amt: 2000
    },
    {
        name: "Week 5",
        uv: 200,
        pv: 200,
        amt: 2181
    },
    {
        name: "Week 6",
        uv: 450,
        pv: 230,
        amt: 2181
    }
];

const CardData = [
    {
        image: RevenueIcon,
        title: "Total Revenues",
        amount: "$2,129,430",
        color: "#DDEFE0"
    },
    {
        image: TransactionsIcon,
        title: "Total Transactions",
        amount: "1,520",
        color: "#F4ECDD"
    },
    {
        image: LikeIcon,
        title: "Total Likes",
        amount: "9,721",
        color: "#EFDADA"
    },
    {
        image: UsersIcon,
        title: "Total Users",
        amount: "892",
        color: "#DEE0EF"
    },
]

const BarData = [
    {
        color: "#98D89E",
        title: "Basic Tees",
        percentage: "55%",
        img: GreenDot
    },
    {
        color: "#F6DC7D",
        title: "Custom Short Pants",
        percentage: "31%",
        img: YellowDot
    },
    {
        color: "#EE8484",
        title: "Super Hoodies",
        percentage: "14%",
        img: RedDot
    },
]

const ScheduleData = [
    {
        title: "Meeting with suppliers from Kuta Bali",
        time: "14.00-15.00",
        location: "at Sunset Road, Kuta, Bali ",
        color: "#9BDD7C"
    },
    {
        title: "Check operation at Giga Factory 1",
        time: "18.00-20.00",
        location: "at Central Jakarta ",
        color: "#6972C3"
    },
]


export default Dashboard;