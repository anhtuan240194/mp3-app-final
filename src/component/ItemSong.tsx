import IconAvatar from "../assets/vol1.jpg"
import IconPlay from "../assets/play-button-inside-a-circle.svg"
import IconPause from "../assets/pause-button.svg"

export default function ItemSong(){
    return (
        <div className="item-song">
            
            <div className="infor-song">
                <div className="number">1</div>
                <div className="avatar_song">
                    <img src={IconAvatar} alt="Bài hát" />
                    <div className="position">
                        <img src={IconPlay} alt="Đang phát" />
                        <img src={IconPause} alt="Đang tắt" />
                    </div>
                    
                </div>
                <div className="name_song">
                    <div className="name">Mặt trái của sự thật</div>
                    <div className="brand">HKT</div>
                </div>
            </div>
            <div className="time_song">04:00</div>
        </div>
    )
}