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
                                        <img className="recomChildImg" src="https://media.ci.org/w_300/v1548236016/ChildPhotos/Published/08597344_cjlzsm.jpg" alt="추천 어린이" />
                                    </div>
                                </div>
                                <div className="textWrap">
                                    <span className="labelChild">
                                        <span className="labelTxt">1:1 양육</span>
                                    </span>
                                    <div className="title">
                                        내일을 꿈꾸고 싶어요
                                    </div>
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