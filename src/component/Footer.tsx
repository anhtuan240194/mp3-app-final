import AvatarIcon from "../assets/vol1.jpg"
import Heart from "../assets/heart.svg"
import SouffleIcon from "../assets/random.svg"
import PrevIcon from "../assets/previous.svg"
import PlayIcon from "../assets/play-button-inside-a-circle.svg"
import PauseIcon from "../assets/pause-button.svg"
import NextIcon from "../assets/next-button.svg"
import RepeatIcon from "../assets/swap.svg"
import VolumeIcon from "../assets/speaker-filled-audio-tool.svg"
import MvIcon from "../assets/video-player.svg"
import MuteIcon from "../assets/mute.svg"

import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';

export default function Footer(){
    return (
        <div className="footer">
            <div className="footer-left">
                <img className="footer-avatar" src={AvatarIcon} alt="" />
                <div style={{ marginLeft: '0.5rem' }}>
                    <div className="name-music">Ten bai hat</div>
                    <div className="brand-music">HKT</div>
                </div>
                <img className="whishlist" src={Heart} alt="Yêu thích"/>
            </div>

            <div className="footer-center">
                <div className="footer_action-music">
                    <Button>
                        <img src={SouffleIcon} alt="Xáo trộn" />
                    </Button>
                    <Button>
                        <img src={PrevIcon} alt="Lùi lại" />
                    </Button>
                    <Button className="button_play">
                        <img src={PlayIcon} alt="Phát nhạc" />
                    </Button>
                    <Button className="button_pause">
                        <img src={PauseIcon} alt="Dừng nhạc" />
                    </Button>
                    <Button>
                        <img src={NextIcon} alt="Bài tiếp theo" />
                    </Button>
                    <Button>
                        <img src={RepeatIcon} alt="Lặp lại" />
                    </Button>
                </div>
                <div className="footer_timeline-music">
                    <span className="time-start">00:00</span>
                    <Form.Range className="input-timeline"></Form.Range>
                    <span className="time-end">04:33</span>
                </div>
            </div>

            <div className="footer-right">
                <div className="footer_mv">
                    <img src={MvIcon} alt="Xem Mv" />
                </div>
                <Button>
                    <img src={VolumeIcon} alt="Tắt tiếng" />
                    <img src={MuteIcon} alt="Bật tiếng" />
                </Button>
                <Form.Range></Form.Range>
            </div>
        </div>
    )
}