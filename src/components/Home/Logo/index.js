import './index.scss'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import  DrawSVGPlugin  from 'gsap/DrawSVGPlugin'
import LogoJ from '../../../assets/images/j.png'


const Logo = () => {
    const bgRef = useRef()
    const outlineLogoRef = useRef()
    const solidLogoRef = useRef()

    useEffect(() => {
      gsap.registerPlugin(DrawSVGPlugin)

      gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })

      .fromTo(outlineLogoRef.current, 
        { duration: 2, drawSVG: '0%' },
        { duration: 2, drawSVG: '60%' }, 
        'start')
    },[])
  
    return (
        <div className='logo-container' ref={bgRef} >
            <img ref={solidLogoRef} className='solid-logo' src={LogoJ} alt="J"/>
            <svg
        width="512pt"
        height="512pt"
        version="1.0"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="svg-container"
          transform="translate(0 512) scale(.1 -.1)"
          fill="none"
        >
          <path
            ref={outlineLogoRef}
            d="M 2765 5113 c -420 -24 -701 -68 -928 -144 c -100 -33 -237 -102 -304 -153 c -73 -55 -136 -144 -153 -217 c -70 -291 275 -504 980 -604 c 209 -30 388 -45 541 -45 l 119 0 l 0 -932 c 0 -1015 0 -1008 -57 -1124 c -76 -156 -251 -271 -469 -309 c -327 -57 -634 57 -771 285 c -32 52 -60 146 -68 224 c -5 46 -14 75 -26 87 c -27 27 -75 24 -105 -7 c -25 -24 -26 -29 -19 -97 c 16 -159 70 -286 167 -392 c 141 -154 358 -247 608 -262 c 184 -10 364 27 525 110 c 106 55 236 182 287 282 c 77 150 73 78 73 1221 c 0 991 -1 1023 -19 1043 c -18 20 -29 21 -195 21 c -436 0 -938 84 -1197 200 c -147 66 -234 151 -234 227 c 0 149 242 292 623 367 c 261 52 665 82 977 72 c 172 -5 238 -11 443 -42 c 42 -6 51 -4 72 16 c 31 29 34 81 6 109 c -48 48 -540 84 -876 64 Z M 3980 4937 c -30 -15 -45 -54 -36 -91 c 5 -21 25 -35 99 -72 c 216 -109 330 -222 389 -385 l 23 -64 l 3 -1285 c 4 -1364 1 -1458 -43 -1652 c -139 -616 -650 -1056 -1389 -1197 c -495 -94 -1115 -14 -1539 200 c -174 87 -286 167 -418 299 c -242 240 -365 502 -399 848 c -13 130 -2 298 29 442 c 102 466 445 909 706 910 c 63 0 114 -26 138 -71 c 19 -35 19 -90 1 -255 c -6 -54 -4 -64 15 -83 c 24 -24 77 -28 104 -9 c 39 30 58 325 25 399 c -25 56 -83 114 -141 140 c -76 35 -217 34 -303 -3 c -254 -106 -514 -436 -639 -810 c -162 -486 -106 -976 158 -1376 c 121 -183 253 -314 452 -447 c 273 -183 634 -308 1035 -357 c 137 -17 527 -16 650 1 c 636 88 1150 376 1435 806 c 109 165 196 373 235 564 c 39 193 41 305 38 1656 l -3 1300 l -27 80 c -56 164 -163 296 -322 400 c -78 51 -223 125 -243 125 c -4 0 -19 -6 -33 -13 Z M 953 1360 c -12 -5 -29 -20 -38 -34 c -15 -23 -15 -29 -1 -78 c 54 -184 227 -412 423 -555 c 104 -77 273 -163 406 -208 c 128 -43 158 -44 186 -9 c 50 63 19 101 -114 144 c -259 81 -484 235 -624 424 c -52 70 -115 187 -132 243 c -18 63 -59 91 -106 73 Z"
          />
        </g>
      </svg>
    </div>
    )
}

export default Logo

