import React from 'react';

function IconLink(props) {
   const {link, title, icon} = props;
   
   // Don't render if link is empty, "#", or invalid
   if (!link || link === "#" || link.trim() === "") {
      return null;
   }
   
   return (
      <a href={link} target={"_blank"} rel="noopener noreferrer">
         <i className={icon}/> {title}
      </a>
   );
}

export default IconLink;