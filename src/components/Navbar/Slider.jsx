import slider1 from "../../assets/slider1.png"
import slider2 from "../../assets/slider2.png"
import slider3 from "../../assets/slider3.png"
const Slider = () => {
    return (
        <>
            <div className="carousel w-full rounded-lg">
                <div id="item1" className="carousel-item w-full">
                    <img
                        src={slider1}
                        className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img
                        src={slider2}
                        className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img
                        src={slider3}
                        className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                        className="w-full" />
                </div>
            </div>
            <div className="flex w-full justify-center gap-2 py-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </>
    );
};

export default Slider;