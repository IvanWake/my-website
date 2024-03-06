import gym1 from '../../assets/img/gym1.jpg'
import gym2 from '../../assets/img/gym2.jpg'
import gym3 from '../../assets/img/gym3.jpg'

const ThirdScreen = () => {
    return (
        <div className="px-[6.25rem] mt-[18.75rem]">
            <h1 id="gymWork"
                className="whitespace-normal font-cregular text-[6rem] text-white mt-[8rem] w-[50rem] leading-[96px] tracking-wide">
                ЗАНИМАЮСЬ В СПОРТ-ЗАЛЕ
            </h1>
                <div className="flex space-x-[2.2%] justify-center mt-[6.25rem]">
                    <div className="h-[75%] flex"><img src={gym1} alt="gym1"/></div>
                    <div className="flex flex-col">
                        <img src={gym2} alt="gym2"/>
                            <p className="w-[30.25rem] whitespace-normal text-2xl font-cbook mt-[5rem]">
                                Занимаюсь в спорт-зале для снятия стресса и чтобы быть в тонусе.
                                После спортзала ощущаю себя лучше как ментально, так и физически.
                                Занимаюсь 3 раза в неделю по вечерам (такая вот полная разрядка перед сном)
                            </p>
                    </div>
                    <div className="h-[75%] flex">
                        <img src={gym3} alt="gym3"/>
                    </div>
                </div>
        </div>
    );
}

export default ThirdScreen;