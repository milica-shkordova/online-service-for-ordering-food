import { MutableRefObject, RefObject, useEffect } from "react";

function useOnClickOutside(
    refs: Array<MutableRefObject<null> | RefObject<null>>,
    onClose: () => void
): void {
    return useEffect(() => {
        const listener = (event: Event): void => {
            for (const ref of refs) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                if (!ref.current || ref.current.contains(event.target)) {
                    return;
                }
            }
            onClose();
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return (): void => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [...refs, onClose]);
}

export default useOnClickOutside;
