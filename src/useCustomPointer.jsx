import { useState, useEffect } from "react";

export default function useCustomPointer(content) {

    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        }

        // aggiungo addEventListener al movimento del mouse
        window.addEventListener("mousemove", handleMouseMove);

        // rimuovo addEventListener allo smontaggio del componente
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        }
    }, []);

    // creo il componente che segue il movimento del mouse
    const pointerElement = (
        <div
            style={{
                position: "fixed",
                left: position.x,
                top: position.y,
                transform: "translate(-50%, -50%)",
                pointerEvents: "none", // il cursore non blocca i click
                zIndex: 9999,
                fontSize: "24px",
            }}
        >
            {content}
        </div>
    );

    // nascondo il cursore del body
    useEffect(() => {
        document.body.style.cursor = "none";
        return () => {
            document.body.style.cursor = "auto"
        }
    }, []);

    return pointerElement;

}