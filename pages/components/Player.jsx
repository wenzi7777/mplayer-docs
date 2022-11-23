import React from "react";
import Hls from "hls.js";

class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mplayer: undefined
        }
    }

    componentDidMount() {
        const MPlayer = require('../../public/mplayer.bundle.min')
        const flvjs = require('../../public/flv.min')
        window.Hls = Hls
        window.flvjs = flvjs
        this.state.mplayer = new MPlayer(document.getElementById('mplayer'), {
            lang: 'zh_CN',
            playerMode: 'normal',
            autoplay: false,
            hints: {
                enabled: true,
                elements: [
                    {
                        start: 10,
                        end: 20,
                        html: `<h1>TEST HINT</h1>`
                    }
                ]
            },
            theme: '#39c5bb',
            loop: false,
            tools: ['timeline', 'playPause', 'volumeControl', 'durationViewer', 'screenshot', 'playerSettings', 'enablePlaylist', 'subtitles', 'miniPlayer', 'theaterMode', 'fullscreen'],
            hotkey: true,
            preload: false,
            volume: 1,
            playbackRates: [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2],
            index: 1,
            infoPanel: ['basicVideoInfo', 'playerFPS', 'videoURL', 'connectionStatus', 'date', 'playerInfo'],
            contextMenu: [
                {
                    title: '关于MPlayer',
                    targetFunction: 'openLink',
                    params: `https://mplayer.1205.moe/`
                },
                {
                    title: '播放器信息',
                    targetFunction: 'toggleInfoPanel'
                }
            ],
            videos: [
                {
                    title: '[hls, subtitles, qualities]Plastic Memories EP. 1',
                    src: "https://mplayer-demo-1255545160.cos.ap-nanjing.myqcloud.com/PlasticMemories/ep1/hls/PlasticMemoriesEP1.m3u8",
                    tracks: [
                        {
                            srclang: 'zh_CN',
                            src: 'https://mplayer-demo-1255545160.cos.ap-nanjing.myqcloud.com/PlasticMemories/ep1/subtitles/PlasticMemoriesEP1.sc.vtt',
                            label: "简体字",
                            kind: "captions"
                        },
                        {
                            srclang: 'zh_TW',
                            src: 'https://mplayer-demo-1255545160.cos.ap-nanjing.myqcloud.com/PlasticMemories/ep1/subtitles/PlasticMemoriesEP1.tc.vtt',
                            label: "正體字",
                            kind: "captions"
                        }
                    ],
                    images: ['https://mplayer-demo-1255545160.cos.ap-nanjing.myqcloud.com/PlasticMemories/ep1/images/isla.jpg']
                },
                {
                    title: '[native]Plastic Memories EP. 2',
                    src: "https://mplayer-demo-1255545160.cos.ap-nanjing.myqcloud.com/PlasticMemories/ep2/native/PlasticMemoriesEP2.mp4"
                },
                {
                    title: '[flv]Your Lie in April EP. 1',
                    src: "https://mplayer-demo-1255545160.cos.ap-nanjing.myqcloud.com/YourLieInApril/ep1/flv/EP1.flv"
                }
            ]
        })
    }

    render() {
        return (
            <div id={'mplayer'}></div>
        );
    }
}

export default Player