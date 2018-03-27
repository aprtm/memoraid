import React from 'react';
import update from 'immutability-helper';
import './formStyle.css'

export default class SuperForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            controls: [],
            formValid: false
        }

    }

    runValidators = (target) => {
        this.props.validators[target.name].forEach( ({type, validator}) => {
            let valid = validator(target.value);
            if(!valid) {
                target.classList.remove('valid');
                target.classList.add('superForm_control--invalid');
            } else {
                target.classList.remove('superForm_control--invalid');
                target.classList.add('valid');
            }

            const nextState = update(this.state, {
                controls: {
                    $push: [{
                        name: target.name,
                        valid: valid,
                        type
                    }]
                }
            })
            
            this.updateFormValidity(nextState.controls);

            this.setState((state)=>{
                return nextState;
            });
        });
    }

    updateFormValidity = (controls) => {
        console.log('checking form validity with', controls);
        let formValid = true;
        for (let i = 0; i<controls.length; i++ ) {
            if (!controls[i].valid) {
                formValid = false;
                break;
            }
        }
        if(!formValid !== this.state.formValid) {
            console.log('will update form validity with', formValid);
            this.setState((state) => {
                return update(state, {
                    formValid: {$set: formValid}
                })
            });
        }
        console.log('form is now', formValid);
    }

    formChangeHandler = (ev) => {
        console.log('form control changed!', ev.target.name);
        this.runValidators(ev.target);
    }
    render() {
        let {className} = this.props;
        if (className) {
            className += this.state.formValid ? ' valid' : ' superForm_form--invalid';
        }
        return (
            <form
                onChange={this.formChangeHandler}
                className={className}
            >
                {this.props.children}
            </form>
        );
    }
}