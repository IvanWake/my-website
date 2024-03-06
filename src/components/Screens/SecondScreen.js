import guitar1 from '../../assets/img/guitar1.jpg';
import guitar2 from '../../assets/img/guitar2.jpg';
import guitar3 from '../../assets/img/guitar3.jpg';
import guitar4 from '../../assets/img/guitar4.jpg';
import IwithHeadpones from '../../assets/img/IwithHeadpones.jpg';

const SecondScreen = () => {
    return (
        <div className="px-[6.25rem] mt-[15.25rem]">
                <h1 id="guitar" className="text-[6rem] text-white font-cregular leading-[96px] w-[9rem]">ИГРАЮ НА ГИТАРЕ</h1>
            <div className="flex mt-[9.375rem] space-x-[1.875rem]">
                <img src={guitar1} alt="guitar1" width="23.26%"/>
                <img src={guitar2} alt="guitar2" width="23.26%"/>
                <img src={guitar3} alt="guitar3" width="36.63%"/>
                <img src={guitar4} alt="guitar4" width="11.63%"/>
            </div>
            <div className="mt-[6.25rem]">
                <h1 className="text-4xl font-cmedium">ГИТАРА - МОЁ ОСНОВНОЕ ХОББИ</h1>
                <p className="font-clight text-2xl mt-10 w-[40.875rem]">Играю в свободное время, несколько раз в неделю
                    (3–4 раза в неделю, 1–3 часа в день)
                    Играю в основном песни таких групп как: КИНО, Наутилус Помпилиус, ДДТ, Сплин и др</p>
            </div>
            <div>
                <div className="flex justify-end">
                    <div className="flex flex-col mr-[3.75rem]">
                        <h1 className="text-4xl w-[40rem] whitespace-normal text-white font-cmedium">ИГРАЯ НА ГИТАРЕ ПОЛУЧАЕШЬ
                        </h1>
                        <h1 className="text-4xl w-[50rem] whitespace-normal text-white font-cmedium ">НЕ ТОЛЬКО УДОВОЛЬСТВИЕ, НО И БОЛЬ
                        </h1>
                        <div className="mt-10">
                            <p className="text-[20px] w-[34rem] leading-[28px] font-cbook">Играешь песню, вроде все классно и в какой‑то момент не дожимаешь баррэ :)</p>
                        </div>
                    </div>
                    <div className="mr-[6.25rem]">
                        <img src={IwithHeadpones} alt="yaWithHeadpones"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SecondScreen;