import React from "react";



const Button = ({children,title}:{
  children:any, 
  title:string
  color: string
}) => { 
  return (
    <button >
        {children}
    </button>
  );
}

export default Button;
