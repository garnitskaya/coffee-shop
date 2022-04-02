import Banner from '../common/banner/Banner';
import AboutBlock from '../common/aboutBlock/AboutBlock';
import img from '../../resources/img/about-our-beans.jpg';
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
            <AboutBlock
                img={img}
                children={<TitleBlock title='About our beans' />} />
            <hr className='line' />
            <ItemPanel />
            <CardList />
        </div>
    );
};

export default OurCoffeePage;