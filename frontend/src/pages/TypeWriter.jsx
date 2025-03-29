import React, { useState, useEffect } from 'react';

const Typewriter = ({ words }) => {
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        const currentWord = words[wordIndex];
        
        const type = () => {
            setDisplayedText(currentWord.substring(0, isDeleting ? charIndex - 1 : charIndex + 1));
            if (!isDeleting && charIndex < currentWord.length) {
                setCharIndex(charIndex + 1);
            } else if (isDeleting && charIndex > 0) {
                setCharIndex(charIndex - 1);
            } else if (isDeleting && charIndex === 0) {
                setIsDeleting(false);
                setWordIndex((wordIndex + 1) % words.length);
            } else {
                setIsDeleting(true);
            }
        };

        const typingSpeed = isDeleting ? 100 : 200; // Speed up the deletion
        const timeout = setTimeout(type, typingSpeed);

        return () => clearTimeout(timeout);
    }, [charIndex, wordIndex, isDeleting, words]);

    return <h1 id="typewriter" className="text-4xl font-bold">{displayedText}</h1>;
};

export default Typewriter;
