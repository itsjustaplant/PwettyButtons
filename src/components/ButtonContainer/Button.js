import React from "react"
import PropTypes from "prop-types";

import {DefaultButton} from "../PrettyButtons/DefaultButton";
import {OutlineButton} from "../PrettyButtons/OutlineButton";
import {DisabledDefaultButton} from "../PrettyButtons/DisabledDefaultButton";
import {TextButton} from "../PrettyButtons/TextButton";
import {DisabledText} from "../PrettyButtons/DisabledText";


export default class Button extends React.Component{
    render() {
        let button
        let defaultText = (this.props.children) ? (this.props.children) : (this.props.text)
        let disabledText = (this.props.children) ? (this.props.children) : "Disabled"

        let startIconDisplay = "", endIconDisplay =""

        if(this.props.startIcon === ""){
            startIconDisplay = "none"
        }
        if(this.props.endIcon === ""){
            endIconDisplay = "none"
        }

        let childProps = {
            variant: this.props.variant,
            disabled: this.props.disabled,
            size: this.props.size,
            color: this.props.color,
            disableShadow: this.props.disableShadow,
        }

        if(this.props.disabled){
            switch (this.props.variant){
                default:
                    button = <DisabledDefaultButton specs={childProps}>{disabledText}</DisabledDefaultButton>
                    break
                case "text":
                    button = <DisabledText specs={childProps}>{disabledText}</DisabledText>
            }
        } else{
            switch (this.props.variant){
                default:
                    button = <DefaultButton onClick={this.props.onClick} specs={childProps}>
                        <span style={{display: startIconDisplay}} className="material-icons-outlined startIcon">
                                        {this.props.startIcon}
                                </span>
                                {defaultText}
                                <span style={{display: endIconDisplay}} className="material-icons-outlined endIcon">
                                        {this.props.endIcon}
                                </span>
                            </DefaultButton>
                    break
                case "outline":
                    button = <OutlineButton onClick={this.props.onClick} specs={childProps}>{defaultText}</OutlineButton>
                    break
                case "text":
                    button = <TextButton onClick={this.props.onClick} specs={childProps}>{defaultText}</TextButton>
            }
        }
        return(
            <div>
                {button}
            </div>
        )
    }
}
Button.propTypes = {
    text: PropTypes.string,
    variant: PropTypes.string,
    disableShadow: PropTypes.bool,
    disabled: PropTypes.bool,
    size: PropTypes.string,
    color: PropTypes.string,
    startIcon: PropTypes.string,
    endIcon: PropTypes.string,
    onClick: PropTypes.func
}
Button.defaultProps = {
    text: "Default",
    variant: "default",
    disableShadow: false,
    disabled: false,
    size: "md",
    color: "default",
    startIcon: "",
    endIcon: "",
}