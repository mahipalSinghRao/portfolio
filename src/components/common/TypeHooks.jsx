import { useState, useEffect } from "react";

export function useTypewriter(texts, speed = 80, delay = 1500) {
    const [displayText, setDisplayText] = useState("");
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const current = texts[textIndex];

        let timeout;

        if (!isDeleting && charIndex < current.length) {
            timeout = setTimeout(() => {
                setDisplayText(current.substring(0, charIndex + 1));
                setCharIndex((prev) => prev + 1);
            }, speed);
        }
        else if (isDeleting && charIndex > 0) {
            timeout = setTimeout(() => {
                setDisplayText(current.substring(0, charIndex - 1));
                setCharIndex((prev) => prev - 1);
            }, speed / 2);
        }
        else {
            timeout = setTimeout(() => {
                if (!isDeleting) {
                    setIsDeleting(true);
                } else {
                    setIsDeleting(false);
                    setTextIndex((prev) => (prev + 1) % texts.length);
                }
            }, delay);
        }

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, textIndex, texts, speed, delay]);

    return displayText;
}