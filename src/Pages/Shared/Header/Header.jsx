
import Banner from '../../Banner/Banner';
import { Container } from 'react-bootstrap';
import Gallery from '../../Gallery/Gallery';
import ReactTabs from '../../Home/ReactTabs';
import SocialSharing from '../../SocialSharing/SocialSharing';
import Customization from '../../Customization/Customization';
import ReviewsAndRatings from '../../ReviewsAndRatings/ReviewsAndRatings';

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
// import ShopByCategory from '../../ShopByCategory/ShopByCategory';
import useTitle from '../../../hooks/useTitle';
import CategoryTab from '../../ShopByCategory/CategoryTab';
import WishList from '../../Home/WishList';

const Header = () => {

    useTitle('Home');

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <Container data-aos="flip-left" className='my-5'>
            <Banner />
            <Gallery />
            {/* <ReactTabs /> */}
            {/* <ShopByCategory /> */}
            <CategoryTab />

            <WishList />

            <Customization />
            <ReviewsAndRatings />
            <SocialSharing />
        </Container>
    );
};

export default Header;