import Logo from "../assets/logo.png"
import DiscoveryIcon from "../assets/discovery.svg"
import RockRollIcon from "../assets/microphone.svg"
import LibaryIcon from "../assets/library-music.svg"
import ListAlbumIcon from "../assets/list-album.svg"

import { Nav } from "react-bootstrap"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-logo">
                <img src={Logo} alt="logo" />
            </div>
            <div className="sidebar-nav">
                <Nav className="nav_1">
                    <Nav.Item>
                        <img src={DiscoveryIcon} alt="Khám phá " />
                        <Nav.Link href="/">
                            Khám phá 
                        </Nav.Link>

                    </Nav.Item>
                    <Nav.Item>
                        <img src={ListAlbumIcon} alt="Hot Music " />
                        <Nav.Link href="/">
                            Hot Music 
                        </Nav.Link>

                    </Nav.Item>
                    <Nav.Item>
                        <img src={RockRollIcon} alt="Rock & Roll " />
                        <Nav.Link href="/">
                            Rock & Roll 
                        </Nav.Link>

                    </Nav.Item>
                    <Nav.Item>
                        <img src={LibaryIcon} alt="Thư viện âm nhạc" />
                        <Nav.Link href="/">
                            Thư viện âm nhạc
                        </Nav.Link>

                    </Nav.Item>
                </Nav>

                <Nav className="nav-2">
                    <Nav.Item>
                        <img src={ListAlbumIcon} alt="BXH nhạc mới" />
                        <Nav.Link href="/">
                            BXH nhạc mới
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <img src={ListAlbumIcon} alt="Nhạc theo chủ đề" />
                        <Nav.Link href="/">
                            Nhạc theo chủ đề
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <img src={ListAlbumIcon} alt="Top 11 music" />
                        <Nav.Link href="/">
                            Top 11 music
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        </div>
    )
}