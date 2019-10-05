import React, { Component } from 'react';
import './Main.scss';
import MapImg from '../../Images/tmpMapImg.png';


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
                                <div className="supportList">
                                    <div className="imgArea">
                                        <div className="map">
                                            <img className="tmpMapImg" src={MapImg} alt="임시 맵 이미지" />
                                            <div className="txtArea">
                                                <div className="supportTitle">브라질</div>
                                                <div className="supportNationDetail">
                                                    <a className="anchorNation" href="https://www.compassion.or.kr/sponsor/children/?c=0907324287&focus=Y">
                                                        자세히보기
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="imgShape">
                                            <img className="img" src="https://www.compassion.or.kr/common/img/main/support/america-support-4.jpg" alt=""/>
                                            <div className="supportTxt">
                                                <div className="supportTitle">학교 교육과 방과후 활동</div>
                                                <div className="supportDesc">컴퓨터, 재봉, 미용 등의 기술을 배우거나 스포츠 및 음악교실을 운영합니다.</div>
                                            </div>
                                        </div>
                                        <div className="imgShape">
                                            <img className="img" src="http://www.compassion.or.kr/common/img/main/support/america-support-5.jpg" alt=""/>
                                            <div className="supportTxt">
                                                <div className="supportTitle">멘토링</div>
                                                <div className="supportDesc">컴패션 선생님들은 어린이들의 교육 및 양육 관련 전반적인 멘토가 되어줍니다.</div>
                                            </div>
                                        </div>
                                        <div className="imgShape">
                                            <img className="img" src="https://www.compassion.or.kr/common/img/main/support/america-support-3.jpg" alt=""/>
                                            <div className="supportTxt">
                                                <div className="supportTitle">위생 교육</div>
                                                <div className="supportDesc">비누, 치약 등의 위생용품을 제공하고 청결을 유지하는 방법을 배웁니다.</div>
                                            </div>
                                       </div>
                                        <div className="imgShape">
                                            <img className="img" src="https://www.compassion.or.kr/common/img/main/support/america-support-1.jpg" alt=""/>
                                            <div className="supportTxt">
                                                <div className="supportTitle">건강 검진</div>
                                                <div className="supportDesc">정기적 건강검진을 통해 성장발달사항을 체크하며, 에이즈예방과 치료를 제공합니다.</div>
                                            </div>
                                        </div>
                                        <div className="imgShape">
                                            <img className="img" src="https://www.compassion.or.kr/common/img/main/support/america-support-2.jpg" alt=""/>
                                            <div className="supportTxt">
                                                <div className="supportTitle">영양보충</div>
                                                <div className="supportDesc">충분한 음식이 없는 어린이들에게 영양식과 비타민을 제공합니다.</div>
                                            </div>
                                        </div>
                                        <div className="imgShape">
                                            <img className="img" src="https://www.compassion.or.kr/common/img/main/support/america-support-6.jpg" alt=""/>
                                            <div className="supportTxt">
                                                <div className="supportTitle">신앙 활동</div>
                                                <div className="supportDesc">연령에 맞는 신앙 활동을 통해 예수님의 사랑을 배웁니다.</div>
                                            </div>
                                        </div>
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