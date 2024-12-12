import Slider from 'react-slick';
import styled from 'styled-components';
import '../App.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Importing Font Awesome icons


const images = [
    { logo: "https://wallpapers.com/images/hd/real-estate-miniature-house-model-zcovmnik4h0l5s7k.jpg" },
    { logo: "https://wallpapers.com/images/hd/real-estate-digital-art-0kmi22tcj2x60lim.jpg" },
    { logo: "https://png.pngtree.com/background/20210710/original/pngtree-green-422-earth-day-background-picture-image_1044363.jpg" },
    { logo: "https://static.vecteezy.com/system/resources/thumbnails/022/527/605/small_2x/house-of-dream-idea-real-estate-illustration-ai-generative-free-photo.jpg" },
];

const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1, // Show one image at a time
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        prevArrow: <FaChevronLeft />,
        nextArrow: <FaChevronRight />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className='bg-blue-50 pt-20 md:pt-24'> {/* Add pt-32 for top padding, creates space below nav */}
            <div className="w-full">
                <StyledSlider {...settings}>
                    {images.map((image, index) => (
                        <div key={index} className="tool-item p-0"> {/* Removed padding for no gap */}
                                <LogoAndName>
                                    <Logo src={image.logo} alt={`logo`} />
                                </LogoAndName>
                        </div>
                    ))}
                </StyledSlider>
            </div>
        </div>
    );
};

const StyledSlider = styled(Slider)`
    .slick-list {
        padding: 0;
        margin: 0;
        overflow: hidden;  /* Hide overflow if any */
    }

    .slick-dots {
        bottom: 0px;  /* Adjust dot position */
        z-index: 1; /* Ensure dots are above other content */
        position: relative;
        background-color: var(--blue-color); /* Set background color */
        padding: 10px 0;  /* Reduced padding for better positioning */
        border-radius: 10px;
    }

    .slick-prev, .slick-next {
        background-color: white;
        border: none;
        border-radius:20px;
        padding:2px;
        color: var(--teal-color);
        font-size: 1rem;
        z-index: 10;
        cursor: pointer;
        transition: color 0.3s ease;
        position: absolute; /* Position arrows absolutely on top */
        top: 50%; /* Center the arrows vertically */
        transform: translateY(-50%); /* Align the arrows in the center */
    }

    .slick-prev {
        left: 20px; /* Position left arrow closer to the left edge */
    }

    .slick-next {
        right: 20px; /* Position right arrow closer to the right edge */
    }

    /* Hide arrows on mobile screens */
    @media (max-width: 1024px) {
        .slick-prev, .slick-next {
            display: none !important; /* Ensure arrows are hidden */
        }

        .slick-dots {
            padding: 5px 0;  /* Reduce padding for mobile to minimize gap */
        }
    }

    /* Ensure arrows are visible on desktop */
    @media (min-width: 1024px) {
        .slick-prev, .slick-next {
            display: block !important; /* Force the arrows to show on desktop */
        }
    }

    /* Add hover effect for the arrows */
    .slick-prev:hover, .slick-next:hover {
        color: var(--blue-color); /* Or any other color you prefer */
    }
`;

const LogoAndName = styled.div`
  background-color: var(--white-color);
  box-shadow: 0 8px 8px var(--teal-color);
  height: 600px; /* Increase height for the carousel */
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden; /* Hide overflow if content exceeds */
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    height: 400px; /* Increase height for smaller screens */
  }
`;


const Logo = styled.img`
    width: 100%; 
    height: 100%; 
`;

export default Hero;
