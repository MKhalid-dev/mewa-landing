import { TrendingUp, Coins } from "lucide-react";
import Logo from "../public/Logo.svg";
import { FaChartLine } from "react-icons/fa";
import { GrMoney } from "react-icons/gr";


function App() {
  return (
    <div className="app" dir="rtl">
      <div className="wave-background">
        <div className="content">
          <div className="logo-container">
            <img
              src={Logo}
              alt="وزارة البيئة والمياه والزراعة"
              className="logo"
            />
          </div>

          <h1 className="title">مرحباً بك في نظام هايبريون للتخطيط المالي</h1>

          <div className="cards">
            <button className="card">
              <GrMoney className="card-icon" />
              <span>تخطيط الميزانية</span>
            </button>
            <button className="card">
              <FaChartLine className="card-icon" />
              <span>تخطيط المناقلات</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
