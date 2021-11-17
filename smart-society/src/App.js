import Navbar from "./navigation/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./societyInfo/Dashboard";
import AddAnnouncement from "./societyInfo/AddAnouncement";
import Login from "./users/Login";
import Logout from "./users/Logout";
import ForgotPassword from "./users/ForgotPassword";
import ResetPassword from "./users/ResetPassword";
import ChangePassword from "./users/ChangePassword";
import Maintenance from "./payments/Maintenance";
import Transaction from "./payments/Transaction";
import AddTransaction from "./payments/AddTransaction";
import PayMaintenance from "./payments/PayMaintenance";
import PenaltyRate from "./payments/PenaltyRate";
import PersonalStaff from "./staff/PersonalStaff";
import SocietyStaff from "./staff/SocietyStaff";
import Profile from "./users/Profile";
import Inventory from "./societyInfo/Inventory";
import Account from "./users/Account";
import Member from "./users/Member";
import Property from "./societyInfo/Property";
import Register from "./users/Register";
import AccountUpdate from "./users/UpdateAccount";
import AddInventory from "./societyInfo/AddInventory";
import UpdateInventory from "./societyInfo/UpdateInventory";
import AddProperty from "./societyInfo/AddProperty";
import UpdateProperty from "./societyInfo/UpdateProperty";
import AddMember from "./users/AddMember";
import UpdateMember from "./users/UpdateMember";
import AddPersonalStaff from "./staff/AddPersonalStaff";
import AddSocietyStaff from "./staff/AddSocietyStaff";
import UpdatePersonalStaff from "./staff/UpdatePersonalStaff";
import UpdateSocietyStaff from "./staff/UpdateSocietyStaff";
import Error from "./basicComponents/Error";
import ViewTransaction from "./payments/ViewTransaction";
import ViewMember from "./users/ViewMember";
import Polls from "./polls/Polls";
import AddPoll from "./polls/AddPoll";
import Vote from "./polls/Vote";
import Parking from "./parking_lot/Parking";
import AddParking from "./parking_lot/AddParking";
import UpdateParking from "./parking_lot/UpdateParking";
import GateLog from "./parking_lot/GateLog";
import RegisterEntry from "./parking_lot/RegisterEntry";
import ViewEntry from "./parking_lot/ViewEntry";

function App() {
  const group = localStorage.getItem("group");
  return (
    <Router>
      <div className="bg-green-300 dark:bg-gray-800 min-h-screen font-sans">
        <Routes>
          <Route
            path="/404"
            element={
              <>
                <Error />
              </>
            }
          />
          <Route
            path="/parking"
            element={
              <>
                <Navbar />
                <Parking />
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                <Navbar />
                <Profile />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/changepassword" element={<ChangePassword />} />
          <Route
            path="/resetpassword/:uidb64/:token"
            element={<ResetPassword />}
          />
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Dashboard />
              </>
            }
          />
          <Route
            path="/gatelog"
            element={
              <>
                <Navbar />
                <GateLog />
              </>
            }
          />
          {group === "3" ? (
            <>
              {console.log("sec login")}
              <Route
                path="/gatelog/register"
                element={
                  <>
                    <Navbar />
                    <RegisterEntry />
                  </>
                }
              />
              <Route
                path="/gatelog/view/:sno"
                element={
                  <>
                    <Navbar />
                    <ViewEntry />
                  </>
                }
              />
            </>
          ) : (
            <>
              {console.log("admin/member login")}
              <Route
                path="/announcements/add"
                element={
                  <>
                    <Navbar />
                    <AddAnnouncement />
                  </>
                }
              />
              <Route
                path="/accounts"
                element={
                  <>
                    <Navbar />
                    <Account />
                  </>
                }
              />
              <Route
                path="/societystaff"
                element={
                  <>
                    <Navbar />
                    <SocietyStaff />
                  </>
                }
              />
              <Route
                path="/members"
                element={
                  <>
                    <Navbar />
                    <Member />
                  </>
                }
              />
              <Route
                path="/personalstaff"
                element={
                  <>
                    <Navbar />
                    <PersonalStaff />
                  </>
                }
              />
              <Route
                path="/members/view/:propertyNo"
                element={
                  <>
                    <Navbar />
                    <ViewMember />
                  </>
                }
              />
              <Route
                path="/properties"
                element={
                  <>
                    <Navbar />
                    <Property />
                  </>
                }
              />
              <Route
                path="/inventory"
                element={
                  <>
                    <Navbar />
                    <Inventory />
                  </>
                }
              />
              <Route
                path="/maintenance"
                element={
                  <>
                    <Navbar />
                    <Maintenance />
                  </>
                }
              />
              <Route
                path="/polls"
                element={
                  <>
                    <Navbar />
                    <Polls />
                  </>
                }
              />
            </>
          )}

          {group === "1" ? (
            <>
              <Route
                path="/accounts/:username"
                element={
                  <>
                    <Navbar />
                    <AccountUpdate />
                  </>
                }
              />
              <Route
                path="/register"
                element={
                  <>
                    <Navbar />
                    <Register />
                  </>
                }
              />
              <Route
                path="/members/add"
                element={
                  <>
                    <Navbar />
                    <AddMember />
                  </>
                }
              />
              <Route
                path="/members/change/:propertyNo"
                element={
                  <>
                    <Navbar />
                    <UpdateMember />
                  </>
                }
              />

              <Route
                path="/properties/add"
                element={
                  <>
                    <Navbar />
                    <AddProperty />
                  </>
                }
              />
              <Route
                path="/properties/change/:propertyType"
                element={
                  <>
                    <Navbar />
                    <UpdateProperty />
                  </>
                }
              />

              <Route
                path="/inventory/add"
                element={
                  <>
                    <Navbar />
                    <AddInventory />
                  </>
                }
              />
              <Route
                path="/inventory/change/:item"
                element={
                  <>
                    <Navbar />
                    <UpdateInventory />
                  </>
                }
              />

              <Route
                path="maintenance/pay"
                element={
                  <>
                    <Navbar />
                    <PayMaintenance />
                  </>
                }
              />
              <Route
                path="maintenance/penalty"
                element={
                  <>
                    <Navbar />
                    <PenaltyRate />
                  </>
                }
              />
              <Route
                path="/transactions"
                element={
                  <>
                    <Navbar />
                    <Transaction />
                  </>
                }
              />
              <Route
                path="/transactions/add"
                element={
                  <>
                    <Navbar />
                    <AddTransaction />
                  </>
                }
              />
              <Route
                path="/transactions/view/:sno"
                element={
                  <>
                    <Navbar />
                    <ViewTransaction />
                  </>
                }
              />

              <Route
                path="/parking/add"
                element={
                  <>
                    <Navbar />
                    <AddParking />
                  </>
                }
              />
              <Route
                path="/parking/change/:parkingId"
                element={
                  <>
                    <Navbar />
                    <UpdateParking />
                  </>
                }
              />
              <Route
                path="/gatelog"
                element={
                  <>
                    <Navbar />
                    <GateLog />
                  </>
                }
              />

              <Route
                path="/societystaff/add"
                element={
                  <>
                    <Navbar />
                    <AddSocietyStaff />
                  </>
                }
              />
              <Route
                path="/societystaff/change/:s_no"
                element={
                  <>
                    <Navbar />
                    <UpdateSocietyStaff />
                  </>
                }
              />

              <Route
                path="/personalstaff/add"
                element={
                  <>
                    <Navbar />
                    <AddPersonalStaff />
                  </>
                }
              />
              <Route
                path="/personalstaff/change/:sno"
                element={
                  <>
                    <Navbar />
                    <UpdatePersonalStaff />
                  </>
                }
              />

              <Route
                path="/polls/add"
                element={
                  <>
                    <Navbar />
                    <AddPoll />
                  </>
                }
              />
            </>
          ) : (
            <Route
              path="/polls/vote/:id"
              element={
                <>
                  <Navbar />
                  <Vote />
                </>
              }
            />
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
