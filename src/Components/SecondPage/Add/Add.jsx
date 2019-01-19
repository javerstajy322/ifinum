// import React from "react";

// import "./Add.css";

// class Add extends React.Component {
//   state = {
//     number: "",
//     start_date: "",
//     end_date: "",
//     comment: ""
//   };

//   onChangeHandler = e => {
//     this.setState({ number: e.target.value });
    
//   };

//   render() {
//     return (
//       <div className="Add">
//         <div className="addWrapper">
//           <form action="">
//             <p>
//               <p>Number:</p>
//               <input
//                 type="text"
//                 name=""
//                 id=""
//                 value={this.state.number}
//                 onChange={e => this.onChangeHandler(e)}
                
//               />
//             </p>
//             <p>
//               <p>Invoice Date:</p>
//               <input type="text" name="" id="" value={this.state.start_date} />
//             </p>
//             <p>
//               <p>Supply Date:</p>
//               <input type="text" name="" id="" value={this.state.end_date} />
//             </p>
//             <p className="comment">
//               <p>Comment:</p>
//               <input type="text" name="" id="" value={this.state.comment} />
//             </p>
//             <br />
//             <button className="addbutton" onClick={this.props.click}>
//               sss
//             </button>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }

// export default Add;
