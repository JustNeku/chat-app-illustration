import './phone.scss';

import avatar from '../assets/images/avatar.jpg';
import dog01 from '../assets/images/dog-image-1.jpg';
import dog02 from '../assets/images/dog-image-2.jpg';
import dog03 from '../assets/images/dog-image-3.jpg';

function Phone() {

    return (
        <div className="phone">
            <div className="header">
                <i className="bi bi-chevron-compact-left"></i>
                <div className="ava">
                    <img src={avatar} alt="Avatar" />
                </div>
                <div className="header-text">
                    <p className="name">Samuel Green</p>
                    <p className='status'>Available to Walk</p>
                </div>
                <i className="bi bi-three-dots-vertical"></i>

                <div className="white-blob"></div>
            </div>

            <div className="messages">
                <p className="left">
                    That sounds great. I'd be happy to discuss more.
                </p>
                <p className="left">
                    Could you send over some pictures of your dog, please?
                </p>
                <div className="right-images spacer">
                    <img src={dog01} alt="Dog 1" /><img src={dog02} alt="Dog 2" /><img src={dog03} alt="Dog 3" />
                </div>
                <p className="right">
                    Here are a few pictures. She's a happy girl!
                </p>
                <p className="right">Can you make it?</p>
                <p className="left spacer">She looks so happy! The time we discussed works. How long shall I take her out for?</p>
                <div className="time-booking">
                    <div className="radio"></div>
                    <p>30 minute walk</p>
                    <span className="money">$29</span>
                </div>
                <div className="time-booking">
                    <div className="radio"></div>
                    <p>1 hour walk</p>
                    <span className="money">$49</span>
                </div>
            </div>
            <div className="input">
                <p>Type a message...</p>
                <div className="submit-btn">
                    <i className="bi bi-chevron-right"></i>
                </div>
            </div>
        </div>
    )

}

export default Phone;