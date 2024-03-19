<script lang="ts">
  export let size = '680px';
  let [width, height] = [size, size];
</script>

<svg {width} {height} viewBox="206.717 143.188 268.27 288.461">
  <defs>
    <linearGradient id="linear-gradient" x1="339.67" y1="300.77" x2="339.67" y2="421.21" gradientUnits="userSpaceOnUse">
      <stop offset="0.0" stop-color="#6d2875" />
      <stop offset="1" stop-color="#3d085a" />
    </linearGradient>
    <style>
      .outline {
        fill: #ffffff;
      }
      .sun {
        fill: #ffae33;
      }
      .inner-circle {
        fill: #f38e58;
      }
      .middle-circle {
        fill: #d46e6e;
      }
      .outer-circle {
        fill: #7d3883;
      }
      .mountains {
        fill: url(#linear-gradient);
      }
      .mountain-outline {
        fill: rgba(30, 4, 58, 0.1);
      }
      .ground {
        fill: #6a277f;
      }
    </style>
  </defs>
  <circle class="outline" cx="340" cy="290.9" r="135.96" />
  <circle class="outline" cx="414.17" cy="210.65" r="63.79" />
  <circle class="outer-circle" cx="414.17" cy="210.65" r="48.79" />
  <g>
    <circle class="outer-circle" cx="340" cy="290.9" r="122.96" />
    <circle class="middle-circle" cx="340" cy="290.9" r="93.84" />
    <circle class="inner-circle" cx="340" cy="290.9" r="64.72" />
    <circle class="sun" cx="340" cy="290.9" r="35.6" />
    <path
      class="mountains"
      d="M 445.558 314.465 L 435.05 327.51 L 418.57 336.41 L 412.64 345.42 L 391.98 349.82 L 371.98 342.57 L 353.52 331.327 L 340 329.312 L 322.493 334.654 L 307.81 330.91 L 301.66 335.52 L 286.5 338.82 L 275.29 334.21 L 263.2 327.51 L 254.85 317.29 L 242.32 313.33 L 231.864 308.089 L 217.832 304.442 C 222.633 362.132 270.92 413.186 340.203 414.315 C 405.55 415.38 456.93 360.683 461.298 310.095 L 445.558 314.465 Z"
    ></path>
  </g>
  <circle class="middle-circle" cx="414.17" cy="210.65" r="37.23" />
  <circle class="inner-circle" cx="414.17" cy="210.65" r="25.68" />
  <circle class="sun" cx="414.17" cy="210.65" r="14.13" />
</svg>
