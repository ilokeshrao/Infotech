 const mongoose = require('mongoose')


 const numberSchema = mongoose.Schema({
    digit:Number,
 })

 module.exports =mongoose.model('Number',numberSchema)


//  import { useState } from "react";
// import { Link } from "react-router-dom";
// import Header from "./Header";
// import Slidebar from "./Slidebar";

// function Numberpanel() {
//     const [digits, setDigits] = useState(["34", "20", "11", "22"]);
//     const [editableIndex, setEditableIndex] = useState(null);
//     const [editValue, setEditValue] = useState("");

//     const handleEditClick = (index) => {
//         setEditableIndex(index);
//         setEditValue(digits[index]);
//     };

//     const handleSaveEdit = () => {
//         const updatedDigits = [...digits];
//         updatedDigits[editableIndex] = editValue || digits[editableIndex]; 
//         setDigits(updatedDigits);
//         setEditableIndex(null);
//         setEditValue("");
//     };

//     return (
//         <section className="same">
//             <div className="container-fluid">
//                 <div className="row">
//                     <div className="col-md-2">
//                         <Slidebar />
//                     </div>
//                     <div className="col-md-10">
//                         <Header title="Number Panel" />
//                         <section>
//                             <div className="container numberpanel navbar-light bg-light">
//                                 <div className="row">
//                                     {digits.slice(0, 2).map((digit, index) => (
//                                         <div key={index} className="col-md-2 box d-flex justify-content-center align-items-center">
//                                             {editableIndex === index ? (
//                                                 <input
//                                                     type="text"
//                                                     value={editValue}
//                                                     placeholder={`Digit ${index + 1}`}
//                                                     onChange={(e) => setEditValue(e.target.value)}
//                                                     onBlur={handleSaveEdit}
//                                                     onFocus={() => setEditValue('')} // Clear the value on focus
//                                                     style={{
//                                                         border: 'none',
//                                                         outline: 'none',
//                                                         textAlign: 'center',
//                                                         fontSize: '20px'
//                                                     }}
//                                                     autoFocus
//                                                 />
//                                             ) : (
//                                                 <h5 onClick={() => handleEditClick(index)}>
//                                                     {digit}
//                                                 </h5>
//                                             )}
//                                         </div>
//                                     ))}
//                                 </div>
//                                 <div className="row">
//                                     {digits.slice(2).map((digit, index) => (
//                                         <div key={index + 2} className="col-md-2 box d-flex justify-content-center align-items-center">
//                                             {editableIndex === index + 2 ? (
//                                                 <input
//                                                     type="text"
//                                                     value={editValue}
//                                                     placeholder={`Digit ${index + 3}`}
//                                                     onChange={(e) => setEditValue(e.target.value)}
//                                                     onBlur={handleSaveEdit}
//                                                     onFocus={() => setEditValue('')} 
//                                                     style={{
//                                                         border: 'none',
//                                                         outline: 'none',
//                                                         textAlign: 'center',
//                                                         fontSize: '20px'
//                                                     }}
//                                                     autoFocus
//                                                 />
//                                             ) : (
//                                                 <h5 onClick={() => handleEditClick(index + 2)}>
//                                                     {digit}
//                                                 </h5>
//                                             )}
//                                         </div>
//                                     ))}
//                                 </div>
//                                 <div className="row">
//                                     <div className="col-md-12 d-flex">
//                                         <Link to={'/numberpanel'}>
//                                             <button className="btn btn-dark ms-5 mb-5 mt-3" style={{ width: '300px', height: '50px' }}>
//                                                 Save & Back
//                                             </button>
//                                         </Link>
//                                     </div>
//                                 </div>
//                             </div>
//                         </section>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default Numberpanel;
