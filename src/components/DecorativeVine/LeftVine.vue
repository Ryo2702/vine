<script setup lang="ts">
import { ref } from 'vue'
import { useVineAnimation } from './useVineAnimation'
import { useVineEnvironment } from './useVineEnvironment'

const host = ref<HTMLElement | null>(null)
const { ambient } = useVineAnimation(host)
useVineEnvironment(host, ambient)
</script>

<template>
  <div ref="host" class="decorative-vine left-vine" aria-hidden="true">
    <svg viewBox="0 0 1200 460" xmlns="http://www.w3.org/2000/svg" focusable="false">
      <g class="linework">
        <circle data-root cx="1158" cy="244" r="2" />
        <path data-name="mainStem" d="M1158 244 C1097 244 1069 279 1004 266 C939 253 913 192 824 210 C735 228 707 275 624 256 C541 237 485 186 398 214 C311 242 280 267 222 248 C164 229 120 170 52 176" />

        <path data-name="branch01" data-parent="mainStem" d="M1004 266 C980 261 966 291 954 310 C938 335 910 341 887 329" />
        <path data-name="branch02" data-parent="mainStem" d="M824 210 C791 216 785 168 761 140 C739 114 710 111 688 126" />
        <path data-name="branch03" data-parent="mainStem" d="M624 256 C590 248 575 287 548 301 C520 316 488 308 472 289" />
        <path data-name="branch04" data-parent="mainStem" d="M398 214 C366 224 360 187 345 164 C328 138 300 129 278 141" />
        <path data-name="branch05" data-parent="mainStem" d="M222 248 C197 240 183 264 166 278 C151 291 132 294 117 289" />
        <path data-name="branch06" data-parent="branch02" d="M761 140 C765 119 757 101 744 88" />
        <path data-name="branch07" data-parent="branch03" d="M548 301 C544 322 530 339 514 342" />

        <path data-name="tendril01" data-parent="branch01" d="M887 329 C859 315 868 290 886 295 C903 300 895 319 884 312 C879 309 882 304 887 305" />
        <path data-name="tendril02" data-parent="branch02" d="M688 126 C666 141 651 124 660 109 C669 95 686 107 678 117" />
        <path data-name="tendril03" data-parent="branch03" d="M472 289 C452 265 429 283 439 300 C447 312 463 302 456 293" />
        <path data-name="tendril04" data-parent="branch04" d="M278 141 C254 154 240 136 251 121 C260 109 275 120 267 129" />

        <g data-leaf="leaf01" data-parent="branch01" data-x="954" data-y="310"><path d="M954 310 C963 313 965 326 962 336 C952 329 948 319 954 310Z M954 310 Q957 325 962 336" /></g>
        <g data-leaf="leaf02" data-parent="branch01" data-x="920" data-y="335"><path d="M920 335 C916 347 905 353 896 351 C901 340 909 334 920 335Z" /></g>
        <g data-leaf="leaf03" data-parent="branch06" data-x="744" data-y="88"><path d="M744 88 C733 89 724 79 721 68 C734 69 744 76 744 88Z M744 88 L726 74" /></g>
        <g data-leaf="leaf04" data-parent="branch02" data-x="718" data-y="117"><path d="M718 117 C711 106 717 95 724 87 C728 99 727 111 718 117Z" /></g>
        <g data-leaf="leaf05" data-parent="branch07" data-x="514" data-y="342"><path d="M514 342 C505 334 494 338 486 346 C497 353 507 350 514 342Z M514 342 Q500 344 486 346" /></g>
        <g data-leaf="leaf06" data-parent="branch03" data-x="491" data-y="304"><path d="M491 304 C489 316 479 323 469 324 C472 311 481 306 491 304Z" /></g>
        <g data-leaf="leaf07" data-parent="branch04" data-x="345" data-y="164"><path d="M345 164 C355 156 353 144 347 135 C338 145 338 156 345 164Z M345 164 Q345 147 347 135" /></g>
        <g data-leaf="leaf08" data-parent="branch04" data-x="305" data-y="134"><path d="M305 134 C294 132 289 120 290 110 C301 115 307 123 305 134Z" /></g>
        <g data-leaf="leaf09" data-parent="branch05" data-x="117" data-y="289"><path d="M117 289 C109 277 97 278 88 283 C95 294 107 296 117 289Z" /></g>
        <g data-leaf="leaf10" data-parent="mainStem" data-x="52" data-y="176"><path d="M52 176 C42 182 28 178 21 170 C33 164 45 166 52 176Z M52 176 L28 171" /></g>

        <g data-details="details">
          <path d="M933 359 C939 365 937 372 933 377 C928 370 927 364 933 359Z M696 89 C690 81 692 75 697 71 C701 79 702 85 696 89Z M317 110 C310 105 310 97 313 92 C319 97 321 105 317 110Z" />
          <circle cx="948" cy="364" r="1.1" /><circle cx="680" cy="80" r="1" /><circle cx="501" cy="368" r="1.2" /><circle cx="301" cy="88" r="1" /><circle cx="136" cy="313" r="1.2" />
        </g>
      </g>
    </svg>
  </div>
</template>

<style scoped src="./vine.css"></style>
