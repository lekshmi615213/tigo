import React, { Component } from "react";
import { red400, lightGreen500, orange500 } from "material-ui/styles/colors";

class StatusMessage extends Component {
  render() {
    if (this.props.type === "error") {
      return (
        <div
          className="max-width-4 flex justify-between py2 px1 light text-white"
          style={{ backgroundColor: red400 }}
        >
          <div className="flex">
            <img
              alt=""
              src="/images/icn-failure.png"
              className="mr2 flex-none"
              width="31"
              height="31"
            />
            <div className="h5 regular"> {this.props.text}</div>
          </div>
          <div
            onClick={this.props.onClose}
            dangerouslySetInnerHTML={{ __html: "&times;" }}
          />
        </div>
      );
    }
    if (this.props.type === "success") {
      return (
        <div
          className="max-width-4 flex justify-between py2 px1 light text-white"
          style={{ backgroundColor: lightGreen500 }}
        >
          <div className="flex">
            <img
              alt=""
              className="mr2 flex-none"
              width="31"
              height="31"
              src="/images/icn-success-white.png"
            />
            <div>{this.props.text}</div>
          </div>
          <div
            onClick={this.props.onClose}
            dangerouslySetInnerHTML={{ __html: "&times;" }}
          />
        </div>
      );
    }
    if (this.props.type === "warning") {
      return (
        <div
          className="max-width-4 flex justify-between py2 px1 light text-white"
          style={{ backgroundColor: orange500 }}
        >
          <div className="flex">
            <img
              alt=""
              className="mr2 flex-none"
              width="31"
              height="31"
              src="/images/icn-warning.png"
            />
            <div>{this.props.text}</div>
          </div>
          <div
            onClick={this.props.onClose}
            dangerouslySetInnerHTML={{ __html: "&times;" }}
          />
        </div>
      );
    }
  }
}

export default StatusMessage;
