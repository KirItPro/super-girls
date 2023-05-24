import { useEffect, useState} from 'react';

import LEFT_VECTOR from '../images/left.svg';
import RIGHT_VECTOR from '../images/right.svg';

import './Reviews.css';

import R1 from '../images/img_reviews/r1.jpg';
import R2 from '../images/img_reviews/r2.jpg';
import R3 from '../images/img_reviews/r3.jpg';
import R4 from '../images/img_reviews/r4.jpg';
import R5 from '../images/img_reviews/r5.jpg';
import R6 from '../images/img_reviews/r6.jpg';
import R7 from '../images/img_reviews/r7.jpg';
import R8 from '../images/img_reviews/r8.jpg';
import R9 from '../images/img_reviews/r9.jpg';
import R10 from '../images/img_reviews/r10.jpg';
import R11 from '../images/img_reviews/r11.jpg';
import R12 from '../images/img_reviews/r12.jpg';
import R13 from '../images/img_reviews/r13.jpg';
import R14 from '../images/img_reviews/r14.jpg';

const data = [
    {id: 0, img: R1},
    {id: 1, img: R2},    
    {id: 2, img: R3},
    {id: 3, img: R4},
    {id: 4, img: R5},
    {id: 5, img: R6},
    {id: 6, img: R7},
    {id: 7, img: R8},
    {id: 8, img: R9},
    {id: 9, img: R10},
    {id: 10, img: R11},
    {id: 11, img: R12},
    {id: 12, img: R13},
    {id: 13, img: R14},
]

const Reviews = () => {
    const [people, setPeople] = useState(data);
    const [peopleIndex, setPeopleIndex] = useState(0);

    useEffect(() => {
        let lastPerson = people.length - 1;

        if (peopleIndex < 0) {
            setPeopleIndex(lastPerson)
        } else if (peopleIndex > lastPerson) {
                setPeopleIndex(0)
            }
    }, [peopleIndex, people]);

    useEffect(() => {
        let slider = setInterval( () => setPeopleIndex(prevState => prevState + 1), 5000 );
        return () => {
            clearInterval(slider)
        }
    }, [peopleIndex]);
    let position = 'view';
    return (
        <div className="reviews">
            <div className="container">
                <h2>Отзывы</h2>
                <b>Мы №1 по отзывам в г.Краснодар</b>
                <div className="present-img">
                    <button type='button' title='back' className="btn-style" onClick={ () => setPeopleIndex(prevState => prevState - 1)}>
                        <img className="vector_img" src={LEFT_VECTOR} alt="photo_client" />
                    </button>
                    {
                        people.map((person, index) => {
                            const {id,img} = person;
                            if (index === peopleIndex) {
                                position = 'view';
                            } else {
                                position = 'view not';
                            }
                            return (
                                <div className={position} key= {id}>
                                    <img className='present-img' src={img} alt={id+'img'} />
                                </div>
                            )
                        })
                    }
                    <button type='button' title='next' className="btn-style"href='#' onClick={ () => setPeopleIndex(prevState => prevState + 1)}>
                        <img className="vector_img" src={RIGHT_VECTOR} alt="photo_client" />
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Reviews;