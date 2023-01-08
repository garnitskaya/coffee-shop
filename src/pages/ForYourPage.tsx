import { CardList } from "../components";
import { AboutBlock, Banner, TitleBlock } from "../components/common";

import forYour from "../resources/img/for-your-pleasure.jpg";
import img from "../resources/img/about-our-goods.jpg";
import imgBig from "../resources/img/about-our-goods_big.jpg";

const ForYourPage = () => {
  return (
    <div>
      <Banner title="For your pleasure" background={forYour} />
      <div className="container">
        <AboutBlock
          img={img}
          imgBig={imgBig}
          children={<TitleBlock title="About our goods" />}
        />
        <hr className="line" />
        <CardList />
      </div>
    </div>
  );
};

export default ForYourPage;
