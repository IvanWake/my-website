import gitHub from '../assets/img/gitHub.svg';
import telegram from '../assets/img/telegram.svg';
import IForPC from '../assets/img/IForPC.jpg';
import { Link, animateScroll as scroll } from "react-scroll";

const Footer = () => {
    return (
        <div className="px-[6.25rem] mt-[8.5rem] pb-[8.5rem]">
            <div className="flex justify-between">
                <div className="flex flex-col">
                    <div className="flex flex-col">
                        <h1 id="contactsFoot"
                            className="font-cregular text-[6rem] text-white tracking-wide">КОНТАКТЫ</h1>
                        <div className="flex flex-col">
                            <a href="https://github.com/IvanWake">
                                <div className="flex items-center space-x-[10px]">
                                    <img src={gitHub} alt=""/>
                                    <h1 className="text-[20px]">GITHUB</h1>
                                </div>
                            </a>
                            <a href="https://t.me/purplebaby15">
                                <div className="flex items-center space-x-[10px]">
                                    <img src={telegram} alt=""/>
                                    <h1 className="text-[20px]">TELEGRAM</h1>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <img src={IForPC} alt=""/>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex space-x-[3.125rem] font-cbook text-[20px]">
                    <a href="https://t.me/purplebaby15" target="_blank"><span
                        className="text-[#717171]">COPYRIGHT | </span>IVAN TIMOFEYEV</a>
                    <a href="https://t.me/Ilya_Pakhomov_Designer" target="_blank"><span className="text-[#717171]">DESIGN | </span>ILYA
                        PAKHOMOV</a>
                </div>
                <div className="flex flex-col">
                    <Link
                        to="guitar"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1700}
                    >
                        <div className="text-[20px] font-cmedium cursor-pointer">ГИТАРА</div>
                    </Link>
                    <Link
                        to="gymWork"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1100}
                    >
                        <div className="text-[20px] font-cmedium cursor-pointer">СПОРТЗАЛ</div>
                    </Link>
                    <Link
                        to="webDev"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={600}
                    >
                        <div className="text-[20px] font-cmedium cursor-pointer">ВЕБ-РАЗРАБОТКА</div>
                    </Link>
                </div>
                <div
                    onClick={scroll.scrollToTop}
                    className="flex items-end justify-end text-2xl font-cbook cursor-pointer">
                    НАВЕРХ
                </div>
            </div>
        </div>
    );
}

export default Footer;