import { useEffect } from "react";
import "./App.scss";
import { Link, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMultiplePokemonById } from "./RTK/thunk";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Search from "./pages/Search";
import Favorite from "./pages/Favorite";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    //useeffect 안에서 사용하는 변수들은 의존성 배열 안에 넣어주는이 좋다
    dispatch(fetchMultiplePokemonById(151));
  }, [dispatch]);
  useEffect(() => {}, []);
  return (
    <>
      <h1 className="text-[40px] text-center">포켓몬 도감</h1>
      <nav className="flex gap-[10px] justify-center">
        <Link to={"/"}>메인</Link>
        <Link to={"/detail/1"}>상세정보</Link>
        <Link to={"/search"}>검색</Link>
        <Link to={"/favorite"}>찜목록</Link>
      </nav>
      <main className="flex flex-wrap justify-center gap-[20px] pt-[20px]">
        <Routes>
          <Route path={"/"} element={<Main />} />
          <Route path={"/detail/:pokemonId"} element={<Detail />} />
          <Route path={"/search"} element={<Search />} />
          <Route path={"/favorite"} element={<Favorite />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
