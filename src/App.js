import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Gambia from "./pages/countries/gambia/Gambia";
import Kenya from "./pages/countries/kenya/Kenya";
import Mozambique from "./pages/countries/mozambique/Mozambique";
import Somalia from "./pages/countries/somalia/Somalia";
import Southsudan from "./pages/countries/southsudan/Southsudan";
import Tanzania from "./pages/countries/tanzania/Tanzania";
import Uganda from "./pages/countries/uganda/Uganda";
import Zambia from "./pages/countries/zambia/Zambia";
import Zimbabwe from "./pages/countries/zimbabwe/Zimbabwe";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" />
          <Route index element={<Home />} />
          <Route path="countries">
            <Route path="gambia" element={<Gambia />} />
            <Route path="kenya" element={<Kenya />} />
            <Route path="mozambique" element={<Mozambique />} />
            <Route path="somalia" element={<Somalia />} />
            <Route path="southsudan" element={<Southsudan />} />
            <Route path="tanzania" element={<Tanzania />} />
            <Route path="uganda" element={<Uganda />} />
            <Route path="zambia" element={<Zambia />} />
            <Route path="zimbabwe" element={<Zimbabwe />} />

          </Route>


        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
