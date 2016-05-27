import * as React from "react";
const styles:any = require("./button.css");

interface ButtonProps {
  onClick: React.EventHandler<React.MouseEvent>;
}

class RAButton extends React.Component<ButtonProps, {}> {
  constructor(props: ButtonProps){
    super(props);
  }
  render() {
    console.log(styles.green);
    return (
      <div className={ styles.green }
           onClick={ e => this.props.onClick(e) }>
        Hello
      </div>
    );
  }
}

export default RAButton;
