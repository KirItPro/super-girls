
import { useEffect, useState} from 'react';

import './BeforeAfter.css';
import LEFT_VECTOR from '../images/left.svg';
import RIGHT_VECTOR from '../images/right.svg';

import IMG01 from '../images/img_before/01.jpg';
import IMG02 from '../images/img_before/02.jpg';
import IMG3 from '../images/img_before/3.jpg';
import IMG03 from '../images/img_before/03.jpg';
import IMG4 from '../images/img_before/4.jpg';
import IMG04 from '../images/img_before/04.jpg';
import IMG05 from '../images/img_before/05.jpg';
import IMG06 from '../images/img_before/06.jpg';
import IMG6 from '../images/img_before/6.jpg';
import IMG07 from '../images/img_before/07.jpg';
import IMG08 from '../images/img_before/08.jpg';
import IMG09 from '../images/img_before/09.jpg';
import IMG9 from '../images/img_before/9.jpg';
import IMG10 from '../images/img_before/10.jpg';
import IMG11 from '../images/img_before/11.jpg';

const data = [
    {color:'blue',
        id: 0,
    img: IMG01
    },
    {color:'red',
        id: 1,
    img: IMG02},    
    {color:'blue',
        id: 2,
    img: IMG03},
    {color:'red',
        id: 3,
    img: IMG04},
    {color:'blue',
        id: 4,
    img: IMG05},
    {color:'red',
        id: 5,
    img: IMG06}
]

const BeforeAfter = () => {
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
        <div className="compare">
            <div className="container">
                <h2>Наши работы: До / После</h2>
                <div className="present">
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

export default BeforeAfter;