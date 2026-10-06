<script setup lang="ts">
import { ref } from 'vue'
import { useVineAnimation } from './useVineAnimation'
import { useVineEnvironment } from './useVineEnvironment'

const host = ref<HTMLElement | null>(null)
const { ambient } = useVineAnimation(host, 2.6)
useVineEnvironment(host, ambient)
</script>

<template>
  <div ref="host" class="decorative-vine combined-vine" aria-hidden="true">
    <svg viewBox="0 0 2720 460" xmlns="http://www.w3.org/2000/svg" focusable="false">
      <g class="linework">
      <g data-side="right">
        <circle data-root cx="1520" cy="258" r="2" />
        <path data-name="rightMainStem" d="M1520 258 C1593 258 1622 202 1704 210 C1788 218 1791 276 1888 253 C1979 231 1978 168 2068 188 C2149 206 2172 258 2259 230 C2352 200 2387 145 2464 174 C2511 192 2549 181 2616 136" />

        <path data-name="rightBranch01" data-parent="rightMainStem" d="M1704 210 C1732 209 1742 176 1746 149 C1750 118 1776 92 1810 100" />
        <path data-name="rightBranch02" data-parent="rightMainStem" d="M1888 253 C1923 259 1931 301 1968 313 C2000 324 2022 304 2036 288" />
        <path data-name="rightBranch03" data-parent="rightMainStem" d="M2068 188 C2095 192 2103 157 2124 132 C2145 107 2175 110 2192 123" />
        <path data-name="rightBranch04" data-parent="rightMainStem" d="M2259 230 C2297 219 2316 259 2353 275 C2384 288 2412 273 2422 257" />
        <path data-name="rightBranch05" data-parent="rightMainStem" d="M2464 174 C2490 178 2499 147 2516 128 C2534 108 2557 102 2574 106" />

        <path data-name="rightTendril01" data-parent="rightBranch01" d="M1810 100 C1840 106 1836 134 1818 134 C1802 134 1801 115 1814 116 C1821 117 1821 123 1817 126" />
        <path data-name="rightTendril02" data-parent="rightBranch02" d="M2036 288 C2058 264 2075 285 2064 299 C2056 310 2043 300 2050 293" />
        <path data-name="rightTendril03" data-parent="rightBranch03" d="M2192 123 C2213 139 2198 159 2184 150 C2172 142 2182 129 2190 136" />
        <path data-name="rightTendril04" data-parent="rightBranch04" d="M2422 257 C2438 237 2457 254 2446 267 C2438 275 2429 267 2434 262" />
        <path data-name="rightTendril05" data-parent="rightBranch05" d="M2574 106 C2597 109 2597 130 2584 132 C2572 133 2570 118 2579 120" />
        <path data-name="rightBranch06" data-parent="rightBranch01" d="M1746 149 C1736 139 1727 129 1723 112" />
        <path data-name="rightBranch07" data-parent="rightBranch04" d="M2353 275 C2358 293 2370 307 2384 312" />

        <g data-leaf="rightLeaf01" data-parent="rightBranch06" data-x="1723" data-y="112"><path d="M1723 112 C1710 105 1712 90 1709 82 C1724 89 1728 99 1723 112Z M1723 112 Q1716 97 1709 82" /></g>
        <g data-leaf="rightLeaf02" data-parent="rightBranch01" data-x="1762" data-y="111"><path d="M1762 111 C1757 97 1763 87 1776 80 C1776 95 1770 106 1762 111Z" /></g>
        <g data-leaf="rightLeaf03" data-parent="rightBranch02" data-x="1952" data-y="305"><path d="M1952 305 C1940 308 1939 321 1938 331 C1951 325 1958 316 1952 305Z M1952 305 Q1947 320 1938 331" /></g>
        <g data-leaf="rightLeaf04" data-parent="rightBranch02" data-x="2012" data-y="309"><path d="M2012 309 C2015 322 2027 326 2037 325 C2030 314 2022 308 2012 309Z" /></g>
        <g data-leaf="rightLeaf05" data-parent="rightBranch03" data-x="2124" data-y="132"><path d="M2124 132 C2111 126 2109 113 2112 100 C2125 109 2129 119 2124 132Z M2124 132 Q2117 116 2112 100" /></g>
        <g data-leaf="rightLeaf06" data-parent="rightBranch03" data-x="2157" data-y="114"><path d="M2157 114 C2155 102 2163 93 2171 89 C2172 101 2167 110 2157 114Z" /></g>
        <g data-leaf="rightLeaf07" data-parent="rightBranch07" data-x="2384" data-y="312"><path d="M2384 312 C2391 305 2404 310 2411 318 C2399 323 2389 322 2384 312Z" /></g>
        <g data-leaf="rightLeaf08" data-parent="rightBranch04" data-x="2392" data-y="278"><path d="M2392 278 C2393 291 2402 297 2413 300 C2411 287 2403 279 2392 278Z" /></g>
        <g data-leaf="rightLeaf09" data-parent="rightBranch05" data-x="2516" data-y="128"><path d="M2516 128 C2508 121 2510 109 2514 101 C2522 111 2523 120 2516 128Z" /></g>
        <g data-leaf="rightLeaf10" data-parent="rightMainStem" data-x="2616" data-y="136"><path d="M2616 136 C2618 121 2631 118 2642 118 C2637 130 2628 137 2616 136Z M2616 136 L2636 122" /></g>

        <g data-leaf="rightLeaf11" data-parent="rightMainStem" data-x="1615" data-y="228"><path d="M1615 228 C1612 211 1627 197 1641 196 C1640 213 1630 225 1615 228Z" /></g>
        <g data-leaf="rightLeaf12" data-parent="rightMainStem" data-x="1792" data-y="246"><path d="M1792 246 C1789 263 1804 277 1818 278 C1817 261 1807 249 1792 246Z M1792 246 Q1804 263 1818 278" /></g>
        <g data-leaf="rightLeaf13" data-parent="rightMainStem" data-x="1973" data-y="208"><path d="M1973 208 C1970 225 1985 239 1999 240 C1998 223 1988 211 1973 208Z" /></g>
        <g data-leaf="rightLeaf14" data-parent="rightMainStem" data-x="2174" data-y="227"><path d="M2174 227 C2171 210 2186 196 2200 195 C2199 212 2189 224 2174 227Z" /></g>
        <g data-leaf="rightLeaf15" data-parent="rightMainStem" data-x="2331" data-y="202"><path d="M2331 202 C2328 185 2343 171 2357 170 C2356 187 2346 199 2331 202Z M2331 202 Q2343 185 2357 170" /></g>
        <g data-leaf="rightLeaf16" data-parent="rightMainStem" data-x="2540" data-y="177"><path d="M2540 177 C2537 194 2552 208 2566 209 C2565 192 2555 180 2540 177Z" /></g>
        <g data-leaf="rightLeaf17" data-parent="rightBranch01" data-x="1778" data-y="97"><path d="M1778 97 C1775 80 1790 66 1804 65 C1803 82 1793 94 1778 97Z" /></g>
        <g data-leaf="rightLeaf18" data-parent="rightBranch02" data-x="1985" data-y="316"><path d="M1985 316 C1982 333 1997 347 2011 348 C2010 331 2000 319 1985 316Z M1985 316 Q1997 333 2011 348" /></g>
        <g data-leaf="rightLeaf19" data-parent="rightBranch05" data-x="2548" data-y="109"><path d="M2548 109 C2545 92 2560 78 2574 77 C2573 94 2563 106 2548 109Z" /></g>
        <g data-leaf="rightLeaf20" data-parent="rightMainStem" data-x="1661" data-y="214"><path d="M1661 214 C1656 227 1669 239 1689 241 C1691 228 1673 216 1661 214Z M1661 214 Q1671 228 1689 241" /></g>
        <g data-leaf="rightLeaf21" data-parent="rightMainStem" data-x="1840" data-y="253"><path d="M1840 253 C1835 240 1848 223 1862 221 C1864 239 1852 251 1840 253Z" /></g>
        <g data-leaf="rightLeaf22" data-parent="rightMainStem" data-x="2028" data-y="183"><path d="M2028 183 C2023 170 2036 158 2053 156 C2055 169 2040 181 2028 183Z M2028 183 Q2038 169 2053 156" /></g>
        <g data-leaf="rightLeaf23" data-parent="rightMainStem" data-x="2222" data-y="241"><path d="M2222 241 C2217 254 2230 271 2250 273 C2252 255 2234 243 2222 241Z" /></g>
        <g data-leaf="rightLeaf24" data-parent="rightMainStem" data-x="2401" data-y="168"><path d="M2401 168 C2396 181 2409 193 2423 195 C2425 182 2413 170 2401 168Z M2401 168 Q2411 182 2423 195" /></g>
        <g data-leaf="rightLeaf25" data-parent="rightMainStem" data-x="2578" data-y="160"><path d="M2578 160 C2573 147 2586 130 2603 128 C2605 146 2590 158 2578 160Z" /></g>
        <g data-leaf="rightLeaf26" data-parent="rightBranch03" data-x="2106" data-y="157"><path d="M2106 157 C2101 170 2114 182 2134 184 C2136 171 2118 159 2106 157Z M2106 157 Q2116 171 2134 184" /></g>
        <g data-leaf="rightLeaf27" data-parent="rightBranch04" data-x="2323" data-y="257"><path d="M2323 257 C2318 244 2331 227 2345 225 C2347 243 2335 255 2323 257Z" /></g>
      </g>
      <g data-side="left">
        <circle data-root cx="1200" cy="258" r="2" />
        <path data-name="leftMainStem" d="M1200 258 C1139 258 1111 293 1046 280 C981 267 955 206 866 224 C777 242 749 289 666 270 C583 251 527 200 440 228 C353 256 322 281 264 262 C206 243 162 184 94 190" />

        <path data-name="leftBranch01" data-parent="leftMainStem" d="M1046 280 C1022 275 1008 305 996 324 C980 349 952 355 929 343" />
        <path data-name="leftBranch02" data-parent="leftMainStem" d="M866 224 C833 230 827 182 803 154 C781 128 752 125 730 140" />
        <path data-name="leftBranch03" data-parent="leftMainStem" d="M666 270 C632 262 617 301 590 315 C562 330 530 322 514 303" />
        <path data-name="leftBranch04" data-parent="leftMainStem" d="M440 228 C408 238 402 201 387 178 C370 152 342 143 320 155" />
        <path data-name="leftBranch05" data-parent="leftMainStem" d="M264 262 C239 254 225 278 208 292 C193 305 174 308 159 303" />
        <path data-name="leftBranch06" data-parent="leftBranch02" d="M803 154 C807 133 799 115 786 102" />
        <path data-name="leftBranch07" data-parent="leftBranch03" d="M590 315 C586 336 572 353 556 356" />

        <path data-name="leftTendril01" data-parent="leftBranch01" d="M929 343 C901 329 910 304 928 309 C945 314 937 333 926 326 C921 323 924 318 929 319" />
        <path data-name="leftTendril02" data-parent="leftBranch02" d="M730 140 C708 155 693 138 702 123 C711 109 728 121 720 131" />
        <path data-name="leftTendril03" data-parent="leftBranch03" d="M514 303 C494 279 471 297 481 314 C489 326 505 316 498 307" />
        <path data-name="leftTendril04" data-parent="leftBranch04" d="M320 155 C296 168 282 150 293 135 C302 123 317 134 309 143" />

        <g data-leaf="leftLeaf01" data-parent="leftBranch01" data-x="996" data-y="324"><path d="M996 324 C1005 327 1007 340 1004 350 C994 343 990 333 996 324Z M996 324 Q999 339 1004 350" /></g>
        <g data-leaf="leftLeaf02" data-parent="leftBranch01" data-x="962" data-y="349"><path d="M962 349 C958 361 947 367 938 365 C943 354 951 348 962 349Z" /></g>
        <g data-leaf="leftLeaf03" data-parent="leftBranch06" data-x="786" data-y="102"><path d="M786 102 C775 103 766 93 763 82 C776 83 786 90 786 102Z M786 102 L768 88" /></g>
        <g data-leaf="leftLeaf04" data-parent="leftBranch02" data-x="760" data-y="131"><path d="M760 131 C753 120 759 109 766 101 C770 113 769 125 760 131Z" /></g>
        <g data-leaf="leftLeaf05" data-parent="leftBranch07" data-x="556" data-y="356"><path d="M556 356 C547 348 536 352 528 360 C539 367 549 364 556 356Z M556 356 Q542 358 528 360" /></g>
        <g data-leaf="leftLeaf06" data-parent="leftBranch03" data-x="533" data-y="318"><path d="M533 318 C531 330 521 337 511 338 C514 325 523 320 533 318Z" /></g>
        <g data-leaf="leftLeaf07" data-parent="leftBranch04" data-x="387" data-y="178"><path d="M387 178 C397 170 395 158 389 149 C380 159 380 170 387 178Z M387 178 Q387 161 389 149" /></g>
        <g data-leaf="leftLeaf08" data-parent="leftBranch04" data-x="347" data-y="148"><path d="M347 148 C336 146 331 134 332 124 C343 129 349 137 347 148Z" /></g>
        <g data-leaf="leftLeaf09" data-parent="leftBranch05" data-x="159" data-y="303"><path d="M159 303 C151 291 139 292 130 297 C137 308 149 310 159 303Z" /></g>
        <g data-leaf="leftLeaf10" data-parent="leftMainStem" data-x="94" data-y="190"><path d="M94 190 C84 196 70 192 63 184 C75 178 87 180 94 190Z M94 190 L70 185" /></g>

        <g data-leaf="leftLeaf11" data-parent="leftMainStem" data-x="1122" data-y="277"><path d="M1122 277 C1125 260 1110 246 1096 245 C1097 262 1107 274 1122 277Z" /></g>
        <g data-leaf="leftLeaf12" data-parent="leftMainStem" data-x="974" data-y="245"><path d="M974 245 C977 262 962 276 948 277 C949 260 959 248 974 245Z M974 245 Q962 262 948 277" /></g>
        <g data-leaf="leftLeaf13" data-parent="leftMainStem" data-x="768" data-y="257"><path d="M768 257 C771 240 756 226 742 225 C743 242 753 254 768 257Z" /></g>
        <g data-leaf="leftLeaf14" data-parent="leftMainStem" data-x="569" data-y="232"><path d="M569 232 C572 249 557 263 543 264 C544 247 554 235 569 232Z" /></g>
        <g data-leaf="leftLeaf15" data-parent="leftMainStem" data-x="364" data-y="255"><path d="M364 255 C367 238 352 224 338 223 C339 240 349 252 364 255Z M364 255 Q352 238 338 223" /></g>
        <g data-leaf="leftLeaf16" data-parent="leftMainStem" data-x="182" data-y="210"><path d="M182 210 C185 227 170 241 156 242 C157 225 167 213 182 210Z" /></g>
        <g data-leaf="leftLeaf17" data-parent="leftBranch02" data-x="832" data-y="189"><path d="M832 189 C835 206 820 220 806 221 C807 204 817 192 832 189Z" /></g>
        <g data-leaf="leftLeaf18" data-parent="leftBranch03" data-x="619" data-y="295"><path d="M619 295 C622 278 607 264 593 263 C594 280 604 292 619 295Z M619 295 Q607 278 593 263" /></g>
        <g data-leaf="leftLeaf19" data-parent="leftBranch05" data-x="233" data-y="267"><path d="M233 267 C236 284 221 298 207 299 C208 282 218 270 233 267Z" /></g>
        <g data-leaf="leftLeaf20" data-parent="leftMainStem" data-x="1088" data-y="283"><path d="M1088 283 C1093 296 1080 308 1060 310 C1058 297 1076 285 1088 283Z M1088 283 Q1078 297 1060 310" /></g>
        <g data-leaf="leftLeaf21" data-parent="leftMainStem" data-x="918" data-y="220"><path d="M918 220 C923 207 910 190 896 188 C894 206 906 218 918 220Z" /></g>
        <g data-leaf="leftLeaf22" data-parent="leftMainStem" data-x="720" data-y="274"><path d="M720 274 C725 287 712 299 695 301 C693 288 708 276 720 274Z M720 274 Q710 288 695 301" /></g>
        <g data-leaf="leftLeaf23" data-parent="leftMainStem" data-x="502" data-y="219"><path d="M502 219 C507 206 494 189 474 187 C472 205 490 217 502 219Z" /></g>
        <g data-leaf="leftLeaf24" data-parent="leftMainStem" data-x="301" data-y="269"><path d="M301 269 C306 282 293 294 279 296 C277 283 289 271 301 269Z M301 269 Q291 283 279 296" /></g>
        <g data-leaf="leftLeaf25" data-parent="leftMainStem" data-x="139" data-y="197"><path d="M139 197 C144 184 131 167 114 165 C112 183 127 195 139 197Z" /></g>
        <g data-leaf="leftLeaf26" data-parent="leftBranch01" data-x="1015" data-y="297"><path d="M1015 297 C1020 284 1007 272 987 270 C985 283 1003 295 1015 297Z M1015 297 Q1005 283 987 270" /></g>
        <g data-leaf="leftLeaf27" data-parent="leftBranch04" data-x="414" data-y="214"><path d="M414 214 C419 201 406 184 392 182 C390 200 402 212 414 214Z" /></g>
      </g>
        <g data-details="sharedDetails"><g>
          <path d="M1788 80 C1779 70 1784 64 1788 60 C1792 68 1794 74 1788 80Z M2089 108 C2080 100 2084 94 2087 91 C2092 97 2094 104 2089 108Z M2440 296 C2438 304 2444 309 2449 311 C2450 303 2446 298 2440 296Z" />
          <circle cx="1799" cy="70" r="1.2" /><circle cx="2044" cy="323" r="1.3" /><circle cx="2204" cy="105" r="1" /><circle cx="2397" cy="332" r="1.2" /><circle cx="2563" cy="86" r="1" />
        </g><g>
          <path d="M975 373 C981 379 979 386 975 391 C970 384 969 378 975 373Z M738 103 C732 95 734 89 739 85 C743 93 744 99 738 103Z M359 124 C352 119 352 111 355 106 C361 111 363 119 359 124Z" />
          <circle cx="990" cy="378" r="1.1" /><circle cx="722" cy="94" r="1" /><circle cx="543" cy="382" r="1.2" /><circle cx="343" cy="102" r="1" /><circle cx="178" cy="327" r="1.2" />
        </g></g>
      </g>
    </svg>
  </div>
</template>

<style scoped src="./vine.css"></style>
<style scoped>
.combined-vine { aspect-ratio: 2720 / 460; }
.linework { stroke-width: 1.3; }
[data-name*="Tendril"], [data-details] { stroke-width: 1.05; }
</style>
