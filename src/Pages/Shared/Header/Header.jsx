
import Banner from '../../Banner/Banner';
import { Container } from 'react-bootstrap';
import Gallery from '../../Gallery/Gallery';
import ReactTabs from '../../Home/ReactTabs';
import SocialSharing from '../../SocialSharing/SocialSharing';
import Customization from '../../Customization/Customization';

const Header = () => {
    return (
        <Container className='my-5'>
            <Banner />
            <Gallery />
            <ReactTabs />

            <Customization />

            <SocialSharing />

            Extra Two section
        </Container>
    );
};

export default Header;