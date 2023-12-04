"use client"

import { useEffect, useRef } from "react"
import Typed from "typed.js"

export default function TypeJS({ text }: { text: string }) {

    const el = useRef(null)

    const TextTyped = text.split(',')

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: TextTyped,
            typeSpeed: 50,
            backSpeed: 50,
            loop: true
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, [])

    return (
        <div className="italic font-medium">
            <span ref={el} />
        </div>
    )
}
