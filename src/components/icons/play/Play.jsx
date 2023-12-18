import React from "react";

import "./Play.scss";

const Play = (props) => {
    return (
        <div className="play">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
            >
                <path
                    d="M14.451 10.1366C15.1949 9.56102 15.1949 8.43793 14.451 7.86232C12.2029 6.12277 9.69246 4.75165 7.01381 3.80029L6.52445 3.62649C5.58825 3.29398 4.59936 3.92741 4.47262 4.89382C4.1185 7.59398 4.1185 10.405 4.47262 13.1051C4.59936 14.0715 5.58825 14.705 6.52445 14.3725L7.01381 14.1987C9.69246 13.2473 12.2029 11.8762 14.451 10.1366Z"
                    fill="#2E3130"
                />
            </svg>
        </div>
    );
};

export default Play;
