function Title({ styles, ...props }) {
  return (
    <p
      {...props}
      style={{
        fontSize: "1.2em",
        fontWeight: "bold",
        ...styles,
      }}
    />
  );
}

function Line({ styles, ...props }) {
  return (
    <hr
      {...props}
      style={{ border: "solid 1px #efefef", background: "#efefef", ...styles }}
    />
  );
}

function Card({ styles, ...props }) {
  return (
    <div
      {...props}
      style={{
        background: "white",
        borderRadius: ".5em",
        boxShadow: "0px 2px 5px 0px rgba(0, 0, 0, .12)",
        boxSizing: "border-box",
        padding: "2rem",
        width: "100%",
        ...styles,
      }}
    />
  );
}

function Text({ styles, ...props }) {
  return (
    <span
      {...props}
      style={{
        display: "block",
        fontWeight: "400",
        padding: "0 8px 8px 0",
        fontSize: "16px",
        lineHeight: "24px",
        color: "#333",
        ...styles,
      }}
    />
  );
}

function Select({ styles = {}, children, ...props }) {
  return (
    <div
      style={{
        WebkitAppearance: "none",
        color: "rgb(0, 0, 0)",
        display: "inline-flex",
        height: 40,
        fontSize: 12,
        textTransform: "uppercase",
        userSelect: "none",
        fontWeight: 100,
        position: "relative",
        whiteSpace: "nowrap",
        lineHeight: 0,
        width: "auto",
        minWidth: 160,
        background: "rgb(255, 255, 255)",
        outline: "none",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "rgb(234, 234, 234)",
        borderImage: "initial",
        overflow: "hidden",
        transition:
          "border 0.2s ease 0s, background 0.2s ease 0s, color 0.2s ease-out 0s, box-shadow 0.2s ease 0s",
        borderRadius: 4,
        ...(styles.container || {}),
      }}
    >
      <select
        style={{
          height: "100%",
          boxShadow: "none",
          color: "rgb(0, 0, 0)",
          lineHeight: 40,
          fontSize: 14,
          marginRight: -20,
          width: "calc(100% + 20px)",
          textTransform: "none",
          borderWidth: "initial",
          borderStyle: "none",
          borderColor: "initial",
          borderImage: "initial",
          background: "none transparent",
          padding: "0px 76px 0px 16px",
          outline: "none",
          ...(styles.select || {}),
        }}
        {...props}
      >
        {children}
      </select>
      <div
        style={{
          width: 30,
          height: "100%",
          position: "absolute",
          right: 0,
          pointerEvents: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderLeft: "1px solid rgb(234, 234, 234)",
          background: "rgb(255, 255, 255)",
          transition: "border 0.2s ease 0s",
          ...(styles.icon || {}),
        }}
      >
        <svg
          width="7"
          height="17"
          viewBox="0 0 7 12"
          fill="none"
          aria-label="arrow double"
        >
          <path
            d="M0.642491 3.35053L0.292945 3.70804L1.00798 4.40714L1.35752 4.04962L0.642491 3.35053ZM3.75752 1.59491L4.10707 1.23739L3.39204 0.538299L3.04249 0.895815L3.75752 1.59491ZM5.58506 4.04651L5.93149 4.40704L6.65256 3.71417L6.30613 3.35364L5.58506 4.04651ZM3.95354 0.9053L3.6071 0.544767L2.88604 1.23763L3.23247 1.59817L3.95354 0.9053ZM1.35752 7.95041L1.00797 7.59289L0.292938 8.29198L0.642485 8.6495L1.35752 7.95041ZM3.04248 11.1042L3.39203 11.4617L4.10706 10.7626L3.75751 10.4051L3.04248 11.1042ZM6.36054 8.64636L6.70697 8.28583L5.98591 7.59296L5.63947 7.95349L6.36054 8.64636ZM3.28688 10.4018L2.94045 10.7624L3.66152 11.4552L4.00795 11.0947L3.28688 10.4018ZM1.35752 4.04962L3.75752 1.59491L3.04249 0.895815L0.642491 3.35053L1.35752 4.04962ZM6.30613 3.35364L3.95354 0.9053L3.23247 1.59817L5.58506 4.04651L6.30613 3.35364ZM0.642485 8.6495L3.04248 11.1042L3.75751 10.4051L1.35752 7.95041L0.642485 8.6495ZM5.63947 7.95349L3.28688 10.4018L4.00795 11.0947L6.36054 8.64636L5.63947 7.95349Z"
            fill="#000"
          />
        </svg>
      </div>
    </div>
  );
}

function ATMIcon(props) {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="600.000000pt"
      height="480.000000pt"
      viewBox="0 0 600.000000 480.000000"
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <title>Cajero</title>
      <g
        transform="translate(0.000000,480.000000) scale(0.100000,-0.100000)"
        fill="#000000"
        stroke="none"
      >
        <path
          d="M2400 4381 l-425 -247 -50 -66 c-130 -173 -287 -461 -380 -696 -63
  -161 -132 -394 -164 -552 -55 -273 -54 -265 -58 -1060 -4 -709 -3 -747 14
  -762 10 -9 351 -208 757 -443 617 -356 744 -426 770 -423 34 4 1490 839 1519
  870 16 19 17 99 17 1377 0 1070 -3 1361 -13 1373 -6 9 -348 211 -758 447 -538
  311 -754 431 -775 430 -19 0 -182 -90 -454 -248z m1125 -291 c355 -205 645
  -375 645 -379 0 -8 -672 -394 -685 -394 -18 1 -1316 755 -1310 761 25 25 674
  391 688 388 9 -2 308 -172 662 -376z m-804 -505 c360 -208 655 -378 656 -379
  1 -1 -19 -33 -44 -72 -26 -38 -70 -109 -99 -157 l-51 -88 -12 29 c-14 33 -174
  132 -213 132 -55 0 -93 -61 -64 -105 8 -13 55 -46 103 -74 69 -41 95 -51 119
  -47 l31 4 -68 -152 c-145 -325 -232 -637 -275 -991 -14 -111 -18 -264 -23
  -747 l-6 -607 -655 378 -655 379 -3 553 c-3 556 5 793 33 978 53 352 152 662
  314 977 101 196 218 377 241 371 9 -2 311 -174 671 -382z m1529 -1252 l-1
  -1248 -651 -375 c-358 -206 -655 -377 -660 -379 -6 -2 -8 228 -5 630 4 658 7
  709 53 944 81 420 245 816 479 1162 l70 104 355 204 c195 113 356 205 358 205
  1 0 2 -561 2 -1247z"
        />
        <path
          d="M2031 3781 c-32 -32 -128 -202 -206 -364 -113 -235 -188 -458 -240
  -717 -32 -153 -32 -190 -2 -217 12 -11 198 -122 414 -247 260 -150 402 -226
  421 -226 51 0 61 17 97 169 48 195 78 292 142 456 64 162 157 351 244 498 63
  104 74 146 48 172 -33 32 -850 495 -874 495 -14 0 -34 -9 -44 -19z m455 -373
  l302 -174 -46 -80 c-135 -236 -256 -529 -333 -802 -35 -124 -46 -151 -58 -147
  -39 15 -641 368 -641 376 0 24 54 253 81 348 56 192 159 433 265 618 l47 82
  41 -24 c22 -13 177 -102 342 -197z"
        />
        <path
          d="M2087 3508 c-63 -84 -199 -403 -255 -598 -62 -213 -74 -291 -49 -322
  21 -28 482 -288 509 -288 45 0 64 29 98 145 47 162 140 393 231 571 43 86 79
  168 79 180 0 13 -8 32 -18 42 -9 9 -128 81 -264 160 -167 96 -257 142 -277
  142 -22 0 -36 -9 -54 -32z m268 -243 c94 -54 171 -99 172 -99 1 -1 -26 -60
  -61 -132 -70 -141 -161 -367 -196 -482 l-22 -72 -32 19 c-17 10 -83 48 -146
  84 -170 97 -156 70 -115 224 19 73 53 181 75 239 47 125 140 325 149 320 3 -2
  83 -48 176 -101z"
        />
        <path
          d="M1761 2241 c-27 -27 -33 -70 -29 -205 3 -108 5 -117 28 -139 41 -39
  654 -387 682 -387 13 0 34 10 46 23 21 22 22 33 22 169 0 124 -3 149 -17 166
  -28 33 -658 392 -687 392 -15 0 -35 -9 -45 -19z m392 -336 l207 -120 0 -36 0
  -37 -237 137 -238 137 -3 39 -3 38 33 -20 c18 -10 126 -73 241 -138z"
        />
      </g>
    </svg>
  );
}

function AllDayIcon(props) {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="600.000000pt"
      height="480.000000pt"
      viewBox="0 0 600.000000 480.000000"
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <title>24 horas</title>
      <g
        transform="translate(0.000000,480.000000) scale(0.100000,-0.100000)"
        fill="#000000"
        stroke="none"
      >
        <path
          d="M2875 4404 c-369 -36 -643 -123 -913 -287 -334 -204 -604 -501 -772
-848 -268 -555 -268 -1193 0 -1747 229 -473 645 -848 1135 -1022 116 -41 295
-84 415 -101 122 -16 398 -16 520 0 674 93 1256 514 1550 1123 122 253 200
567 200 811 l0 67 -123 0 -123 0 -12 -142 c-66 -790 -626 -1421 -1407 -1588
-142 -31 -438 -39 -591 -16 -193 28 -328 69 -504 152 -303 144 -539 350 -723
629 -349 530 -380 1228 -80 1785 179 333 442 586 778 750 160 78 281 120 439
153 96 19 141 22 341 22 201 -1 243 -4 335 -23 191 -42 375 -112 538 -204 l73
-42 -108 -108 c-59 -59 -105 -109 -102 -111 7 -6 943 -247 946 -244 2 3 -232
907 -243 936 -3 10 -54 -34 -158 -138 l-153 -153 -109 66 c-206 123 -462 216
-707 256 -115 19 -360 32 -442 24z"
        />
        <path
          d="M2954 3947 c-2 -7 -3 -65 -2 -128 l3 -114 63 -3 62 -3 0 131 0 130
-60 0 c-41 0 -62 -4 -66 -13z"
        />
        <path
          d="M2445 3080 c-176 -24 -294 -123 -346 -291 -11 -34 -19 -87 -19 -120
l0 -59 130 0 130 0 0 44 c0 81 42 161 102 192 45 23 144 16 186 -15 47 -33 72
-88 72 -161 0 -69 -16 -115 -60 -169 -29 -37 -55 -59 -215 -177 -110 -81 -253
-221 -292 -286 -35 -58 -73 -188 -73 -250 l0 -38 453 2 452 3 3 118 3 117
-286 0 c-162 0 -285 4 -285 9 0 18 112 110 244 201 162 110 248 191 282 264
70 153 51 342 -46 464 -90 115 -263 175 -435 152z"
        />
        <path
          d="M3532 3078 c-5 -7 -118 -192 -251 -411 l-241 -397 0 -110 0 -110 265
0 265 0 0 -150 0 -151 128 3 127 3 3 148 3 147 74 0 75 0 0 105 0 105 -75 0
-75 0 -2 413 -3 412 -141 3 c-105 2 -144 -1 -152 -10z m38 -548 l0 -270 -161
0 c-101 0 -159 4 -157 10 4 12 312 529 316 530 1 0 2 -121 2 -270z"
        />
        <path d="M1480 2420 l0 -60 130 0 130 0 0 60 0 60 -130 0 -130 0 0 -60z" />
        <path d="M4300 2420 l0 -60 125 0 125 0 0 60 0 60 -125 0 -125 0 0 -60z" />
        <path
          d="M2954 1127 c-2 -7 -3 -65 -2 -128 l3 -114 63 -3 62 -3 0 131 0 130
-60 0 c-41 0 -62 -4 -66 -13z"
        />
      </g>
    </svg>
  );
}

function MapPin(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function LoaderIcon(props) {
  return (
    <svg
      id="L4"
      x="0px"
      y="0px"
      viewBox="0 0 100 100"
      enableBackground="new 0 0 0 0"
      xmlSpace="preserve"
      {...props}
    >
      <circle fill="#fff" stroke="none" cx={6} cy={50} r={6}>
        <animate
          attributeName="opacity"
          dur="1s"
          values="0;1;0"
          repeatCount="indefinite"
          begin={0.1}
        />
      </circle>
      <circle fill="#fff" stroke="none" cx={26} cy={50} r={6}>
        <animate
          attributeName="opacity"
          dur="1s"
          values="0;1;0"
          repeatCount="indefinite"
          begin={0.2}
        />
      </circle>
      <circle fill="#fff" stroke="none" cx={46} cy={50} r={6}>
        <animate
          attributeName="opacity"
          dur="1s"
          values="0;1;0"
          repeatCount="indefinite"
          begin={0.3}
        />
      </circle>
    </svg>
  );
}

export {
  Card,
  Text,
  Title,
  Line,
  Select,
  ATMIcon,
  AllDayIcon,
  MapPin,
  LoaderIcon,
};
