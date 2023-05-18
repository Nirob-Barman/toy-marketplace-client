
import Banner from '../../Banner/Banner';
import { Container } from 'react-bootstrap';
import Gallery from '../../Gallery/Gallery';
import ReactTabs from '../../Home/ReactTabs';

const Header = () => {
    return (
        <Container className='my-5'>
            <Banner />
            <Gallery />
            <ReactTabs />
            Extra Two section
        </Container>
    );
};

export default Header;