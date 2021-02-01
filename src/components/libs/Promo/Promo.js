import React from 'react';
import s from './Promo.module.scss';
import img from "../../../assets/img/png/percent-arrow.png";
import Timer from "./Timer/Timer";

class Promo extends React.Component {
    constructor(props) {
        super(props);
        this.countDownDate = new Date(props.dateString).getTime();
        this.state = {
            date: new Date().getTime(),
            distance: this.countDownDate - new Date().getTime(),

        }
    }

    componentDidMount() {
        this.timerId = setInterval(
            ()=> this.tick(),
            1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {
        this.now = new Date().getTime();
        this.setState({
            date: this.now,
            distance: this.countDownDate - this.now,
        })
    }

    render() {
        let timer;
        let content = this.props.content || 'Купить лицензионные ключи с огромной скидкой';
        if (this.state.distance < 0) {
            timer = <div>Promo has been finished</div>
        } else {
            timer = <Timer distance={this.state.distance}/>
        }
        return (
            <div className={s.promo}>
                <img src={img} alt="arrow"/>
                <h3>{content}</h3>
                <div>{timer}</div>
            </div>
        );
    }
}

export default Promo;