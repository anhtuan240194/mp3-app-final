import AvatarIcon from "../assets/vol1.jpg"

export default function ImageAlbum() {
    return (
        <div className="avatar-music">
            <img src={AvatarIcon} alt="album" />
            <div className="name_album">Mặt trái của sự thật</div>
            <div className="brand_album">HKT - 2011</div>
            <div className="wish_count">8000 nguoi yeu thich</div>
            <div className="lyrics">Sau hơn một năm ấp ủ, cuối cùng thì tháng 2 năm 2011, Album Vol 5 của HKT cũng được phát hành làm náo nức Fan hâm mộ cả nước. Trong album này HKT như được lột xác với phong cách chững chạc hơn, ngoài Dance sôi động, còn kết hợp với Pop trữ tình.</div>
        </div>
    )
}