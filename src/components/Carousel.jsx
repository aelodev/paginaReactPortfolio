import {useState} from 'react';
import {
    SiMysql,
    SiAndroid,
    SiLinux,
    SiGithub,
    SiJavascript,
    SiMetasploit,
    SiHackthebox, SiReact
} from 'react-icons/si';
import {FaJava} from 'react-icons/fa';
import ReactSimplyCarousel from 'react-simply-carousel';

function Carousel() {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    return (
        <div style={{marginTop: "2rem"}}>
            <ReactSimplyCarousel
                activeSlideIndex={activeSlideIndex}
                onRequestChange={(newActiveSlideIndex) => setActiveSlideIndex(newActiveSlideIndex)}
                speed={4000}
                infinite={true}
                itemsToShow={3}
                itemsToScroll={3}
                disableSwipeByMouse={true}
                disableSwipeByTouch={true}
                autoplay={true}
                autoplayDelay={10}
                forwardBtnProps={{
                    style: {
                        display: 'none',
                    }
                }}
                backwardBtnProps={{
                    style: {
                        display: 'none',
                    }
                }}
                responsiveProps={[
                    {
                        itemsToShow: 2,
                        itemsToScroll: 2,
                        maxWidth: 600,
                    },
                ]}

            >
                {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
                <div style={{width: 180, height: 180}}>
                    <SiAndroid className="text-9xl text-green-400"/>
                </div>
                <div style={{width: 180, height: 180}}>
                    <SiLinux className="text-9xl text-black"/>
                </div>
                <div style={{width: 180, height: 180}}>
                    <SiGithub className="text-9xl"/>
                </div>
                <div style={{width: 180, height: 180}}>
                    <FaJava className="text-9xl text-orange-400"/>
                </div>
                <div style={{width: 180, height: 180}}>
                    <SiMysql className="text-9xl text-blue-300"/>
                </div>
                <div style={{width: 180, height: 180}}>
                    <SiJavascript className="text-9xl text-yellow-400"/>
                </div>
                <div style={{width: 180, height: 180}}>
                    <SiMetasploit className="text-9xl text-blue-500"/>
                </div>
                <div style={{width: 180, height: 180}}>
                    <SiHackthebox className="text-9xl text-green-500"/>
                </div>
                <div style={{width: 180, height: 180}}>
                    <SiReact className="text-9xl text-blue-500"/>
                </div>
            </ReactSimplyCarousel>
        </div>
    );
}

export default Carousel;