import React, { useEffect, useState} from "react";
import { useNavigate, } from "react-router-dom";
import { Routes, Route } from "react-router";

import { IonApp} from "@ionic/react";
import { setupIonicReact } from "@ionic/react";

import { getBeerList} from "./service/api/requests";
import {
  ISelected,
  IStatus,
  IBeerItem,
  IBeerList,
} from "./service/interfaces/interfaces";
import Layout from "./components/Layout/Layout";
import MainPage from "./pages/MainPage/MainPage";
import ItemPage from "./pages/ItemPage/ItemPage";
import SelectedModal from "./pages/SelectedModal/SelectedModal";


import "@ionic/react/css/core.css";
import "./App.css";



setupIonicReact();

function App() {
  const [selected, setSelected] = useState<ISelected>({
    page: 1,
    id: "",
    beerItem: "",
  });
  const [beerList, setBeerList] = useState<IBeerList | []>([]);
  const [status, setStatus] = useState<IStatus>({
    loading: true,
    error: false,
    errStatus: true,
  });
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const getBeer = () => {
    getBeerList(selected.page)
      .then((res) => {
        setBeerList(res);
        setStatus({ ...status, loading: false });
      })
      .catch((err) => {
        // Toast элемент если превышено количество запросов (больше 1 запроса за секунду)
        if (err.status === 429) {
          setStatus({ ...status, errStatus: true })
        } else {
          setStatus({ ...status, error: true });
        }
      });
  };

  useEffect(() => {
    getBeer();
  }, []);

  useEffect(() => {
    getBeer();
  }, [selected.page]);


  const handleOnPageClick = (elem: number) => {
    setSelected({ ...selected, page: elem });
  };

  const handleOnCardClick = (num: number) => {
    const e: IBeerItem = beerList.filter((item) => item.id === num)[0];
    setSelected({ ...selected, id: num, beerItem: e });
    navigate(`/itemPage`);
  };

  const showModal = () => {
    if (isOpen) {
      return <SelectedModal isOpen={isOpen} setIsOpen={setIsOpen} />;
    } else {
      return null;
    }
  };

  // функция для показа Toast элемента
  const setToastIsShown = () => {
     setStatus({ ...status, errStatus: false})
  }

  return (
    <IonApp>
      {showModal()}
      <Routes>
        <Route path="/" element={<Layout setIsOpen={setIsOpen} />}>
          <Route
            index
            element={
              <MainPage
                selected={selected}
                beerList={beerList}
                status={status}
                handleOnPageClick={handleOnPageClick}
                handleOnCardClick={handleOnCardClick}
                setToastIsShown={setToastIsShown}
              />
            }
          />
          <Route 
            path="/itemPage"
            element={<ItemPage beerItem={selected.beerItem} />}
          />
        </Route>
        </Routes>
      </IonApp>
   
  );
}

export default App;
