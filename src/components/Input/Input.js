import React, { Component } from 'react';

class Input extends Component {
    render() {
        const styles = {
            input: {
                outline: this.props.outline ?
                    this.props.outline : 'none',
                padding: this.props.padding ?
                    this.props.padding : '8px 15px',
                fontSize: this.props.fontSize ?
                    this.props.fontSize : '14px',
                background: this.props.background ?
                    this.props.background : '#EFEFEF',
                width: this.props.width ?
                    this.props.width : 240,
                height: this.props.height,
                border: this.props.border ?
                    this.props.border : '1px solid #ddd',
                borderRadius: this.props.borderRadius ?
                    this.props.borderRadius : 2,
                margin: this.props.margin ?
                    this.props.margin : null,
                marginTop: this.props.marginTop ?
                    this.props.marginTop : 7,
                marginBottom: this.props.marginBottom ?
                    this.props.marginBottom : 7,
                marginLeft: this.props.marginLeft ?
                    this.props.marginLeft : 0,
                marginRight: this.props.marginRight ?
                    this.props.marginRight : 0,
            }
        }

        return (
            <div>
                <input
                    type={this.props.type}
                    style={styles.input}
                    placeholder={this.props.placeholder}
                    autoFocus={this.props.autoFocus}
                    name={this.props.name}
                />
            </div>
        );
    }
}

export default Input;
