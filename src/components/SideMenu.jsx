

const SideMenu = ()=>{
   return(
      <aside className="sideMenu d-flex pt-4">
         <div className="mx-auto">
            <a className="d-flex mb-4" href="#">
               <span className="material-icons">home</span>
               <span>Beranda</span>
            </a>
            <a className="d-flex mb-4" href="#">
               <span className="material-icons">groups</span>
               <span>Personel List</span>
            </a>
            <a className="d-flex mb-4" href="#">
               <span className="material-icons">calendar_month</span>
               <span>Daily Attendance</span>
            </a>
         </div>
      </aside>
   )
}

export default SideMenu;