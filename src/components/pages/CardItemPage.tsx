import Banner from './../common/banner/Banner';
import CardItem from '../cardItem/CardItem';
import ourCoffe from '../../resources/img/our-coffee-bg.jpg';

const CardItemPage = () => {
    return (
        <div>
            <Banner
                title='Our Coffee'
                background={ourCoffe} />
            <CardItem />
        </div>
    );
};

export default CardItemPage;