import IconSong from "../assets/library-music.svg"
import ItemSong from "./ItemSong"

export default function ListAlbum(){
    return (
        <div className="list_song">
            <div className="header_list">
                <div className="title1"><img src={IconSong} alt="Bài hát" />Bài hát</div>
                <div className="title2">Thời gian</div>
            </div>
            <div className="album_list_song">
                <ItemSong/>
            </div>
        </div>
    )
}