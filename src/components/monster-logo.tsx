import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const MonsterLogo = () => {
  useGSAP(() => {
    gsap.from("#svg", {
      opacity: 0,
      scale: 0.1,
      duration: 1,
    });
    gsap.from(".path", {
      x: 100,
      scale: 1.2,
      duration: 1,
    });
  }, []);

  return (
    <svg
      height="200"
      viewBox=".56 .166 154.273 219.921"
      width="200"
      id="svg"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="#0f0" stroke="#000" strokeWidth="1.128">
        <path d="m136.14 187.575c-.198-2.414 1.053-6.2 3.737-11.308 3.759-7.154 4.06-8.48 4.383-19.329.211-7.158-.135-12.416-.901-13.643-.964-1.545-.756-2.955.929-6.238 1.197-2.331 2.273-4.494 2.387-4.804s-.306-1.832-.934-3.383c-2.004-4.95-1.893-7.901.504-13.317 3.489-7.88 3.683-14.91.54-19.545-3.924-5.786-4.122-7.005-2.283-14.047 1.427-5.461 1.458-6.734.192-7.722-1.859-1.448-1.922-14.758-.084-18.095.682-1.24 1.85-4.656 2.595-7.59.744-2.934 2.05-5.914 2.904-6.622.853-.708 1.55-2.011 1.55-2.896 0-.886.793-3.143 1.762-5.017 1.224-2.369 1.412-3.83.612-4.794-.634-.762-.87-2.465-.526-3.782.411-1.574-.15-3.06-1.639-4.335-1.246-1.067-1.993-2.652-1.658-3.523.836-2.18-3.795-6.84-7.635-7.683-1.74-.382-3.761-1.416-4.492-2.298-1.137-1.367-1.748-1.274-4.178.636-1.565 1.232-3.54 2.24-4.385 2.24-.846 0-1.539.699-1.539 1.552s-.82 2.234-1.822 3.066c-2.018 1.675-9.072 4.339-11.708 4.42-1.65.05-7.893 4.9-7.893 6.13 0 .339 1.928.617 4.286.617 2.357 0 4.823.54 5.483 1.2.661.66 3.868 1.322 7.128 1.472 8.332.383 9.05 1.712 8.677 16.044-.247 9.535-.682 12.018-2.442 13.963-1.967 2.173-2.002 2.616-.427 5.422 1.23 2.193 1.476 4.327.87 7.564-.988 5.283-.334 8.716 2.607 13.7 1.74 2.949 1.997 4.847 1.387 10.24-.541 4.779-.245 8.109 1.063 11.964 2.231 6.57 1.46 29.792-1.156 34.852-1.14 2.206-1.286 3.728-.495 5.205 1.352 2.526.25 10.287-1.746 12.282-1.17 1.17-1.128 2.33.229 6.173.956 2.711 1.363 6.128.951 8-1.065 4.853.553 17.892 2.152 17.324.724-.256 1.18-2.1 1.016-4.095" />
        <path d="m85.25 219.925c.572-.337 1.39-1.407 2.426-3.227 1.78-3.125 4.888-15.973 5.291-21.864.46-6.712.832-9.207 1.639-10.97.56-1.227.06-3.734-1.355-6.765-1.749-3.751-2.17-6.683-1.908-13.272.184-4.65.686-9.332 1.117-10.406.43-1.073.525-7.334.214-13.916-.518-10.886-.324-12.52 2.142-18.097 1.49-3.371 2.71-7.09 2.71-8.266s1.27-3.644 2.82-5.486c3.391-4.031 3.477-6.47.55-15.805-2.519-8.04-2.102-18.438.878-21.866 1.282-1.474 1.48-3.121.813-6.766-.485-2.65-.933-7.353-.998-10.455-.064-3.1-.639-6.652-1.28-7.892-2.222-4.313-1-12.525 2.771-18.604.577-.93 1.313-2.554 1.636-3.609.324-1.054 2.517-2.915 4.873-4.135 4.467-2.314 4.45-2.354-1.633-4.168-.776-.23-1.41-1.323-1.411-2.428-.001-1.257-2.22-3.232-5.92-5.273-3.256-1.795-6.806-4.03-7.891-4.967-1.764-1.522-2.186-1.51-3.965.1-1.096.99-4.425 2.347-7.4 3.013-2.974.667-6.573 1.976-7.998 2.908-1.424.934-3.41 1.382-4.415.996-1.075-.412-4.22.771-7.635 2.873-4.126 2.54-6.156 3.224-7.014 2.367-.66-.664-3.41-1.208-6.107-1.208-3.806 0-5.498-.643-7.567-2.874-1.464-1.58-2.96-2.395-3.323-1.809-1.607 2.603-10.054 5.81-15.296 5.81-3.045 0-5.826.47-6.18 1.041-.353.573-2.285 1.387-4.294 1.811-4.592.968-10.98 3.895-10.98 5.031 0 .473 2.157.632 4.792.35 2.635-.28 8.09.272 12.12 1.226 8.26 1.954 11.997 5.129 10.135 8.607-.879 1.643-.5 2.55 1.836 4.387 2.532 1.991 2.988 3.305 3.256 9.354.17 3.871-.197 8.32-.817 9.884-.62 1.567-1.745 5.763-2.503 9.327-1.287 6.06-1.208 6.762 1.203 10.805 4.337 7.273 7.562 21.067 6.81 29.123-.412 4.418-.22 7.139.521 7.386.647.215 1.4 3.732 1.674 7.815.423 6.304.069 8.28-2.352 13.099-3.387 6.744-3.395 6.823-.892 9.588 1.077 1.19 2.086 4.021 2.24 6.29.697 10.167 1.04 12.384 2.812 18.22 1.036 3.412 2.462 10.262 3.168 15.223.705 4.961 1.964 10.086 2.797 11.39.833 1.302 1.679 4.054 1.88 6.113.201 2.062.887 3.917 1.524 4.125 1.282.42 1.164-4.858-.308-13.736-1.012-6.114-.85-26.347.247-30.72.373-1.485.086-5.709-.637-9.387-1.387-7.052-1.211-8.24 3.667-24.709 2.02-6.817 2.038-7.405.275-8.693-1.425-1.042-1.743-2.48-1.293-5.833.328-2.448.092-4.956-.525-5.571-.743-.743-.107-3.14 1.887-7.108l3.007-5.988-2.253-4.007c-3.269-5.815-5.45-13.142-6.28-21.084-.605-5.779-.336-7.695 1.574-11.259 2.752-5.137 2.909-7.147.553-7.147-1.414 0-1.683-1.233-1.41-6.467.309-5.89.66-6.67 3.947-8.738 2.453-1.545 3.424-2.897 3.032-4.223-.317-1.072-.08-2.836.525-3.917.68-1.215.704-2.706.066-3.9-1.717-3.21.289-3.705 11.565-2.86 5.192.388 8.444 4.549 8.677 11.102.112 3.16-.36 6.423-1.05 7.252-.957 1.155-.543 2.216 1.766 4.525 2.685 2.686 2.903 3.464 1.985 7.095-.594 2.35-.617 5.51-.054 7.46.537 1.861.678 5.853.311 8.87-.505 4.17-.226 5.97 1.164 7.506 1.564 1.729 1.674 3.296.768 10.863-.583 4.863-.685 9.35-.226 9.971.46.62 1.49 3.74 2.291 6.933 1.093 4.354 1.146 6.61.213 9.02-.683 1.769-1.59 5.48-2.014 8.245-.424 2.767-1.154 5.812-1.622 6.766-2.213 4.514-4.509 10.394-4.509 11.55 0 .705.862 2.235 1.916 3.4 1.36 1.503 1.994 4.473 2.187 10.237.628 18.75 1.264 28.605 1.994 30.904.436 1.375.158 3.435-.636 4.707-1.194 1.91-.987 3.103 1.337 7.68 2.957 5.825 3.506 12.555 1.8 22.051-.525 2.933-.53 4.64-.08 5.08m.009.006c.156.152.367.152.63-.003" />
      </g>
      <path
        className="path"
        d="m135.651 184.392c.062-8.132 6.479-13.056 5.427-21.35-.09-7.535.665-15.224-.976-22.599 2.351-5.626 3.15-11.064 1.115-16.919-.184-7.411 4.294-14.221 3.24-21.758-.238-6.174-5.677-11.378-3.582-17.802 2.683-6.798-1.104-13.013-.45-19.927-.014-7.156 2.606-13.937 4.101-20.856 2.006-4.917 4.644-10.716 3.144-16.023.357-4.904-2.184-9.506-3.624-13.684-4.521-3.653-11.517-5.538-13.713 1.299-5.16 3.882-13.074 3.197-16 9.876 3.317 3.04 10.388 1.947 15.385 2.668 7.012 2.28 6.222 11.306 6.29 17.212 1.626 6.961-6.688 11.876-5.127 17.888 4.096 5.96.532 13.233 3.074 19.536 3.179 5.43 2.535 11.663 2.139 17.65.659 7.802 2.417 15.533 1.767 23.445-.195 7.696-.425 15.515-2.613 22.934 1.778 5.845.108 11.932-1.444 17.45 2.241 6.293-.975 12.675.222 19.116-.28 3.011 1.981 13.276 1.157 3.683m-84.142-171.239c-5.231.534-10.472-.461-13.791-4.96-3.83 6.227-12.369 3.395-17.196 7.565-3.223 1.637-11.01.682-11.629 2.008 6.186 2.56 13.597.64 19.215 5.114 6.633 2.886 3.42 10.202 7.786 14.708.905 7.15 1.352 14.899-2.362 21.387-4.397 7.286 2.191 13.43 3.501 20.379 2.347 8.888 3.067 18.128 2.495 27.284 2.286 7.944 2.655 16.95-.754 24.724-2.99 5.718 3.163 10.703 1.916 16.766 1.004 9.511 4.43 18.597 5.005 28.195.357 7.841 4.002 15.495 5.257 23.17-1.327-6.488-1.42-12.471-1.443-18.255-.903-10.39-1.092-20.831-.75-31.227-1.292-7.242-1.09-14.604.75-21.736 2.467-7.171 2.22-13.857.642-20.743-.377-5.16-.6-10.183 1.847-14.996 1.422-2.334.979-4.634-.292-6.918-3.332-9.348-5.419-19.595-4.11-29.502 1.646-4.09 3.386-8.51.16-11.46-1.272-6.549 1.805-11.953 4.817-16.929-.66-2.631 2.448-10.005 1.34-12.59"
        fill="#7fff2a"
      />
      <path
        d="m105.041 175.712c.156.152.367.152.63-.003"
        fill="#0f0"
        stroke="#000"
        strokeWidth="1.128"
      />
      <path
        d="m85.97 218.585c4.911-7.223 2.321-16.647 3.421-24.857 1.605-8.12.996-15.711-1.313-23.595-.5-10.786 2.048-21.436.949-32.232-1.156-7.977 4.217-14.702 6.364-22.218 3.684-8.21 5.244-17.495 1.366-26.408-2.436-8.315 2.166-16.039 3.184-23.882-1.284-7.41-.519-15.786-2.906-22.998-.841-7.474-.714-14.546 2.773-20.932 3.603-2.245 7.45-5.426.795-6.592-1.872-4.79-6.65-10.77-11.133-12.08-6.092 2.81-13.305 4.298-19.538 6.852-4.493 1.45-17.23 9.115-5.466 7.799 7.73-3.152 15.386 1.6 15.202 10.175.992 6.465-2.343 12.175 3.247 17.345-1.43 7.595-.16 15.737-1.192 23.389 2.983 7.444 1.683 15.424 1.288 23.382 1.389 7.11 4.264 14.56 1.315 21.757-.64 6.826-2.589 13.319-4.84 19.759.727 8.279 3.967 17.09 2.87 26.2.185 7.4.61 14.823 1.345 22.164-3.206 7.95 4.425 15.436 2.57 23.8.163 4.413-1.457 8.8-.792 13.174"
        fill="#7fff2a"
      />
      <path
        d="m37.63 13.703c-2.999 3.874-31.481 6.994-18.826 6.917 6.238.256 13.038 3.03 16.525 8.482.041 6.66 4.82 12.369 3.42 19.58 1.142 7.736-5.437 14.504-3.146 22.167 4.693 9.499 5.588 20.419 5.868 30.872-.93 7.109 1.959 13.855 1.275 21.015.495 6.533-5.399 13.018-1.277 19.174 1.077 7.223 1.134 14.618 3.16 21.71 1.989 10.346 1.789 21.025 4.53 31.226.731 3.68 1.926 10.62 1.725 4.253-3.463-16.261-2.41-29.622-1.6-44.451-2.552-8.395-1.482-16.536.183-23.727 1.551-6.984 2.732-13.828.64-20.54.173-5.336-.85-10.611 1.516-15.688 1.052-2.317 1.182-4.62-.04-6.9-3.434-10.742-9.309-24.64-2.362-33.716-1.318-4.045-7.886-20.382 3.292-32.157m34.967 189.635c2.03-3.935 3.227-12.735 2.988-19.05 2.201-7.902-1.18-15.373-1.227-23.264.071-10.143 1.591-20.217.77-30.377-.87-7.568 1.337-14.833 2.88-22.13 2.44-7.847 4.895-15.784 1.9-24.039-1.74-8.275-.288-16.647 1.49-24.611-1.005-8.508.42-16.965-1.921-25.281-.373-7.253-2.402-16.743 2.373-22.402 6.165-2.237.585-4.719.274-8.803-3.13-3.415-7.03-9.677-10.67-2.913-6.498 1.206-13.072.929-18.944 3.92-8.732 3.495 5.112 2.902 8.613 1.283 8.547-1.096 6.314 13.214 6.932 19.22-2.927 7.258 4.855 12.855 3.36 20.002-.581 7.805-.457 15.052 1.61 21.9-.553 7.191-2.11 14.49-2.093 21.604 2.185 7.298 1.692 14.797.14 22.136.096 7.148-3.962 13.798-3.474 20.833 3.624 7.565 1.613 16.308 2.462 24.406-.266 7.264 1.421 14.628.498 21.781-.772 7.547 4.772 14.96 1.19 22.68-.59.916-1.507 3.075.468 3.106m48.291-29.041c.942-6.744 5.234-13.116 3.677-20.17-.86-7.427.61-14.824 1.002-22.199-.707-5.895 3.205-11.537.643-17.461-.767-8.422 3.524-16.539 1.951-25.021-1.4-5.76-3.712-11.545-2.02-17.574 1.429-6.013-1.378-11.791-.601-17.896.097-6.66 1.847-13.147 2.87-19.7 1.461-5 3.245-10.48 2.21-15.689-.364-4.766-.624-10.757-3.757-14.132-.52 2.815-3.287-4.079-5.378.26-4.457-.17-7.313 6.123-12.816 7.093-3.205 1.396-9.436 5.66-2.118 5.298 4.708 2.018 11.07-.65 14.223 4.284 2.436 7.172 2.171 15.242.377 22.547-4.797 5.762-.827 11.782-.705 18.221-1.2 5.99 1.311 11.646 2.262 17.422-.421 6.628.166 13.175 1.58 19.662.524 10.941.605 22.027-1.04 32.876-1.845 6.138-.107 17.117-3.032 23.136.766 6.137 1.534 8.292.14 14.637-.442 2.183-.379 12.901.533 5.14l-.002-.734z"
        fill="#b3ff80"
      />
    </svg>
  );
};
export default MonsterLogo;