import { useState, useEffect } from 'react'

// export default function usePersistedState(key, initialState) {

//     const [state, setState] = useState(() => {

//         if (typeof window !== 'undefined'){
//             const storageValue = localStorage.getItem(key)
//             if (storageValue) {
//                 return JSON.parse(storageValue)
//             } else {
//                 return initialState
//             }
//         }

//     })

//     useEffect(() => {
//         localStorage.setItem(key, JSON.stringify(state))
//     }, [key, state])

//     return [state, setState]

// }


function usePersistedState(key, initialState) {

    if (typeof window !== 'undefined') {

        const [state, setState] = useState(() => {
            let storageValue = localStorage.getItem(key);
            return JSON.parse(storageValue) || initialState;
        });

        useEffect(() => {
            localStorage.setItem(key, JSON.stringify(state));
        }, [key, state]);

        return [state, setState];
    }
}

export default usePersistedState
