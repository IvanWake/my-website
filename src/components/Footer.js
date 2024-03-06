import gitHub from '../assets/img/gitHub.svg';
import telegram from '../assets/img/telegram.svg';
import notion from '../assets/img/notion.svg';
import instagram from '../assets/img/instagram.svg';
import IForPC from '../assets/img/IForPC.jpg';
import { Link, animateScroll as scroll } from "react-scroll";

const Footer = () => {
    return (
        <div className="px-[6.25rem] mt-[8.5rem] pb-[8.5rem]">
            <div className="flex justify-between">
                <div className="flex flex-col">
                    <div className="flex flex-col">
                        <h1 id="contactsFoot"
                            className="font-cregular text-[6rem] text-white tracking-wide">
                            КОНТАКТЫ
                        </h1>
                        <div className="flex space-x-[5rem]">
                            <div className="flex flex-col">
                                <a href="https://github.com/IvanWake">
                                    <div className="flex items-center space-x-[10px]">
                                        <img src={gitHub} alt="github"/>
                                        <h1 className="text-[20px]">GITHUB</h1>
                                    </div>
                                </a>
                                <a href="https://t.me/purplebaby15">
                                    <div className="flex items-center space-x-[10px]">
                                        <img src={telegram} alt="telegram"/>
                                        <h1 className="text-[20px]">TELEGRAM</h1>
                                    </div>
                                </a>
                            </div>
                            <div className="flex flex-col">
                                <a href="https://www.instagram.com/purplebaby_dev/">
                                    <div className="flex items-center space-x-[10px]">
                                        <img src={instagram} alt="inst" width="90"/>
                                        <h1 className="text-[20px]">INSTAGRAM</h1>
                                    </div>
                                </a>
                                <a href="https://efficacious-moonstone-841.notion.site/9bcc7dbda01e4de381e9b557d7e80f84?pvs=4">
                                    <div className="flex items-center space-x-[10px]">
                                        <img src={notion} alt="notion" width="105"/>
                                        <h1 className="text-[20px]">NOTION</h1>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={IForPC} alt=""/>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex space-x-[3.125rem] font-cbook text-[20px]">
                    <a href="https://t.me/purplebaby15" target="_blank"><span
                        className="text-[#717171]">COPYRIGHT | </span>
                        <span className="hover:underline">IVAN WAKE
                        </span>
                    </a>
                    <a href="https://t.me/Ilya_Pakhomov_Designer" target="_blank">
                        <span className="text-[#717171]">
                        DESIGN | </span>
                        <span className="hover:underline">ILYA PAKHOMOV</span>
                    </a>
                </div>
                <div className="flex flex-col">
                    <Link
                        to="guitar"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1700}
                    >
                        <div className="text-[20px] font-cmedium cursor-pointer hover:underline">ГИТАРА</div>
                    </Link>
                    <Link
                        to="gymWork"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1100}
                    >
                        <div className="text-[20px] font-cmedium cursor-pointer hover:underline">СПОРТЗАЛ</div>
                    </Link>
                    <Link
                        to="webDev"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={600}
                    >
                        <div className="text-[20px] font-cmedium cursor-pointer hover:underline">ВЕБ-РАЗРАБОТКА</div>
                    </Link>
                </div>
                <div
                    onClick={scroll.scrollToTop}
                    className="flex items-end justify-end text-2xl font-cbook cursor-pointer hover:underline">
                    НАВЕРХ
                </div>
            </div>
        </div>
    );
}

export default Footer;