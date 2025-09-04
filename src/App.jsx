import "./App.css";
import { Routes,Route } from "react-router-dom";
import Home from "./Pages/Home"
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Navbar from "./components/common/Navbar";
import ForgotPassword from "./Pages/ForgotPassword";
import VerifyEmail from "./Pages/VerifyEmail";
import UpdatePassword from "./Pages/UpdatePassword";
import OpenRoute from "./components/core/Auth/OpenRoute";
import About from "./Pages/About";
import PrivateRoute from './components/core/Auth/PrivateRoute'
import Dashboard from "./Pages/Dashboard";
import MyProfile from './components/core/Dashboard/MyProfile'
import Settings from "./components/core/Dashboard/Settings";
import EnrolledCourses from './components/core/Dashboard/EnrolledCouses'
import {ACCOUNT_TYPE} from './utils/constants'
import { useSelector } from "react-redux";
import Cart from "./components/core/Dashboard/Cart";
import AddCourse from './components/core/Dashboard/AddCourse'
import MyCourses from "./components/core/Dashboard/MyCourses";
import EditCourse from "./components/core/Dashboard/EditCourse/index";
import Catalog from './Pages/Catalog';
import CourseDetails from './Pages/CourseDetails';
<OpenRoute></OpenRoute>
function App() {
  const { user } = useSelector((state) => state.profile);

  //console.log(user);
  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
      
      <Navbar></Navbar>
      <Routes>
        <Route path="courses/:courseId" element={<CourseDetails/>}></Route>
        <Route path = "/" element={<OpenRoute>
          <Home/>
          </OpenRoute>}/>
          <Route path="/catalog/:catalogName" element={<Catalog/>}>
          
          </Route>
        <Route path='/login' element={<OpenRoute>
          <Login/>
          </OpenRoute>}></Route>
        <Route path='/signup' element={<OpenRoute>
          <Signup/>
          </OpenRoute>}></Route>
        <Route path='/forgot-password' element={<OpenRoute
        ><ForgotPassword/>
        </OpenRoute>} ></Route>
        <Route path="/verify-email" element={<OpenRoute>
          <VerifyEmail/>
          </OpenRoute>}></Route>
        <Route path="/update-password/:id" element={<OpenRoute>
          <UpdatePassword/>
          </OpenRoute>}>
        </Route>
        <Route path="/about" element={<OpenRoute>
          <About/>
          </OpenRoute>}>
        </Route>
        <Route 
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
        >
              <Route path="dashboard/my-profile" element={<MyProfile />} />
              
              <Route path="dashboard/Settings" element={<Settings />} />
              {
                  user?.accountType === ACCOUNT_TYPE.STUDENT && (
                    <>
                      <Route path="dashboard/cart" element={<Cart />} />
                      <Route path="dashboard/enrolled-courses" element={<EnrolledCourses />} />
                    </>
                  )
              }
              {
                user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
                <>
                  {/* <Route path="dashboard/instructor" element={<Instructor />} /> */}
                  <Route path="dashboard/add-course" element={<AddCourse />} />
                  <Route path="dashboard/my-courses" element={<MyCourses />} />
                  <Route path="dashboard/edit-course/:courseId" element={<EditCourse />} />
                  
                </>
                )
              }
        </Route>

          
        
      </Routes>
    </div>
  );
}

export default App;
