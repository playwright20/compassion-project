// import React, { useState } from 'react';
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './Header.scss';
import Logo from '../../Images/compassion_main_logo.png';
import Alarm from '../../Images/alarm_logo.png';
import Menu from '../../Images/menu_logo.png';

// const Header = () => {
//     const [mode, setMode] = useState(true);
class Header extends Component {
    render(){
    return(
        <div className = "header">
            <div className = "headerWrap">
                <div className = "headerTop">
                    <div className = "topWrap">
                        <ul className = "top">
                            <li>
                                <Link to="/">로그인</Link>
                            </li>
                            <li>
                                <Link to="/">회원가입</Link>
                            </li>
                            <li>
                                <Link to="/">인재채용</Link>
                            </li>
                            <li>
                                <Link to="/">FAQ</Link>
                            </li>
                            <li>
                                <Link to="/">스토어</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className = "headerbottom">
                    <div className = "bottomWrap">
                        <div className = "logo">
                            <a className= "logoA" href = "/">
                                <img className="compassionLogo" src = {Logo} alt ="컴패션 로고" />
                            </a>
                        </div>
                        <div className = "gnbWrap" >
                            <ul className = "bottom">
                                <li>
                                    <Link to="/">후원</Link>
                                </li>
                                <li>
                                    <Link to="/">참여</Link>
                                </li>
                                <li>
                                    <Link to="/">공감</Link>
                                </li>
                                <li>
                                    <Link to="/">소개</Link>
                                </li>
                                <li>
                                    <Link to="/">애드보킷</Link>
                                </li>
                                
                                <li>
                                    <a className= "alarm" href = "/">   
                                        <img className ="alarmLogo" src ={Alarm} alt = "알람 로고" />
                                    </a>
                                </li>
                                <li>
                                    <a className= "menu" href = "/">  
                                        <img className ="menuBtn" src ={Menu} alt = "메뉴 버튼" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div> 

        );
    }
}

export default Header;