import React, { Component } from "react";
import './Footer.scss';

class Footer extends Component {
    render(){
        return(
            <div className = "footer">
                <div className = "footerWrap">
                    <div className = "snsArea">
                        <ul className = "utilMenu">
                            <li>
                                <a href="https://www.compassion.or.kr/etc/terms/" className="gray" alt="">이용약관</a>
                            </li>
                            <li>
                                <a href="https://www.compassion.or.kr/etc/privacy/" className="" alt="">개인정보 처리방침</a>
                            </li>
                            <li>
                                <a href="https://www.compassion.or.kr/etc/recruit/" className="gray" alt="">인재채용</a>
                            </li>
                            <li>
                                <a href="https://www.compassion.or.kr/etc/customer/faq/" className="gray" alt="">FAQ</a>
                            </li>
                            <li>
                                <a href="https://113366.com/compassion" target="_blank" rel="noopener noreferrer" className="gray" alt="" >원격지원</a>
                            </li>
                            <li>
                                <a href="https://mate.compassion.or.kr" target="_blank" rel="noopener noreferrer" className="gray" alt="" >컴패션메이트</a>
                            </li>
                            <li>
                                <a href="https://www.huheye.com" target="_blank" rel="noopener noreferrer" className="gallery" alt="" >허호아이갤러리</a>
                            </li>
                        </ul>
                        <ul className="snsIcon">
                            <li>
                                <a href="https://www.facebook.com/compassion.Korea" target="blank" className="facebook" rel="noopener noreferrer">
                                    facebook
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/user/CompassionKR" target="blank" className="youtube" rel="noopener noreferrer">
                                    youtube
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/compassionkorea/" target="blank" className="instagram" rel="noopener noreferrer">
                                    instagram
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/compassionkorea" target="blank" className="twitter" rel="noopener noreferrer">
                                    twitter
                                </a>
                            </li>
                            <li>
                                <a href="https://pf.kakao.com/_YKgWxd" target="blank" className="yellow" rel="noopener noreferrer">
                                    yellow
                                </a>
                            </li>
                            <li>
                                <a href="https://happylog.naver.com/compassion.do" target="blank" className="naverCafe" rel="noopener noreferrer">
                                    naver_cafe
                                </a>
                            </li>
                            <li>
                                <a href="https://blog.naver.com/compassionkorea" target="blank" className="naverBlog" rel="noopener noreferrer">
                                    naver_blog
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className ="mapArea">
                        <ul className = "footerMap">
                            <li>
                                <p className ="fmapTitle">후원</p>
                                <ul className ="fmapList">
                                    <li>
                                        <a href="https://www.compassion.or.kr/sponsor/children/">1:1어린이양육</a>
                                    </li>
                                    <li>
                                        <a href="https://www.compassion.or.kr/sponsor/special/">특별한 나눔</a>
                                    </li>
                                    <li>
                                        <a href="https://www.compassion.or.kr/sponsor/user-funding/">나눔펀딩</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p className ="fmapTitle">참여</p>
                                <ul className="fmapList">
                                    <li>
                                        <a href="https://www.compassion.or.kr/participation/event/">캠페인/이벤트</a> 
                                    </li>
                                    <li>
                                        <a href="https://www.compassion.or.kr/participation/experience">체험전</a>
                                    </li>
                                    <li>
                                        <a href="https://www.compassion.or.kr/participation/visiontrip/">비전트립</a>
                                    </li>
                                    <li>
                                        <a href="https://www.compassion.or.kr/participation/church/">교회협력</a>
                                    </li>
                                    <li>
                                        <a href="https://www.compassion.or.kr/participation/nk/">북한사역</a>
                                    </li>
                                    <li>
                                        <a href="https://www.compassion.or.kr/participation/sponsor">기업사회공헌</a>
                                    </li>
                                    <li>
                                        <a href="https://www.compassion.or.kr/participation/mate">컴패션메이트</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p className ="fmapTitle">공감</p>
                                <ul className ="fmapList">
                                    <li>
                                        <a href="https://www.compassion.or.kr/sympathy/child">꿈꾸는 어린이</a>
                                    </li>
                                    <li>
                                        <a href="https://www.compassion.or.kr/sympathy/sponsor">꿈을 심는 후원자</a>
                                    </li>
                                    <li>
                                        <a href="https://www.compassion.or.kr/sympathy/vision/vision">비전트립 다이어리</a>
                                    </li>
                                    <li>
                                        <a href="https://www.compassion.or.kr/sympathy/essay">함께 쓰는 에세이</a>
                                    </li>
                                    <li>
                                        <a href="https://www.compassion.or.kr/sympathy/bluebook">컴패션블루북</a>
                                    </li>
                                    <li>
                                        <a href="https://www.compassion.or.kr/sympathy/social-hub/">꿈을 나누는 SNS</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p className ="fmapTitle">소개</p>
                                <ul className ="fmapList">
                                    <li>
                                        <a href="https://www.compassion.or.kr/about-us/about/">컴패션 소개</a>
                                    </li>
                                    <li>
                                        <a href="https://www.compassion.or.kr/about-us/world-map/">함께하는 나라</a>
                                    </li>
                                    <li>
                                        <a href="https://www.compassion.or.kr/about-us/law_observance/">투명경영</a>
                                    </li>
                                    <li>
                                        <a href="https://www.compassion.or.kr/about-us/honorary-ambassador/">홍보대사</a> 
                                    </li>
                                    <li>
                                        <a href="https://www.compassion.or.kr/about-us/notice/">공지사항</a>
                                    </li>
                                    <li>
                                        <a href="https://www.compassion.or.kr/about-us/press/">언론보도</a>
                                    </li>
                                    <li>
                                        <a href="https://www.compassion.or.kr/about-us/newsletter/">뉴스레터</a> 
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p className ="fmapTitle">애드보킷</p>
                                <ul className = "fmapList">
                                    <li>
                                        <a href="https://www.compassion.or.kr/advocate/about">애드보킷 소개</a>
                                    </li>
                                    <li>
                                        <a href="https://www.compassion.or.kr/advocate/together/">함께하기</a>
                                    </li>
                                    <li>
                                        <a href="https://www.compassion.or.kr/advocate/notice/">활동공지</a>
                                    </li>
                                    <li>
                                        <a href="https://www.compassion.or.kr/advocate/share/">활동공유</a>
                                    </li>
                                    <li>
                                        <a href="https://www.compassion.or.kr/advocate/download/">자료실</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    
                </div>
               
            </div>
        )
    }
}
export default Footer;