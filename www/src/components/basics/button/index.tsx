import * as React from "react";
const styles:any = require("./button.css");

interface IButtonProps extends React.Props<any> {
  color?: "Red" | "Green" | "Grey";
  onClick: React.EventHandler<React.MouseEvent>;
}

function RAButton({
  color,
  onClick,
  children
}: IButtonProps) {
  var style :any =styles.grey; 
  if(color == "Green"){
    style = styles.green;
  }else if(color == "Red"){
    style = styles.red;
  }
  return (
    <div className={ style }
    onClick={ e => onClick(e) }>
    {children}
    </div>
  );

}

export default RAButton;
