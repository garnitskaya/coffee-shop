import Banner from '../common/banner/Banner';
import AboutBlock from '../common/aboutBlock/AboutBlock';
import img from '../../resources/img/about-our-beans.jpg';
import imgBig from '../../resources/img/aboutBlock_big.jpg';
import ourCoffe from '../../resources/img/our-coffee-bg.jpg';
import ItemPanel from '../itemPanel/ItemPanel';
import TitleBlock from '../common/titleBlock/TitleBlock';
import CardList from '../cardList/CardList';

const OurCoffeePage = () => {
    return (
        <div>
            <Banner
                title='Our Coffee'
                background={ourCoffe} />
            <div className='container'>
                <AboutBlock
                    img={img}
                    imgBig={imgBig}
                    children={<TitleBlock title='About our beans' />} />
                <hr className='line' />
                <ItemPanel />
                <CardList />
            </div>
        </div>
    );
};

export default OurCoffeePage;