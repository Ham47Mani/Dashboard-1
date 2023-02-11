import React, { useRef } from 'react';

//--- Import Styles
import "./dropdown.scss";

const clickOutsideRef = (content_ref, toggle_ref) => {
  document.addEventListener('mousedown', (e) => {
    //--- User Click Toggle
    if (toggle_ref.current && toggle_ref.current.contains(e.target)) {
      content_ref.current.classList.toggle("active");
    } else {
      //--- User Click Outside toggle & content
      if (content_ref.current && !content_ref.current.contains(e.target)) {
        content_ref.current.classList.remove("active");
      }
    }
  });
}

const Dropdown = (props) => {
  const dropdown_toggle_el = useRef(null);
  const dropdown_content_el = useRef(null);

  clickOutsideRef(dropdown_content_el, dropdown_toggle_el);

  return (
    <div className='dropdown'>
      <div className='dropdown__toggle' ref={dropdown_toggle_el}>
        { props.icon && <i className={props.icon}></i> }
        { props.badge && <span className='dropdown__toggle_badge'>{props.badge}</span> }
        { props.customToggle && props.customToggle() }
      </div>
      <div className='dropdown__content' ref={dropdown_content_el}>
        {
          props.contentData && props.renderItems ? props.contentData.map((item, i) => props.renderItems(item, i)) : ""
        }
        {
          props.renderFooter && <div className='dropdown__footer'>{ props.renderFooter() }</div>
        }
      </div>
    </div>
  );
}

export default Dropdown;
