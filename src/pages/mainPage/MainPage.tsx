import React, { useEffect } from 'react';
import './mainPage.scss';
import MainPageSearchForm from '../../components/main-page-search-form/MainPageSearchForm';
import VacancyList from '../../components/vacancy-list/VacancyList';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchGetVacancy } from '../../redux/data-slice/dataFetchRequest';
import Paginator from '../../components/paginator/Paginator';
import { IFetchQueryVacancyRequest } from '../../types/requestTypes';
import { setPaginationFetchQuery } from '../../redux/paginator-slice/paginationStateSlice';
import Loader from '../../components/loader/Loader';

function MainPage() {
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.dataSlice.access_token);
  const user = useAppSelector((state) => state.userSlice.user);
  const pageCounter = useAppSelector((state) => state.dataSlice.pageCount);
  const paginationData = useAppSelector((state) => state.paginationStateSlice.paginationFetchQuery);
  const spinnerStatus = useAppSelector((state) => state.dataSlice.spinnerStatus);

  useEffect(() => {
    const queryObject: IFetchQueryVacancyRequest = {
      x_api_app_id: user.client_secret,
      token,
      paginationData: !!paginationData
        ? paginationData
        : {
            page: 1,
            count: pageCounter,
          },
    };
    dispatch(setPaginationFetchQuery(queryObject.paginationData));
    dispatch(fetchGetVacancy(queryObject));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);
  return (
    <section className="page main-page">
      <div className="container main-page_container">
        <form className="main-page_form-block"></form>
        <section className="main-page_vacancy-block">
          {spinnerStatus && <Loader />}
          <MainPageSearchForm />
          <VacancyList />
          <Paginator />
        </section>
      </div>
    </section>
  );
}

export default MainPage;
