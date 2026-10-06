<script setup lang="ts">
import { ref } from 'vue'
import { useVineAnimation } from './useVineAnimation'
import { useVineEnvironment } from './useVineEnvironment'

const host = ref<HTMLElement | null>(null)
const { ambient } = useVineAnimation(host)
useVineEnvironment(host, ambient)
</script>

<template>
  <div ref="host" class="decorative-vine right-vine" aria-hidden="true">
    <svg viewBox="0 0 1200 460" xmlns="http://www.w3.org/2000/svg" focusable="false">
      <g class="linework">
        <circle data-root cx="42" cy="272" r="2" />
        <path data-name="mainStem" d="M42 272 C115 272 144 216 226 224 C310 232 313 290 410 267 C501 245 500 182 590 202 C671 220 694 272 781 244 C874 214 909 159 986 188 C1033 206 1071 195 1138 150" />

        <path data-name="branch01" data-parent="mainStem" d="M226 224 C254 223 264 190 268 163 C272 132 298 106 332 114" />
        <path data-name="branch02" data-parent="mainStem" d="M410 267 C445 273 453 315 490 327 C522 338 544 318 558 302" />
        <path data-name="branch03" data-parent="mainStem" d="M590 202 C617 206 625 171 646 146 C667 121 697 124 714 137" />
        <path data-name="branch04" data-parent="mainStem" d="M781 244 C819 233 838 273 875 289 C906 302 934 287 944 271" />
        <path data-name="branch05" data-parent="mainStem" d="M986 188 C1012 192 1021 161 1038 142 C1056 122 1079 116 1096 120" />

        <path data-name="tendril01" data-parent="branch01" d="M332 114 C362 120 358 148 340 148 C324 148 323 129 336 130 C343 131 343 137 339 140" />
        <path data-name="tendril02" data-parent="branch02" d="M558 302 C580 278 597 299 586 313 C578 324 565 314 572 307" />
        <path data-name="tendril03" data-parent="branch03" d="M714 137 C735 153 720 173 706 164 C694 156 704 143 712 150" />
        <path data-name="tendril04" data-parent="branch04" d="M944 271 C960 251 979 268 968 281 C960 289 951 281 956 276" />
        <path data-name="tendril05" data-parent="branch05" d="M1096 120 C1119 123 1119 144 1106 146 C1094 147 1092 132 1101 134" />
        <path data-name="branch06" data-parent="branch01" d="M268 163 C258 153 249 143 245 126" />
        <path data-name="branch07" data-parent="branch04" d="M875 289 C880 307 892 321 906 326" />

        <g data-leaf data-parent="branch06" data-x="245" data-y="126"><path d="M245 126 C232 119 234 104 231 96 C246 103 250 113 245 126Z M245 126 Q238 111 231 96" /></g>
        <g data-leaf data-parent="branch01" data-x="284" data-y="125"><path d="M284 125 C279 111 285 101 298 94 C298 109 292 120 284 125Z" /></g>
        <g data-leaf data-parent="branch02" data-x="474" data-y="319"><path d="M474 319 C462 322 461 335 460 345 C473 339 480 330 474 319Z M474 319 Q469 334 460 345" /></g>
        <g data-leaf data-parent="branch02" data-x="534" data-y="323"><path d="M534 323 C537 336 549 340 559 339 C552 328 544 322 534 323Z" /></g>
        <g data-leaf data-parent="branch03" data-x="646" data-y="146"><path d="M646 146 C633 140 631 127 634 114 C647 123 651 133 646 146Z M646 146 Q639 130 634 114" /></g>
        <g data-leaf data-parent="branch03" data-x="679" data-y="128"><path d="M679 128 C677 116 685 107 693 103 C694 115 689 124 679 128Z" /></g>
        <g data-leaf data-parent="branch07" data-x="906" data-y="326"><path d="M906 326 C913 319 926 324 933 332 C921 337 911 336 906 326Z" /></g>
        <g data-leaf data-parent="branch04" data-x="914" data-y="292"><path d="M914 292 C915 305 924 311 935 314 C933 301 925 293 914 292Z" /></g>
        <g data-leaf data-parent="branch05" data-x="1038" data-y="142"><path d="M1038 142 C1030 135 1032 123 1036 115 C1044 125 1045 134 1038 142Z" /></g>
        <g data-leaf data-parent="mainStem" data-x="1138" data-y="150"><path d="M1138 150 C1140 135 1153 132 1164 132 C1159 144 1150 151 1138 150Z M1138 150 L1158 136" /></g>

        <g data-details>
          <path d="M310 94 C301 84 306 78 310 74 C314 82 316 88 310 94Z M611 122 C602 114 606 108 609 105 C614 111 616 118 611 122Z M962 310 C960 318 966 323 971 325 C972 317 968 312 962 310Z" />
          <circle cx="321" cy="84" r="1.2" /><circle cx="566" cy="337" r="1.3" /><circle cx="726" cy="119" r="1" /><circle cx="919" cy="346" r="1.2" /><circle cx="1085" cy="100" r="1" />
        </g>
      </g>
    </svg>
  </div>
</template>

<style scoped src="./vine.css"></style>
