import React, {useEffect} from 'react';
import Typed from 'typed.js';

const TypedText = () => {
    useEffect(() => {
        const options = {
            strings: ["an Aspiring Software Engineer", "a Data Enthusiast", "a dude that stumbled upon coding in 2015 and stuck with it"],
            typeSpeed: 50,
            backSpeed: 30,
            loop: false
        };

        const typed = new Typed('#typed-text', options);

        return () => {
            typed.destroy();
        }
    }, []);

    return <span id="typed-text"></span>
}

export default TypedText;