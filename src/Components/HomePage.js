import React, { Component } from "react";
import View from "../images/View.png";
import Ava from "../images/Ava.png";
import styled from "styled-components";
import {AiFillStar} from "react-icons/ai";
import {RiMoneyDollarCircleFill} from "react-icons/ri"

class HomePage extends Component {
    render() {
        return(
            <HomeContainer>
                <div className="ViewImg">
                    <img src={View} alt=""/>
                </div>
                <div className="ViewCategory">
                    <div className="Category">Danh mục</div>
                    <div className="ViewBtn">
                        <button className="btn">Ngôn ngữ Nhật</button>
                        <button className="btn">Ngôn ngữ Anh</button>
                        <button className="btn">Ngôn ngữ Trung</button>
                        <button className="btn">Thiết kế đồ họa</button>
                        <button className="btn">Kỹ thuật phần mềm</button>
                        <button className="btn">Quản trị khách sạn</button>
                        <button className="btn">Kinh doanh quốc tế</button>
                    </div>
                </div>
                <div className="ViewTeacher">
                    <div className="Teacher">Teacher</div>
                    <div className="TeacherBtn">
                        <button className="btn">
                            <img src={Ava} alt=""/>
                            <div className="txtTeacher">Thu Uyên</div>
                            <div className="txtStar"><AiFillStar className="iconStar"/>5,0 (100)</div>
                            <div className="txtMoney"><RiMoneyDollarCircleFill className="iconMoney"/>50.000/1h</div>
                            <div className="txtClass">JPD201</div>
                        </button>
                        <button className="btn">
                            <img src={Ava} alt=""/>
                            <div className="txtTeacher">Thu Uyên</div>
                            <div className="txtStar"><AiFillStar className="iconStar"/>5,0 (100)</div>
                            <div className="txtMoney"><RiMoneyDollarCircleFill className="iconMoney"/>50.000/1h</div>
                            <div className="txtClass">JPD201</div>
                        </button>
                        <button className="btn">
                            <img src={Ava} alt=""/>
                            <div className="txtTeacher">Thu Uyên</div>
                            <div className="txtStar"><AiFillStar className="iconStar"/>5,0 (100)</div>
                            <div className="txtMoney"><RiMoneyDollarCircleFill className="iconMoney"/>50.000/1h</div>
                            <div className="txtClass">JPD201</div>
                        </button>
                        <button className="btn">
                            <img src={Ava} alt=""/>
                            <div className="txtTeacher">Thu Uyên</div>
                            <div className="txtStar"><AiFillStar className="iconStar"/>5,0 (100)</div>
                            <div className="txtMoney"><RiMoneyDollarCircleFill className="iconMoney"/>50.000/1h</div>
                            <div className="txtClass">JPD201</div>
                        </button>
                    </div>
                    <div className="TeacherBtn">
                        <button className="btn">
                            <img src={Ava} alt=""/>
                            <div className="txtTeacher">Thu Uyên</div>
                            <div className="txtStar"><AiFillStar className="iconStar"/>5,0 (100)</div>
                            <div className="txtMoney"><RiMoneyDollarCircleFill className="iconMoney"/>50.000/1h</div>
                            <div className="txtClass">JPD201</div>
                        </button>
                        <button className="btn">
                            <img src={Ava} alt=""/>
                            <div className="txtTeacher">Thu Uyên</div>
                            <div className="txtStar"><AiFillStar className="iconStar"/>5,0 (100)</div>
                            <div className="txtMoney"><RiMoneyDollarCircleFill className="iconMoney"/>50.000/1h</div>
                            <div className="txtClass">JPD201</div>
                        </button>
                        <button className="btn">
                            <img src={Ava} alt=""/>
                            <div className="txtTeacher">Thu Uyên</div>
                            <div className="txtStar"><AiFillStar className="iconStar"/>5,0 (100)</div>
                            <div className="txtMoney"><RiMoneyDollarCircleFill className="iconMoney"/>50.000/1h</div>
                            <div className="txtClass">JPD201</div>
                        </button>
                        <button className="btn">
                            <img src={Ava} alt=""/>
                            <div className="txtTeacher">Thu Uyên</div>
                            <div className="txtStar"><AiFillStar className="iconStar"/>5,0 (100)</div>
                            <div className="txtMoney"><RiMoneyDollarCircleFill className="iconMoney"/>50.000/1h</div>
                            <div className="txtClass">JPD201</div>
                        </button>
                    </div>
                    <div className="TeacherBtn">
                        <button className="btn">
                            <img src={Ava} alt=""/>
                            <div className="txtTeacher">Thu Uyên</div>
                            <div className="txtStar"><AiFillStar className="iconStar"/>5,0 (100)</div>
                            <div className="txtMoney"><RiMoneyDollarCircleFill className="iconMoney"/>50.000/1h</div>
                            <div className="txtClass">JPD201</div>
                        </button>
                        <button className="btn">
                            <img src={Ava} alt=""/>
                            <div className="txtTeacher">Thu Uyên</div>
                            <div className="txtStar"><AiFillStar className="iconStar"/>5,0 (100)</div>
                            <div className="txtMoney"><RiMoneyDollarCircleFill className="iconMoney"/>50.000/1h</div>
                            <div className="txtClass">JPD201</div>
                        </button>
                        <button className="btn">
                            <img src={Ava} alt=""/>
                            <div className="txtTeacher">Thu Uyên</div>
                            <div className="txtStar"><AiFillStar className="iconStar"/>5,0 (100)</div>
                            <div className="txtMoney"><RiMoneyDollarCircleFill className="iconMoney"/>50.000/1h</div>
                            <div className="txtClass">JPD201</div>
                        </button>
                        <button className="btn">
                            <img src={Ava} alt=""/>
                            <div className="txtTeacher">Thu Uyên</div>
                            <div className="txtStar"><AiFillStar className="iconStar"/>5,0 (100)</div>
                            <div className="txtMoney"><RiMoneyDollarCircleFill className="iconMoney"/>50.000/1h</div>
                            <div className="txtClass">JPD201</div>
                        </button>
                    </div>
                </div>
            </HomeContainer>
        )
    }
}

export default HomePage;

const HomeContainer = styled.div`
    background-color: #03001C;
    .ViewImg {
        padding-top: 30px;
        img {
            width: 85%;
            padding-left: 100px;
            padding-right: 100px;
            border-radius: 10%;
        }
    }

    .ViewCategory {
        .Category {
            color: white;
            font-weight: 600;
            font-size: 30px;
            padding-left: 100px;
            padding-top: 50px;
            padding-bottom: 50px;
        }
        .ViewBtn {
            padding-left: 100px;
            display: flex;
            .btn {
                background-color: #140F39;
                color: white;
                font-size: 40px;
                font-weight: 600;
                border-radius: 20px;
                margin-right: 36px;
                width: 150px;
                height: 250px;
                cursor: pointer;
            }
        }
    }

    .ViewTeacher {
        .Teacher {
            color: white;
            font-weight: 600;
            font-size: 30px;
            padding-left: 100px;
            padding-top: 50px;
            padding-bottom: 50px;
        }
        .TeacherBtn {
            padding-left: 100px;
            padding-bottom: 100px;
            display: flex;
            .btn {
                background-color: #140F39;
                color: white;
                font-size: 40px;
                font-weight: 600;
                border-radius: 10px;
                margin-right: 36px;
                margin-top: 50px;
                width: 290px;
                height: 290px;
                cursor: pointer;
                position: relative;

                img {
                    width: 180px;
                    border-radius: 18px;
                    position: absolute;
                    top: -50px;
                    left: 10%;
                }

                .txtTeacher {
                    font-size: 25px;
                    padding-top: 100px;
                    padding-bottom: 5px;
                    padding-left: 15px;
                    text-align: left;
                }
                .txtStar {
                    font-size: 20px;
                    text-align: left;
                    padding-bottom: 5px;
                    padding-left: 15px;

                    .iconStar {
                        color: yellow;
                    }
                }
                .txtMoney {
                    font-size: 20px;
                    text-align: left;
                    padding-bottom: 5px;
                    padding-left: 15px;

                    .iconMoney {
                        color: #5B8FB9;
                    }
                }

                .txtClass {
                    position: absolute;
                    background-color: #5B8FB9;
                    font-size: 20px;
                    padding-top: 10px;
                    padding-bottom: 10px;
                    padding-left: 10px;
                    padding-right: 10px;
                    right: 0;
                    bottom: 0;
                    border-radius: 10px 0px 10px 0px;
                }
            }
        }
    }

`