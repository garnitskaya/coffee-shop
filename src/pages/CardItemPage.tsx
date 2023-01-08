import { CardItem } from "./../components";
import { Banner } from "../components/common";

import ourCoffe from "../resources/img/our-coffee-bg.jpg";

const CardItemPage = () => {
  return (
    <div>
      <Banner title="Our Coffee" background={ourCoffe} />
      <CardItem />
    </div>
  );
};

export default CardItemPage;
