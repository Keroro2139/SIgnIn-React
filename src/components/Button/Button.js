import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';

class Button extends Component {
    render() {
        const styles = {
            button: {
                cursor: 'pointer',
                fontFamily: 'inherit',
                border: this.props.border ?
                    this.props.border : '1px solid #ccc',
                width: this.props.width ?
                    this.props.width : '120px',
                height: this.props.height ?
                    this.props.height : 30,
                borderRadius: this.props.borderRadius ?
                    this.props.borderRadius : 2,
                background: this.props.background ?
                    this.props.background : '#fff',
                outline: this.props.outline ?
                    this.props.outline : 'none',
                transition: this.props.transition ?
                    this.props.transition : 'all .1s ease-in-out',
                color: this.props.color ?
                    this.props.color : '#202020',
                ':hover': {
                    background: this.props.hover ?
                        this.props.hover : '#E9E9E9'
                },
                padding: this.props.padding ?
                    this.props.padding : null,
                marginTop: this.props.marginTop,
                textTransform: 'uppercase',
                letterSpacing: 1,
                boxShadow: this.props.boxShadow,
            }
        }

        return (
            <div>
                <StyleRoot>
                    <button type={this.props.type} style={styles.button}>
                        {this.props.text ? this.props.text : 'Button'}
                    </button>
                </StyleRoot>
            </div>
        );
    }
}

export default Radium(Button);
