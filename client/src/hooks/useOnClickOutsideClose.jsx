import { useEffect } from "react";

const useOnClickOutsideClose = (ref, handler) => {
    useEffect(() => {
        const listener = (event) => {
            if (!ref.current || ref.current.contains(event.target)) return;
            handler(event);
        };

        document.addEventListener("onmousedown", listener);
        document.addEventListener("ontouchstart", listener);

        return () => {
            document.removeEventListener("onmousedown", listener);
            document.removeEventListener("ontouchstart", listener);
        };
    }, [ref, handler]);
};

export default useOnClickOutsideClose;
