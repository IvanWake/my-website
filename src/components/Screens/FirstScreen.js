import {Link} from "react-scroll";

const FirstScreen = () => {
    return (
        <div className="bg-guitar bg-cover bg-center h-[1080px] px-[6.25rem]">
            <div className="flex justify-center items-center pt-[50px]">
                <header className="flex justify-center items-center text-white space-x-[20px]">
                    <Link
                        to="guitar"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={600}
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
                        duration={1700}
                    >
                        <div className="text-[20px] font-cmedium cursor-pointer">ВЕБ-РАЗРАБОТКА</div>
                    </Link>
                </header>
                <Link
                    to="contactsFoot"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={1700}
                >
                    <button
                        className="absolute right-[6.25rem] font-cmedium text-white border-[1px] px-[15px] py-[15px] text-[20px] text-center">
                        контакты
                    </button>
                </Link>
            </div>
            <div>
                <h1 className="whitespace-normal font-cregular text-[6rem] text-white mt-[8rem] w-[51rem] leading-[96px]">TIMOFEYEV
                    IVAN, FULL-STACK DEVELOPER</h1>
                <div className="flex justify-end">
                    <p className="whitespace-normal font-cbook text-white w-[40rem] text-[24px]">Lorem Ipsum - это
                        текст-"рыба», часто используемый в
                        печати и вэб-дизайне. Lorem Ipsum является стандартной «рыбой» для текстов на латинице с начала
                        XVI
                        века</p>
                </div>
            </div>
        </div>
    );
}

export default FirstScreen;