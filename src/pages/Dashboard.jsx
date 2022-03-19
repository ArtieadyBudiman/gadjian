import SideMenu from '../components/SideMenu'
import NavbarSection from '../components/Navbar'
import Content from '../components/Content'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getUserData} from '../redux/action/userAction'

const Dashboard = () => {
   const dispatch = useDispatch();
   const user = useSelector((state) => state.user.user);
   const loading = useSelector((state) => state.user.loading);

   console.log(user);

   useEffect(() => {
      dispatch(getUserData());
    }, [dispatch]);

   return(
      <div className="bg-light">
         <NavbarSection user={user}/>
         <div className="content d-flex">
            <div className="side col-2">
               <SideMenu/> 
            </div>
            <div className="col-10">
               <Content user={user} loading={loading}/>
            </div>
         </div>
      </div>
   )
}

export default Dashboard;