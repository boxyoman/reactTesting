import * as React from "react";
const styles:any = require("./button.css");

interface ButtonProps {
  color?: "Red" | "Green" | "Grey";
  onClick: React.EventHandler<React.MouseEvent>;
}

interface ButtonState {
  style: any
}

class RAButton extends React.Component<ButtonProps, ButtonState> {
  constructor(props: ButtonProps){
    super(props);
    var style:any = styles.grey;
    if(props.color == "Green"){
      style = styles.green;
    }else if(props.color == "Red"){
      style = styles.red;
    }
    this.state = {
      style: style
    }
  }
  render() {
    return (
      <div className={ this.state.style }
           onClick={ e => this.props.onClick(e) }>
        Hello
      </div>
    );
  }
}

export default RAButton;
