import {useEffect, useState} from "react";
import {windowSize} from "../../interface/windowSize";



export function useWindowSize(): windowSize {
    const [windowSize, setWindowSize] = useState<windowSize>({
        width: undefined,
        height: undefined,
    });
    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
}