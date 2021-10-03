import React, { useState } from 'react';

const DropDown = () => {

//     var dropdown = document.querySelector('.dropdown');
// dropdown.addEventListener('click', function(event) {
//   event.stopPropagation();
//   dropdown.classList.toggle('is-active');
// });


const [toggle, setToggle] = useState("false");

// const ToggleClass = () => {
//     console.log("toggle");
//   setActive(!isActive);
// };

    return (
<div className={`dropdown ${toggle ? "is-active" : ""}`}>
  <div className="dropdown-trigger"  onClick={() =>   setToggle(!toggle)}>
   
  
    <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
      <span>Dropdown button</span>
      <span className="icon is-small">
        <i className="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <div className="dropdown-menu" id="dropdown-menu" role="menu">
    <div className="dropdown-content">
      <a href="#" className="dropdown-item">
        Dropdown item
      </a>
      <a className="dropdown-item">
        Other dropdown item
      </a>
      <a href="#" className="dropdown-item is-active">
        Active dropdown item
      </a>
      <a href="#" className="dropdown-item">
        Other dropdown item
      </a>
    </div>
  </div>
</div>
    )
}

export default DropDown;


