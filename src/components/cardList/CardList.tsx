import { useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

import Skeleton from "./Skeleton";
import CardListItem from './CardListItem';
import { useAppDispatch, useTypedSelector } from "../../hooks/useTypedSelector";
import { fetchData, setTerm } from "../../redux/action-creators";
import { IData } from "../../types";
import { useDebounce } from "../../hooks/useDebounce";
import { filtersChanged } from './../../redux/action-creators';

import styles from "./cardList.module.css";

type QueryParamsType = {
  q?: string;
  country?: string;
};

const CardList: React.FC = () => {
  const {
    coffeeItems,
    error,
    loading,
    activeFilter,
    term } = useTypedSelector((state) => state);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const pathname = location.pathname;
  const debouncedSearch = useDebounce(onRequest);
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("q") || "";
  const filter = searchParams.get("country") || "";

  function onRequest(search: string, filter: string) {
    dispatch(fetchData(search, filter));
  }

  useEffect(() => {
    if (pathname === "/ourCoffee") {
      const params: QueryParamsType = {};

      if (term.length) params.q = term;
      if (activeFilter.length) params.country = activeFilter;

      setSearchParams(params);
      debouncedSearch(search, filter);
    } else {
      debouncedSearch("", "");
    }
  }, [term, activeFilter, searchParams]);

  useEffect(() => {
    if (search || filter) {
      dispatch(setTerm(search))
      dispatch(filtersChanged(filter))
    }
  }, []);

  if (error) {
    return <h1 className="title">{error}</h1>;
  }

  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));

  const renderItem = (arr: IData[]) => {
    if (arr.length === 0) {
      return skeletons;
    }
    return arr.map((item) => (
      <CardListItem key={item.id}{...item} pathname={pathname} />
    ));
  };

  const elements = renderItem(coffeeItems);

  return <div className={styles.cards}>{loading ? skeletons : elements}</div>;
};

export default CardList;
