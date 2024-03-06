import gitHub from '../assets/img/gitHub.svg';
import telegram from '../assets/img/telegram.svg';
import IForPC from '../assets/img/IForPC.jpg';

const Footer = () => {
    return (
        <div className="px-[6.25rem] mt-[8.5rem] pb-[8.5rem]">
            <div className="flex justify-between">
                <div className="flex flex-col">
                    <div className="flex flex-col">
                        <h1 id="contactsFoot"
                            className="font-cregular text-[6rem] text-white tracking-wide">КОНТАКТЫ</h1>
                        <div className="flex flex-col">
                            <div className="flex items-center space-x-[10px]">
                                <img src={gitHub} alt=""/>
                                <h1 className="text-[20px]">GITHUB</h1>
                            </div>
                            <div className="flex items-center space-x-[10px]">
                                <img src={telegram} alt=""/>
                                <h1 className="text-[20px]">TELEGRAM</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={IForPC} alt=""/>
            </div>
            <div>
                <div className="flex space-x-[3.125rem] font-cbook text-[20px]">
                    <a href="https://t.me/purplebaby15" target="_blank"><span className="text-[#717171]">COPYRIGHT | </span>IVAN TIMOFEYEV</a>
                    <a href="https://t.me/Ilya_Pakhomov_Designer" target="_blank"><span className="text-[#717171]">DESIGN | </span>ILYA PAKHOMOV</a>
                </div>
                <div>
                    <a href=""></a>
                    <a href=""></a>
                    <a href=""></a>
                </div>
                <a href=""></a>
            </div>
        </div>
    );
}

export default Footer;