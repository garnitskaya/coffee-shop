import { ItemPanel, CardList } from "../components";
import { AboutBlock, Banner, TitleBlock } from "../components/common";

import imgBig from "../resources/img/aboutBlock_big.jpg";
import img from "../resources/img/about-our-beans.jpg";
import ourCoffe from "../resources/img/our-coffee-bg.jpg";

const OurCoffeePage = () => {
  return (
    <div>
      <Banner title="Our Coffee" background={ourCoffe} />
      <div className="container">
        <AboutBlock
          img={img}
          imgBig={imgBig}
          children={<TitleBlock title="About our beans" />}
        />
        <hr className="line" />
        <ItemPanel />
        <CardList />
      </div>
    </div>
  );
};

export default OurCoffeePage;
