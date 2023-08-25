import './output.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './comps/Nav';
import Home from './comps/Home';
import Addr from './comps/Addr';
import Resid from './comps/Resid';
import Emp from './comps/Emp';
import Income from './comps/Income';
import LastMonth from './comps/LastMonth';
import SrcIncome from './comps/SrcIncome';
import CredScr from './comps/CredScr';
import Debt from './comps/Debt';
import CurDebt from './comps/CurDebt';
import Expen from './comps/Expen';
import SigExp from './comps/SigExp';
import DownPay from './comps/DownPay';
import PropPrice from './comps/PropPrice';
import HomeType from './comps/HomeType';
import OnLoan from './comps/OnLoan';
import YourMail from './comps/YourMail';
import Phone from './comps/Phone';
import Else from './comps/Else';
import WhoElse from './comps/WhoElse';
import CoEmail from './comps/CoEmail';
import CoPhone from './comps/CoPhone';
import FirstTimeBuy from './comps/FirstTimeBuy';

function App() {
  return (
    <div className='App'>
      {/* <Home /> */}
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='addr' element={<Addr />} />
          <Route path='resid' element={<Resid />} />
          <Route path='emp' element={<Emp />} />
          <Route path='income' element={<Income />} />
          <Route path='lastmonth' element={<LastMonth />} />
          <Route path='srcincome' element={<SrcIncome />} />
          <Route path='credscr' element={<CredScr />} />
          <Route path='debt' element={<Debt />} />
          <Route path='curdebt' element={<CurDebt />} />
          <Route path='expen' element={<Expen />} />
          <Route path='sigexp' element={<SigExp />} />
          <Route path='downpay' element={<DownPay />} />
          <Route path='propprice' element={<PropPrice />} />
          <Route path='hometype' element={<HomeType />} />
          <Route path='onloan' element={<OnLoan />} />
          <Route path='yourmail' element={<YourMail />} />
          <Route path='phone' element={<Phone />} />
          <Route path='else' element={<Else />} />
          <Route path='whoelse' element={<WhoElse />} />
          <Route path='coemail' element={<CoEmail />} />
          <Route path='cophone' element={<CoPhone />} />
          <Route path='firsttimebuy' element={<FirstTimeBuy />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
