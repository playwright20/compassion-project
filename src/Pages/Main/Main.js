import React, { Component } from 'react';
import './Main.scss';


class Main extends Component {

    render(){
        return(
            <>     
                <div className="Main">
                    <div className="mainWrap">
                        <a className="mainBannerBack" href="/">
                            <img className="mainBannerImg_1" src="https://www.compassion.or.kr/images/main-visual/title-pc-mainbnr1920481(200kb)(4).jpg" alt=""/>
                        </a>
                        <div className="mainChild">
                            <div className="mainChildRecom">
                                <div className="mainTitle">
                                    <div className="mainTitleBox">
                                        <h2 className="mainTitleTextWrap">
                                            <span className="mainTitleText">
                                                1:1 어린이 추천
                                            </span>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div className="mainChildRecomSection">
                                <div className="picWrap">
                                    <div className="imgChild">
                                        <img className="recomChildImg" src="https://media.ci.org/w_300/v1548163441/ChildPhotos/Published/07324287_eddvam.jpg" alt="추천 어린이" />
                                    </div>
                                </div>
                                <div className="textWrap">
                                    <span className="labelChild">
                                        <span className="labelTxt">1:1 양육</span>
                                    </span>
                                    <div className="title">
                                        내일을 꿈꾸고 싶어요
                                    </div>
                                    <p className="childGreetingWord">
                                        안녕하세요,
                                        브라질에 사는 
                                        가브리에우입니다.<br/>

                                        저는 오늘로 247일째 후원자님을 기다리고 있어요. <br/>
                                        아직 후원자님을 만나지는 못했지만,<br/>
                                        얼른 후원자님을 만나 편지를 주고 받고 싶어요.<br/>
                                        저의 후원자님이 되어주시겠어요?
                                    </p>
                                    <div className="childSetBtns">
                                        <a className="childMoreBtnL" href="https://www.compassion.or.kr/sponsor/children/?c=0907324287">
                                            가브리에우에 대해 자세히 알고 싶어요
                                        </a>
                                        <a className="childMoreBtnR" href="https://www.compassion.or.kr/sponsor/children/">
                                            다른 어린이도 만나볼래요
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="mainChildSupport">
                                <div className="mainTitle">
                                    <div className="mainTitleBox">
                                        <h2 className="mainTitleTextWrap">
                                            <span className="mainTitleText">
                                                가브리에우에는(은) 어떤 지원을 받나요?
                                            </span>
                                        </h2>
                                    </div>
                                </div> 
                                <div className="map">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <Footer/> */}
            </>
        );
    }
}

export default Main;