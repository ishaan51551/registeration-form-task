import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary opacity-75" >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">NavBar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-5 ml-auto mb-2 mb-lg-0 position-absolute top-0 end-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/contact">Contact</Link>
              </li>

              <li className="nav-item ">
                <Link className="nav-link active end-0" aria-current="page" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                     <Link className="nav-link" to="/signup">REGISTERATION</Link>
                  </li> 
            </ul>

          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar









// import React from 'react'
// import { Link } from 'react-router-dom'
//import 'bootstrap/dist/css/bootstrap.css';
// const Navbar = () => {
//   return (
//     <>
//       <nav className="navbar navbar-expand-lg navbar-dark bg-primary opacity-75" >
//         <div className="container-fluid">
//           <Link className="navbar-brand" to="/">Get-Healthy</Link>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav ms-5 me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <Link className="nav-link active" aria-current="page" to="/">Home</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link active" aria-current="page" to="/about">About</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link active" aria-current="page" to="/contact">Contact</Link>
//               </li>

//               <li className="nav-item ">
//                 <Link className="nav-link active end-0" aria-current="page" to="/login">Login</Link>
//               </li>
//               <li className="nav-item">
 //                     <Link className="nav-link" to="/signup">REGISTERATION</Link>
  //                 </li> 
//             </ul>

//           </div>
//         </div>
//       </nav>
//     </>
//   )
// }

// export default Navbar