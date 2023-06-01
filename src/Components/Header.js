import React, { Component } from "react";
import Logo from "../images/Logo.png";
import styled from "styled-components";
import {BsSearch} from "react-icons/bs";

class Header extends Component {
    render() {
        return (
            <HeaderContainer>
                <div className="HeadLogo">
                    <img src={Logo} alt=""/>
                </div>
                <div className="HeadTxt">
                    <div className="txtHome">Trang chủ</div>
                    <div className="txtUs">Về chúng tôi</div>
                </div>
                <div className="HeadBtn">
                    <button className="btn">Trở thành UNI</button>
                    <BsSearch className="icon"/>
                    <button className="btnLG">Đăng nhập</button>
                    <button className="btnRS">Đăng ký</button>
                </div>
            </HeaderContainer>
        )
    }
}

export default Header;

const HeaderContainer = styled.div`
    background-color: #100C2E;
    display: flex;

    .HeadLogo {
        padding-left: 30px;
        img {
            padding-top: 5px;
            width: 45%;
            border-radius: 27px;
            cursor: pointer;
        }
    }

    .HeadTxt {
        padding-right: 37%;
        padding-top: 13px;
        display: flex;
        .txtHome {
            width: 100px;
            color: white;
            text-align: left;
            cursor: pointer;
        }
    
        .txtUs {
            width: 150px;
            color: white;
            text-align: left;
            cursor: pointer;
        }
    }

    .HeadBtn {
        display: flex;
        padding-top: 7px;

        .btn {
            background-color: #2A235A;
            border-color: #2A235A;
            width: 170px;
            height: 40px;
            border-radius: 27px;
            color: white;
        }

        .btnLG {
            background-color: #2A235A;
            border-color: #2A235A;
            width: 130px;
            height: 40px;
            border-radius: 27px;
            margin-right: 30px;
            color: white;
        }

        .btnRS {
            background-color: #5B8FB9;
            border-color: #5B8FB9;
            width: 130px;
            height: 40px;
            border-radius: 27px;
            margin-right: 30px;
            color: white;
        }

        .icon {
            padding-top: 7px;
            padding-left: 15px;
            padding-right: 15px;
            color: white;
            width: 26px;
            height: 26px;
            cursor: pointer;
        }
    }
`