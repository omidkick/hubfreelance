// import { useEffect, useRef } from "react";

// export default function useOutsideClick(handler, listenCapturing = true) {
//   const ref = useRef();

//   useEffect(() => {
//     function handelClick(e) {
//       if (ref.current && !ref.current.contains(e.target)) {
//         handler();
//       }
//     }

//     document.addEventListener("click", handelClick, listenCapturing);

//     return () => {
//       document.removeEventListener("click", handelClick, listenCapturing);
//     };
//   }, [handler, listenCapturing]);

//   return ref;
// }


import { useEffect, useRef } from "react";

export default function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();

  useEffect(() => {
    function handlePointerDown(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        handler();
      }
    }

    document.addEventListener("pointerdown", handlePointerDown, listenCapturing);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown, listenCapturing);
    };
  }, [handler, listenCapturing]);

  return ref;
}
