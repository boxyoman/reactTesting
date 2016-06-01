import * as React from "react";
const styles:any = require("./button.css");

interface ButtonProps {
  color?: "Red" | "Green" | "Grey";
  onClick: React.EventHandler<React.MouseEvent>;
}

class RAButton extends React.Component<ButtonProps, {}> {
  private style :any;
  constructor(props: ButtonProps){
    super(props);
    this.style = styles.grey;
    if(props.color == "Green"){
      this.style = styles.green;
    }else if(props.color == "Red"){
      this.style = styles.red;
    }
  }
  render() {
    return (
      <div className={ this.style }
           onClick={ e => this.props.onClick(e) }>
        {this.props.children}
      </div>
    );
  }
}

export default RAButton;
