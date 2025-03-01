import Slider from 'react-slick'
import './Carrosel.css'

function Carrosel({children}){

    const settings = {
        dots:false,
        infinite:false,
        speed:300,
        centerMode:false,
        variableWidth:true,
        adaptiveHeight:true,
        slidesToShow:5,
        slidesToScroll:1
    }

    return (
        <div>
            <Slider {...settings}>

                {children}


            </Slider>


        </div>
    )
}


export default Carrosel