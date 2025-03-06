import { useEffect } from "react";
import "./App.scss";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchMultiplePokemonById } from "./RTK/thunk";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Search from "./pages/Search";
import Favorite from "./pages/Favorite";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    //useeffect 안에서 사용하는 변수들은 의존성 배열 안에 넣어주는이 좋다
    dispatch(fetchMultiplePokemonById(151));
  }, [dispatch]);
  useEffect(() => {}, []);
  return (
    <>
      <h1 className="border-t-[50px] border-t-[red] bg-black text-white text-[40px] text-center">
        포켓몬 도감
      </h1>
      <nav className="py-[10px] border-b-[3px] border-b-black flex gap-[10px] justify-center">
        <Link to={"/"}>메인</Link>
        <Link to={"/favorite"}>찜목록</Link>
        <div>
          <input
            onChange={(e) => navigate(`/search?pokemon=${e.target.value}`)}
            className="w-[120px] border-b border-[darkgray] px-2"
            type="text"
          />
          <span>🔎</span>
        </div>
      </nav>
      <main className="bg-[gray] flex flex-wrap justify-center gap-[20px] pt-[20px] pb-[20px]">
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
