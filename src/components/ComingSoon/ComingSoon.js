import React from 'react';
import s from './ComingSoon.module.scss';

const ComingSoon = (props) => {

    let clock = document.getElementById(props.id);
    let times = 0;

    function setTime() {
        // Set the date we're counting down to
        let countDownDate = new Date(props.dateString).getTime();

// Update the count down every 1 second
        let countdownfunction = setInterval(function () {

            // Get todays date and time
            let now = new Date().getTime();

            // Find the distance between now an the count down date
            let distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);


            clock.innerHTML = "Will be done at " + props.dateString + "<br>" +
                days + "d " + hours + "h "
                + minutes + "m " + seconds + "s left";

            // If the count down is over, write some text
            if (distance < 0) {
                clearInterval(countdownfunction);
                clock.innerHTML = "EXPIRED";
            }
        }, 1000);
    }


    let setTimeToEnd = setInterval(function () {
        clock = document.getElementById(props.id);
        if (times > 10) {
            clearInterval(setTimeToEnd)
        }
        if (clock != null) {
            setTime();
            clearInterval(setTimeToEnd);
        } else {
            times++;
        }
    }, 500);

    return (
        <section className={s.bg_img}>
            <h2 id={props.id}></h2>
        </section>
    );
};

export default ComingSoon;