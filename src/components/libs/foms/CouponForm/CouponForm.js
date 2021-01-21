import React from 'react';
import s from './CouponForm.module.scss';

class CouponForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''}

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    handleSubmit(event) {
        alert('Check your email: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className={s.form}>
                <label htmlFor="iCoupon">
                    Name:
                    <input id={`iCoupon`} type="text" value={this.state.value}
                    onChange={this.handleChange}/>
                </label>
                <input type="submit" value={`Send`}/>
            </form>
        )
    }
}

export default CouponForm;