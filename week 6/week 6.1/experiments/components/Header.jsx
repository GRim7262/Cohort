// React.memo

import React from "react"

export const Header = React.memo(function ({ title }) {
    return (
        <div>
            My name is {title}
        </div>
    )
})

// export function Header({ title }) {
//     return (
//         <div>
//             My name is {title}
//         </div>
//     )
// }