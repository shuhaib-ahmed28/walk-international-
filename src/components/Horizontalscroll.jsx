import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';



gsap.registerPlugin(ScrollTrigger)

const Horizontalscroll = () => {
    useGSAP(() => {
        gsap.to('.page1 ', {
            transform: "translateX(-68%)",
            duration: 10,
            scrollTrigger: {
                trigger: "main",
                scroller: "body",
                markers: true,
                start: "top 0%",
                end: "top -100%",
                scrub: 2,
                pin: true
            }
        })
    })
    return (
        <main>
            <h1>From Vision to Reality</h1>
            <p>Steps To Make Your Way to the Dream University Abroad</p>
            <div className="page1">
                <div className="box">
                    <img src="/images/horizontalsvgs/img1.svg" alt="" width="120px" height="120px" />
                    <img src="/images/horizontalsvgs/hawkeye.svg" alt="" className='hawkeye' />
                    <hr />
                    <h3 className='head1'>Step 1</h3>
                    <p className="para1">www.walkinternational.com - Your <br />Gateway to Success!</p>
                </div>
                <div className="box">
                    <h3 className='head2'>Step 2</h3>
                    <p className="para2">Discover Your Perfect Course with Our <br /> Course Finder</p>
                    <button className='step2btn'>Read More <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.0001885070960270241 0.001999974250793457 16.00200843811035 6.374000549316406"><g clip-path="url(#footerMobileAccordation_svg__a)"><path fill="#391952" d="M15.313 1.796c.217-.138.519-.232.627-.43.112-.207.037-.517.04-.781.003-.395 0-.163 0-.583L7.988 2.525C5.316 1.68 2.677.847.005.005.005.594.014.527 0 1.089c-.004.21.055.332.24.449 2.528 1.585 5.22 3.249 7.748 4.838 2.388-1.501 4.94-3.073 7.325-4.58Z"></path></g></svg></button>
                    <img src="/images/horizontalsvgs/hawkeye.svg" alt="" className='hawkeye1' />
                    <hr />
                    <img src="/images/horizontalsvgs/img3.svg" alt="" width="100px" height="100px" />

                </div>
                <div className="box">
                    <img src="/images/horizontalsvgs/img4.svg" alt="" width="120px" height="120px" />
                    <img src="/images/horizontalsvgs/hawkeye.svg" alt="" className='hawkeye' />
                    <hr/>
                    <h3 className='head1'>Step 3</h3>
                    <p className='para1'>Explore Top Universities & Courses <br />Worldwide!</p>

                </div>
                <div className="box">
                    <h3 className='head3'>Step 4</h3>
                    <p className='para2'>Expert Counsellors by Your Side - Your <br />Overseas Education Guides!</p>
                    <img src="/images/horizontalsvgs/hawkeye.svg" alt="" className='hawkeye2' />
                    <hr />
                    <img src="/images/horizontalsvgs/img5.svg" alt="" width="100px" height="100px" />

                </div>
                <div className="box">
                    <img src="/images/horizontalsvgs/img6.svg" alt="" width="120px" height="120px" />
                    <img src="/images/horizontalsvgs/hawkeye.svg" alt="" className='hawkeye' />
                    <hr/>
                    <h3 className='head1'>Step 5</h3>
                    <p className='para1'>Ace Standardized Exams with Training <br /> from Our Expert Tutors!</p>
                </div>
                <div className="box">
                    <h3 className='head3'>Step 6</h3>
                    <p className='para2'>All Documentation Sorted - Smooth <br />Sailing Ahead!</p>
                    <img src="/images/horizontalsvgs/hawkeye.svg" alt="" className='hawkeye2' />
                    <hr />
                    <img src="/images/horizontalsvgs/img7.svg" alt="" width="100px" height="100px" />

                </div>
                <div className="box">
                    <img src="/images/horizontalsvgs/img8.svg" alt="" width="120px" height="120px" />
                    <img src="/images/horizontalsvgs/hawkeye.svg" alt="" className='hawkeye' />
                    <hr />
                    <h3 className='head1'>Step 7</h3>
                    <p className='para1'>Let the Application Journey Begin - Your <br />Future Awaits!</p>

                </div>
                <div className="box">
                    <h3 className='head3'>Step 8</h3>
                    <p className='para2'>Grab That Coveted Offer Letter from Your <br />Dream University!</p>
                    <img src="/images/horizontalsvgs/hawkeye.svg" alt="" className='hawkeye2' />
                    <hr />
                    <img src="/images/horizontalsvgs/img9.svg" alt="" width="100px" height="100px" />

                </div>
                <div className="box">
                    <img src="/images/horizontalsvgs/img10.svg" alt="" width="120px" height="120px" />
                    <img src="/images/horizontalsvgs/hawkeye.svg" alt="" className='hawkeye' />
                    <hr />
                    <h3 className='head1'>Step 9</h3>
                    <p className='para1'>Financial Loans? No Worries! We have Got <br />Reliable Loan Partners!</p>
                </div>
                <div className="box">
                    <h3 className='head3'>Step 10</h3>
                    <p className='para2'>Take Off to Your Dreams - Clear the Visa <br />Process & Fly High!</p>
                    <img src="/images/horizontalsvgs/hawkeye.svg" alt="" className='hawkeye2' />
                    <hr />
                    <img src="/images/horizontalsvgs/img11.svg" alt="" width="100px" height="100px" />

                </div>



            </div>
        </main>

    );
};

export default Horizontalscroll;