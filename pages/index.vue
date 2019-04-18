<template>
  <div id="home">
    <div class="background-icons">
      <div v-for="triangleEl in 16" :key="triangleEl.id" :class="['triangle triangle-' + triangleEl, timeLeft > 0 ? 'triangleEnd' : '']"></div>
      <div v-for="circleEl in 18" :key="circleEl.id" :class="['circle circle-' + circleEl, timeLeft > 0 ? 'circleEnd' : '']"></div>
    </div>
    <section class="banner">
      <div class="banner__title">
        <svg version="1.0" class="banner__title--logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
   width="648px" height="180px" viewBox="0 0 700 250" enable-background="new 0 0 648 263" xml:space="preserve">
        <g>
          <defs>
            <rect id="SVGID_1_" x="-365" y="-255" width="1366" height="768"/>
          </defs>
          <clipPath id="SVGID_2_">
            <use xlink:href="#SVGID_1_"  overflow="visible"/>
          </clipPath>
          <path clip-path="url(#SVGID_2_)" fill="#1A1A1A" d="M17.507,117.81l1.299,2.08c0.391,0.651,1.04,1.301,1.691,1.95
            c0.65,0.651,1.3,1.171,2.08,1.561c1.821,1.43,4.031,2.34,6.111,2.991c2.081,0.65,4.161,0.91,6.371,0.91h0.78
            c2.211,0,4.421-0.131,6.371-0.521c1.95-0.389,3.901-0.78,5.59-1.429c-0.129-2.471-0.52-6.241-0.909-11.052
            c-2.34,0.39-4.42,0.52-6.241,0.649c-1.82,0.131-3.381,0.261-4.681,0.131c-1.3-0.131-2.47-0.39-3.381-0.78
            c-1.04-0.391-1.819-1.04-2.47-1.69c-0.65-0.651-1.04-1.43-1.43-2.341c-0.389-0.91-0.78-1.82-0.909-2.731
            c-0.131-0.91-0.391-2.08-0.522-3.51c-0.129-1.3-0.129-2.731-0.129-4.42V66.972H45.72V55.401H27.128V26.406H14.516v28.995v11.571
            v31.205v3.771c0,1.43,0,2.861,0.13,4.421c0.13,1.69,0.26,3.25,0.52,4.68c0.391,1.43,0.78,2.99,1.3,4.42
            C16.856,116.38,17.117,117.16,17.507,117.81"/>
          <path clip-path="url(#SVGID_2_)" fill="#1A1A1A" d="M103.542,68.403c1.821,0.651,3.511,1.691,4.942,2.861
            c1.429,1.169,2.6,2.99,3.379,5.201c0.651,2.21,1.041,4.81,1.041,8.06v42.517h13.002V84.525c0-0.129,0-0.129-0.13-0.259
            c0-5.331-0.65-9.882-2.08-13.652c-1.43-3.771-3.512-6.891-6.371-9.361c-2.99-2.471-6.241-4.162-9.752-5.202
            c-3.51-1.04-7.541-1.43-11.831-1.04c-2.211,0.13-4.291,0.65-6.241,1.301c-1.951,0.65-3.771,1.429-5.461,2.339
            c-1.691,1.04-3.381,2.211-4.811,3.642c-1.43,1.43-2.601,2.86-3.771,4.55V27.577H62.326c0.131,22.104,0.131,41.477,0.131,57.988
            v41.477h13.001V89.207c0-2.991,0.391-5.722,1.431-8.322c0.91-2.47,2.6-4.811,4.55-7.021c1.95-2.21,4.291-3.77,7.022-4.81
            c2.729-1.041,5.72-1.561,8.971-1.561C99.642,67.493,101.723,67.753,103.542,68.403"/>
          <path clip-path="url(#SVGID_2_)" fill="#1A1A1A" d="M185.558,126.522c2.471-0.65,4.811-1.431,7.281-2.6
            c2.47-1.171,4.551-2.601,6.502-4.032c1.95-1.43,3.64-2.859,5.07-4.55l-8.192-8.451c-1.039,1.04-2.209,2.08-3.64,2.99
            c-1.3,0.911-2.73,1.69-4.42,2.6c-1.691,0.911-3.251,1.431-4.941,1.821c-1.691,0.39-3.38,0.65-5.071,0.65
            c-2.991,0-5.591-0.391-8.061-1.17c-2.47-0.781-4.681-1.95-6.631-3.51c-1.951-1.691-3.64-3.511-4.941-5.592
            c-1.43-2.08-2.341-4.42-2.99-6.891h51.748c0.129-0.91,0.259-1.69,0.259-2.6c0.131-0.78,0.131-1.56,0.131-2.47
            c0.13-0.91,0.13-1.56,0.13-1.95v-0.65v-2.211c0-4.16-0.52-8.061-1.821-11.572c-1.43-4.16-3.64-7.931-6.371-11.312
            c-2.73-3.51-6.11-6.11-10.142-7.801c-4.03-1.819-8.58-2.73-13.911-2.73h-0.52c-2.991,0-5.851,0.391-8.582,1.17
            c-2.73,0.781-5.2,1.821-7.67,3.381c-2.471,1.56-4.811,3.51-6.762,5.59c-1.95,2.081-3.64,4.422-5.07,7.022
            c-0.781,1.43-1.43,2.99-2.081,4.42c-0.65,1.56-1.17,3.12-1.56,4.811c-0.39,1.69-0.78,3.381-0.91,5.071
            c-0.13,1.691-0.26,3.51-0.26,5.331c0,5.33,0.78,10.011,2.47,14.301c1.69,4.291,4.291,8.192,7.671,11.573
            c3.511,3.51,7.281,5.98,11.572,7.67c4.291,1.691,9.102,2.601,14.302,2.601C180.617,127.432,183.087,127.171,185.558,126.522
             M157.474,78.415c1.171-2.341,2.6-4.421,4.291-6.371c1.69-1.95,3.771-3.251,6.11-4.161c2.341-0.91,4.941-1.43,7.801-1.43
            c3.251,0,5.982,0.52,8.322,1.43c2.47,0.91,4.42,2.341,6.111,4.291c1.69,1.95,2.99,4.03,4.03,6.5c1.041,2.341,1.69,4.811,2.08,7.542
            h-41.086C155.524,83.356,156.304,80.754,157.474,78.415"/>
          <polygon clip-path="url(#SVGID_2_)" fill="#1A1A1A" points="343.644,90.896 343.644,127.041 356.386,127.041 356.386,54.881
            343.644,54.881  "/>
          <path clip-path="url(#SVGID_2_)" fill="#1A1A1A" d="M433.19,146.155c2.729-2.991,4.681-6.763,5.979-11.312
            c1.432-4.55,2.08-9.751,2.08-15.732v-63.84c-1.56,0-4.68,0-9.361-0.13l-3.119,9.622c-1.171-1.43-2.471-2.601-3.901-3.771
            c-1.43-1.17-2.99-2.341-4.681-3.251c-1.69-0.909-3.511-1.69-5.461-2.08c-1.95-0.52-3.9-0.91-5.851-1.04
            c-0.13-0.13-0.39-0.13-0.649-0.13h-0.521c-1.04,0-2.08,0-3.251,0.13c-1.04,0.13-2.21,0.39-3.381,0.65
            c-1.43,0.26-2.729,0.651-4.03,1.171c-1.299,0.52-2.6,1.04-3.899,1.69c-2.472,1.3-4.682,2.86-6.892,4.81
            c-2.21,1.821-4.16,4.031-6.11,6.632c-1.95,2.6-3.252,5.59-4.161,9.101c-0.91,3.38-1.431,7.151-1.431,11.442
            c0,1.95,0.129,3.9,0.391,5.72c0.261,1.95,0.649,3.641,1.301,5.331c0.648,1.691,1.299,3.38,2.08,4.811
            c0.779,1.43,1.688,2.86,2.6,4.16c1.82,2.471,3.9,4.681,6.111,6.371c2.21,1.82,4.68,3.38,7.411,4.551
            c2.729,1.17,5.331,1.95,7.931,2.471c2.6,0.39,5.07,0.519,7.541,0.39c2.211-0.131,4.42-0.651,6.371-1.301
            c1.95-0.65,3.771-1.43,5.461-2.6c1.69-1.04,3.12-2.211,4.421-3.38c1.299-1.301,2.47-2.731,3.381-4.162v6.502
            c0,4.551-0.391,8.321-1.301,11.441s-2.341,5.591-4.03,7.282c-1.69,1.688-3.9,2.859-6.502,3.769c-2.6,0.911-5.59,1.301-8.971,1.301
            c-2.21,0-4.16-0.259-5.981-0.649c-1.819-0.391-3.51-1.04-5.2-1.95s-3.12-1.821-4.551-2.861c-1.43-1.04-2.86-2.211-4.03-3.64
            l-4.811,4.941l-3.511,3.381c1.689,1.95,3.511,3.64,5.591,5.069c2.08,1.561,4.42,2.99,6.892,4.291
            c2.47,1.169,4.939,2.209,7.541,2.86c2.6,0.65,5.329,1.04,8.061,1.04c5.331,0,10.142-0.78,14.172-2.211
            C427.079,151.484,430.459,149.145,433.19,146.155 M428.77,97.917c-1.04,2.731-2.601,5.071-4.812,7.281
            c-2.21,2.211-4.55,3.771-7.15,4.941c-2.601,1.171-5.462,1.691-8.451,1.691c-2.991,0-5.852-0.521-8.451-1.691
            c-2.472-1.17-4.812-2.73-7.021-4.941c-2.211-2.21-3.771-4.68-4.811-7.411c-1.171-2.729-1.691-5.59-1.691-8.711
            c0-3.25,0.521-6.111,1.562-8.841c1.04-2.73,2.6-5.071,4.81-7.281c2.211-2.21,4.552-3.77,7.152-4.941c2.6-1.17,5.46-1.69,8.451-1.69
            c2.989,0,5.851,0.52,8.451,1.69c2.601,1.171,4.94,2.86,7.15,5.071c2.211,2.21,3.771,4.68,4.812,7.281
            c1.039,2.73,1.56,5.591,1.56,8.842C430.329,92.327,429.809,95.187,428.77,97.917"/>
          <polygon clip-path="url(#SVGID_2_)" fill="#1A1A1A" points="462.018,90.896 462.018,127.041 474.759,127.041 474.759,54.881
            462.018,54.881  "/>
          <path clip-path="url(#SVGID_2_)" fill="#1A1A1A" d="M495.832,111.049c0.391,1.43,0.781,2.99,1.301,4.421
            c0.39,0.91,0.649,1.69,1.04,2.34l1.3,2.08c0.39,0.651,1.041,1.301,1.69,1.951c0.65,0.65,1.3,1.17,2.08,1.561
            c1.821,1.429,4.03,2.339,6.111,2.99c2.08,0.65,4.16,0.91,6.371,0.91h0.779c2.211,0,4.42-0.131,6.371-0.521
            c1.95-0.389,3.9-0.779,5.591-1.429c-0.131-2.47-0.52-6.241-0.909-11.052c-2.342,0.39-4.421,0.52-6.241,0.65
            c-1.821,0.13-3.381,0.26-4.68,0.13c-1.302-0.13-2.473-0.39-3.382-0.78c-1.041-0.39-1.82-1.04-2.47-1.69
            c-0.651-0.651-1.041-1.43-1.431-2.34c-0.391-0.911-0.78-1.821-0.91-2.731c-0.131-0.911-0.39-2.08-0.521-3.511
            c-0.131-1.3-0.131-2.73-0.131-4.42V66.973h18.594V55.402h-18.594V26.407h-12.61v28.995v11.571v31.204v3.771
            c0,1.431,0,2.861,0.13,4.421C495.442,108.059,495.571,109.619,495.832,111.049"/>
          <polygon clip-path="url(#SVGID_2_)" fill="#1A1A1A" points="634.153,26.927 621.281,26.927 621.281,76.984 621.281,83.225
            621.281,127.042 634.153,127.042   "/>
          <path clip-path="url(#SVGID_2_)" fill="#1A1A1A" d="M148.645,208.975c-1.43,1.04-2.86,1.95-4.421,2.6
            c-1.56,0.65-3.249,1.302-4.94,1.69c-1.69,0.39-3.511,0.521-5.331,0.521c-3.25,0-6.371-0.65-9.232-1.82
            c-2.859-1.171-5.46-2.86-7.67-5.331c-2.211-2.34-3.901-4.94-5.071-7.801s-1.69-5.98-1.69-9.231c0-3.25,0.52-6.371,1.69-9.232
            c1.17-2.729,2.86-5.33,5.071-7.801c2.21-2.34,4.811-4.16,7.67-5.331c2.861-1.17,5.982-1.689,9.232-1.689
            c1.691,0,3.251,0.13,4.94,0.52c1.562,0.261,3.122,0.65,4.552,1.301c1.43,0.65,2.86,1.3,4.291,2.21c1.299,0.78,2.6,1.69,3.77,2.86
            c1.69-2.08,4.161-5.201,7.541-9.23c-1.691-1.561-3.38-2.991-5.331-4.16c-1.82-1.171-3.77-2.341-5.98-3.251
            c-2.211-0.91-4.422-1.561-6.632-1.95c-2.34-0.391-4.681-0.65-7.151-0.65c-1.69,0-3.51,0.13-5.2,0.391
            c-1.691,0.26-3.251,0.649-4.941,1.04c-1.691,0.39-3.251,1.04-4.681,1.689c-1.56,0.65-2.99,1.431-4.421,2.34
            c-2.6,1.69-4.94,3.512-7.02,5.723c-2.081,2.209-3.901,4.55-5.461,7.28c-1.691,2.73-2.86,5.591-3.641,8.58
            c-0.78,2.991-1.17,6.112-1.17,9.362c0,3.251,0.39,6.5,1.17,9.492c0.781,2.99,1.95,5.851,3.641,8.58
            c1.56,2.73,3.38,5.202,5.461,7.282c2.08,2.209,4.42,4.029,7.02,5.721c1.431,0.91,2.861,1.689,4.421,2.339
            c1.43,0.651,2.99,1.301,4.681,1.691c1.69,0.39,3.25,0.779,4.941,1.04c1.69,0.261,3.51,0.39,5.2,0.39c2.731,0,5.331-0.26,7.801-0.78
            c2.47-0.52,4.941-1.3,7.281-2.47c2.211-1.17,4.421-2.471,6.371-3.901c1.95-1.43,3.901-3.12,5.592-5.069l-8.322-8.451
            C151.505,206.894,150.074,208.064,148.645,208.975"/>
          <path clip-path="url(#SVGID_2_)" fill="#1A1A1A" d="M396.566,163.728c-2.729-3.511-6.11-6.11-10.141-7.802
            c-4.031-1.819-8.582-2.729-13.913-2.729h-0.52c-2.99,0-5.852,0.39-8.58,1.17c-2.731,0.78-5.202,1.82-7.672,3.381
            c-2.471,1.561-4.812,3.51-6.762,5.59c-1.95,2.081-3.64,4.422-5.069,7.022c-0.781,1.43-1.432,2.99-2.08,4.42
            c-0.651,1.56-1.171,3.12-1.562,4.811c-0.389,1.69-0.779,3.382-0.909,5.07c-0.131,1.691-0.26,3.511-0.26,5.331
            c0,5.331,0.78,10.011,2.47,14.302c1.691,4.291,4.291,8.192,7.672,11.572c3.511,3.511,7.281,5.981,11.57,7.671
            c4.291,1.691,9.103,2.601,14.304,2.601c2.471,0,4.94-0.261,7.41-0.909c2.472-0.65,4.812-1.432,7.282-2.602
            c2.47-1.17,4.55-2.601,6.5-4.03c1.95-1.431,3.641-2.859,5.07-4.551l-8.19-8.451c-1.041,1.04-2.211,2.08-3.641,2.99
            c-1.301,0.91-2.73,1.69-4.421,2.601c-1.689,0.909-3.251,1.43-4.94,1.82c-1.69,0.391-3.381,0.649-5.07,0.649
            c-2.991,0-5.592-0.39-8.062-1.169c-2.471-0.781-4.68-1.951-6.631-3.511c-1.95-1.69-3.641-3.511-4.941-5.592
            c-1.43-2.08-2.34-4.421-2.99-6.891h51.748c0.13-0.91,0.261-1.69,0.261-2.6c0.129-0.781,0.129-1.561,0.129-2.471
            c0.13-0.91,0.13-1.56,0.13-1.95v-0.649v-2.211c0-4.16-0.52-8.062-1.82-11.572C401.508,170.879,399.297,167.108,396.566,163.728
             M352.101,184.921c0.39-2.86,1.17-5.462,2.34-7.801c1.17-2.341,2.602-4.421,4.29-6.371c1.691-1.95,3.771-3.251,6.112-4.161
            c2.339-0.911,4.94-1.431,7.801-1.431c3.25,0,5.981,0.52,8.321,1.431c2.471,0.91,4.421,2.34,6.111,4.291
            c1.688,1.95,2.989,4.03,4.029,6.5c1.04,2.342,1.691,4.812,2.081,7.542H352.101z"/>
          <path clip-path="url(#SVGID_2_)" fill="#1A1A1A" d="M526.634,159.567c-2.989-2.47-6.24-4.291-9.752-5.331
            c-2.729-0.78-5.59-1.17-8.58-1.17c-1.171,0-2.211,0-3.381,0.13c-2.47,0.13-4.811,0.521-7.021,1.17
            c-2.209,0.651-4.289,1.43-6.5,2.34c-2.21,0.911-4.16,2.21-5.981,3.641c-1.819,1.431-3.51,3.122-4.939,5.071
            c-1.302-2.211-2.861-4.161-4.553-5.851c-1.818-1.691-3.899-2.99-6.109-4.03c-1.821-0.911-3.771-1.431-5.721-1.82
            c-1.951-0.391-4.16-0.65-6.371-0.65h-1.69c-0.521,0-1.04,0-1.691,0.13c-2.21,0.13-4.421,0.65-6.37,1.3
            c-1.95,0.65-3.901,1.431-5.591,2.471c-1.69,0.909-3.251,2.08-4.681,3.511c-1.431,1.431-2.6,2.859-3.77,4.551v-0.261l-2.393-9.21
            l-10.74,4.428v11.804v53.957H433.8v-38.095c0-2.991,0.391-5.851,1.431-8.451c0.911-2.471,2.601-4.811,4.552-7.021
            c1.95-2.211,4.289-3.771,7.02-4.812s5.723-1.56,9.103-1.56c2.21,0,4.16,0.26,6.111,0.909c1.819,0.65,3.51,1.562,4.939,2.73
            c1.43,1.17,2.6,2.991,3.381,5.201c0.65,2.21,1.04,4.94,1.04,8.19v42.906h13.132v-38.225c0-2.99,0.521-5.852,1.561-8.321
            c1.04-2.471,2.6-4.811,4.55-7.021c1.951-2.081,4.291-3.642,7.022-4.682c2.729-1.04,5.72-1.56,8.971-1.56
            c2.211,0,4.291,0.259,6.111,0.91c1.819,0.649,3.511,1.56,4.94,2.729c1.43,1.171,2.601,2.99,3.381,5.201
            c0.649,2.21,1.04,4.941,1.04,8.192v42.646h13.132v-42.646v-0.262c0-5.331-0.78-9.881-2.211-13.651
            C531.575,165.157,529.495,162.037,526.634,159.567"/>
          <path clip-path="url(#SVGID_2_)" fill="#1A1A1A" d="M601.601,151.506c-5.071,11.962-12.482,29.903-22.493,53.828
            c-2.471-5.981-5.461-13.521-9.232-22.493l-13.132-31.335c-1.299,0.39-2.86,1.04-4.811,1.82l-6.892,2.73
            c6.112,14.432,15.083,36.276,27.176,65.27l-12.093,28.864c1.95,0.78,5.98,2.34,12.093,4.55c2.47-5.851,5.59-13.262,9.23-22.103
            l12.872-31.074l18.983-45.507l-4.812-1.95C606.541,153.326,604.2,152.416,601.601,151.506"/>
          <path clip-path="url(#SVGID_2_)" fill="#1A1A1A" d="M86.833,180.122c-0.39-1.69-1.04-3.251-1.69-4.811
            c-0.65-1.431-1.43-2.861-2.34-4.291c-1.691-2.601-3.511-4.941-5.721-7.021c-2.21-2.079-4.552-3.9-7.281-5.461
            c-2.73-1.689-5.591-2.859-8.581-3.641c-2.99-0.779-6.242-1.169-9.492-1.169s-6.371,0.39-9.361,1.169
            c-2.991,0.781-5.851,1.951-8.581,3.641c-2.731,1.561-5.201,3.382-7.282,5.461c-2.21,2.08-4.031,4.421-5.72,7.021
            c-0.911,1.43-1.69,2.86-2.341,4.42c-0.651,1.56-1.299,3.122-1.691,4.811c-0.389,1.69-0.779,3.251-1.04,4.941
            c-0.259,1.691-0.389,3.38-0.389,5.07s0.13,3.512,0.389,5.201c0.261,1.689,0.651,3.251,1.04,4.94
            c0.392,1.691,1.04,3.251,1.691,4.681c0.651,1.561,1.43,2.99,2.341,4.422c1.689,2.6,3.51,4.939,5.72,7.02
            c2.081,2.08,4.551,3.901,7.282,5.461c2.73,1.691,5.59,2.861,8.581,3.642c2.99,0.779,6.111,1.17,9.361,1.17s6.502-0.391,9.492-1.17
            c2.99-0.78,5.851-1.95,8.581-3.642c2.185-1.249,4.116-2.672,5.935-4.255v9.065h12.493v-35.725c0.008-0.314,0.034-0.625,0.034-0.94
            c0-1.689-0.13-3.381-0.39-5.07C87.615,183.371,87.224,181.812,86.833,180.122 M73.832,199.364c-1.17,2.731-2.99,5.331-5.331,7.671
            c-2.21,2.34-4.811,4.031-7.671,5.201c-2.73,1.17-5.851,1.82-9.101,1.82s-6.371-0.65-9.101-1.82
            c-2.731-1.17-5.332-2.861-7.671-5.201c-2.21-2.34-4.031-4.939-5.201-7.671c-1.17-2.86-1.69-5.851-1.69-9.102
            c0-3.25,0.521-6.371,1.69-9.101c1.17-2.73,2.991-5.331,5.201-7.672c2.339-2.341,4.94-4.03,7.671-5.2
            c2.729-1.171,5.851-1.82,9.101-1.82s6.371,0.649,9.101,1.82c2.86,1.17,5.461,2.859,7.671,5.2c2.341,2.341,4.161,4.941,5.331,7.672
            c1.171,2.729,1.69,5.851,1.821,9.101C75.653,193.514,75.003,196.504,73.832,199.364"/>
          <path clip-path="url(#SVGID_2_)" fill="#1A1A1A" d="M238.572,180.122c-0.39-1.69-1.04-3.251-1.69-4.811
            c-0.65-1.431-1.43-2.861-2.34-4.291c-1.691-2.601-3.511-4.941-5.721-7.021c-2.21-2.079-4.552-3.9-7.281-5.461
            c-2.729-1.689-5.591-2.859-8.581-3.641c-2.99-0.779-6.242-1.169-9.492-1.169s-6.371,0.39-9.361,1.169
            c-2.991,0.781-5.851,1.951-8.581,3.641c-2.731,1.561-5.201,3.382-7.282,5.461c-2.21,2.08-4.031,4.421-5.72,7.021
            c-0.911,1.43-1.69,2.86-2.341,4.42c-0.651,1.56-1.299,3.122-1.691,4.811c-0.389,1.69-0.779,3.251-1.04,4.941
            c-0.259,1.691-0.389,3.38-0.389,5.07s0.13,3.512,0.389,5.201c0.261,1.689,0.651,3.251,1.04,4.94
            c0.392,1.691,1.04,3.251,1.691,4.681c0.651,1.561,1.43,2.99,2.341,4.422c1.689,2.6,3.51,4.939,5.72,7.02
            c2.081,2.08,4.551,3.901,7.282,5.461c2.73,1.691,5.59,2.861,8.581,3.642c2.99,0.779,6.111,1.17,9.361,1.17s6.502-0.391,9.492-1.17
            c2.99-0.78,5.851-1.95,8.581-3.642c2.185-1.249,4.116-2.672,5.935-4.255v9.065h12.493v-35.725c0.008-0.314,0.034-0.625,0.034-0.94
            c0-1.689-0.13-3.381-0.39-5.07C239.354,183.371,238.962,181.812,238.572,180.122 M225.57,199.364
            c-1.17,2.731-2.99,5.331-5.331,7.671c-2.21,2.34-4.811,4.031-7.671,5.201c-2.73,1.17-5.851,1.82-9.101,1.82s-6.371-0.65-9.101-1.82
            c-2.731-1.17-5.332-2.861-7.671-5.201c-2.21-2.34-4.031-4.939-5.201-7.671c-1.17-2.86-1.69-5.851-1.69-9.102
            c0-3.25,0.52-6.371,1.69-9.101c1.17-2.73,2.991-5.331,5.201-7.672c2.339-2.341,4.94-4.03,7.671-5.2
            c2.73-1.171,5.851-1.82,9.101-1.82s6.371,0.649,9.101,1.82c2.86,1.17,5.461,2.859,7.671,5.2c2.341,2.341,4.161,4.941,5.331,7.672
            c1.171,2.729,1.69,5.851,1.821,9.101C227.391,193.514,226.741,196.504,225.57,199.364"/>
          <path clip-path="url(#SVGID_2_)" fill="#1A1A1A" d="M552.755,122.715c2.729,1.69,5.591,2.86,8.581,3.641
            c2.99,0.779,6.112,1.169,9.361,1.169c3.25,0,6.502-0.39,9.491-1.169c2.991-0.781,5.852-1.951,8.581-3.641
            c2.186-1.249,4.117-2.673,5.937-4.255v9.065h12.492V91.802c0.008-0.315,0.033-0.626,0.033-0.941c0-1.69-0.13-3.381-0.389-5.07
            c-0.26-1.691-0.651-3.251-1.04-4.941c-0.39-1.691-1.04-3.251-1.691-4.811c-0.649-1.43-1.429-2.86-2.34-4.291
            c-1.689-2.6-3.511-4.94-5.721-7.02c-2.209-2.08-4.551-3.901-7.281-5.461c-2.729-1.691-5.59-2.861-8.581-3.641
            c-2.989-0.78-6.241-1.17-9.491-1.17c-3.249,0-6.371,0.39-9.361,1.17s-5.852,1.95-8.581,3.641c-2.73,1.56-5.201,3.381-7.282,5.461
            c-2.21,2.08-4.03,4.42-5.72,7.02c-0.91,1.431-1.69,2.861-2.341,4.421s-1.299,3.121-1.69,4.811c-0.39,1.689-0.78,3.251-1.04,4.94
            c-0.26,1.691-0.39,3.381-0.39,5.071c0,1.691,0.13,3.511,0.39,5.201s0.65,3.251,1.04,4.94c0.392,1.691,1.04,3.251,1.69,4.682
            c0.65,1.56,1.431,2.99,2.341,4.42c1.689,2.6,3.51,4.941,5.72,7.021C547.554,119.334,550.024,121.155,552.755,122.715
             M548.724,81.89c1.171-2.731,2.991-5.331,5.201-7.671c2.34-2.341,4.941-4.031,7.672-5.201c2.729-1.17,5.852-1.82,9.101-1.82
            c3.25,0,6.37,0.65,9.101,1.82c2.861,1.17,5.462,2.86,7.672,5.201c2.34,2.34,4.161,4.94,5.33,7.671
            c1.171,2.73,1.69,5.851,1.821,9.101c0,3.251-0.65,6.241-1.821,9.101c-1.169,2.731-2.99,5.331-5.33,7.672
            c-2.21,2.339-4.811,4.03-7.672,5.2c-2.73,1.171-5.851,1.821-9.101,1.821c-3.249,0-6.371-0.65-9.101-1.821
            c-2.73-1.17-5.332-2.861-7.672-5.2c-2.21-2.341-4.03-4.941-5.201-7.672c-1.17-2.86-1.689-5.85-1.689-9.101
            C547.034,87.741,547.554,84.62,548.724,81.89"/>
          <path clip-path="url(#SVGID_2_)" fill="#FC7417" d="M323.56,32.329h-12.492v31.337c-1.82-1.582-3.751-3.005-5.936-4.254
            c-2.73-1.691-5.591-2.861-8.581-3.641c-2.99-0.78-6.242-1.17-9.492-1.17s-6.371,0.39-9.361,1.17c-2.99,0.78-5.851,1.95-8.581,3.641
            c-2.731,1.56-5.201,3.38-7.282,5.46c-2.21,2.08-4.03,4.421-5.72,7.021c-0.911,1.43-1.69,2.861-2.341,4.421
            c-0.651,1.43-1.299,2.99-1.691,4.681c-0.389,1.69-0.779,3.251-1.04,4.94c-0.259,1.69-0.389,3.511-0.389,5.202
            c0,1.689,0.13,3.379,0.389,5.07c0.261,1.69,0.651,3.251,1.04,4.941c0.392,1.689,1.04,3.25,1.691,4.811
            c0.651,1.56,1.43,2.99,2.341,4.42c1.69,2.6,3.51,4.941,5.72,7.021c2.081,2.08,4.551,3.9,7.282,5.46
            c2.73,1.691,5.591,2.861,8.581,3.642c2.99,0.779,6.111,1.169,9.361,1.169s6.502-0.39,9.492-1.169
            c2.99-0.781,5.851-1.951,8.581-3.642c2.152-1.229,4.058-2.627,5.853-4.18v9.333h-0.043v33.862c-1.819-1.582-3.75-3.007-5.935-4.256
            c-2.73-1.689-5.591-2.859-8.581-3.641c-2.99-0.779-6.242-1.169-9.492-1.169s-6.371,0.39-9.361,1.169
            c-2.991,0.781-5.851,1.951-8.581,3.641c-2.731,1.561-5.201,3.382-7.282,5.461c-2.21,2.08-4.031,4.422-5.72,7.021
            c-0.911,1.43-1.69,2.86-2.341,4.42c-0.651,1.431-1.299,2.991-1.691,4.682c-0.389,1.689-0.779,3.25-1.04,4.94
            c-0.259,1.69-0.389,3.51-0.389,5.201c0,1.689,0.13,3.38,0.389,5.07c0.261,1.689,0.651,3.251,1.04,4.94
            c0.392,1.69,1.04,3.251,1.691,4.811c0.651,1.561,1.43,2.99,2.341,4.422c1.689,2.6,3.51,4.939,5.72,7.02
            c2.081,2.08,4.551,3.901,7.282,5.461c2.73,1.691,5.59,2.861,8.581,3.642c2.99,0.779,6.111,1.17,9.361,1.17s6.502-0.391,9.492-1.17
            c2.99-0.78,5.851-1.95,8.581-3.642c2.152-1.229,4.058-2.628,5.853-4.181v9.889h12.568v-36.232c0.011-0.357,0.041-0.714,0.041-1.069
            c0-0.315-0.026-0.626-0.034-0.941v-59.966h0.118V92.336c0.011-0.357,0.041-0.714,0.041-1.071c0-0.315-0.026-0.626-0.034-0.94
            V32.329z M309.162,100.236c-1.17,2.731-2.99,5.331-5.331,7.672c-2.21,2.34-4.811,4.03-7.671,5.2c-2.73,1.171-5.851,1.82-9.101,1.82
            s-6.371-0.649-9.101-1.82c-2.73-1.17-5.332-2.86-7.671-5.2c-2.21-2.341-4.03-4.941-5.201-7.672c-1.17-2.729-1.69-5.851-1.69-9.1
            c0-3.251,0.52-6.242,1.69-9.102c1.171-2.731,2.991-5.331,5.201-7.672c2.339-2.339,4.941-4.03,7.671-5.2
            c2.73-1.171,5.851-1.82,9.101-1.82s6.371,0.649,9.101,1.82c2.86,1.17,5.461,2.861,7.671,5.2c2.341,2.341,4.161,4.941,5.331,7.672
            c1.171,2.86,1.821,5.851,1.821,9.102C310.852,94.386,310.333,97.507,309.162,100.236 M309.037,198.445
            c-1.17,2.731-2.99,5.331-5.331,7.671c-2.21,2.341-4.811,4.031-7.671,5.201c-2.73,1.17-5.851,1.82-9.101,1.82
            s-6.371-0.65-9.101-1.82c-2.731-1.17-5.332-2.86-7.671-5.201c-2.21-2.34-4.031-4.939-5.201-7.671
            c-1.17-2.729-1.69-5.851-1.69-9.101c0-3.251,0.52-6.241,1.69-9.102c1.17-2.73,2.991-5.331,5.201-7.672
            c2.339-2.339,4.94-4.03,7.671-5.2c2.73-1.171,5.851-1.82,9.101-1.82s6.371,0.649,9.101,1.82c2.86,1.17,5.461,2.861,7.671,5.2
            c2.341,2.341,4.161,4.941,5.331,7.672c1.171,2.86,1.821,5.851,1.821,9.102C310.727,192.595,310.208,195.716,309.037,198.445"/>
          <path clip-path="url(#SVGID_2_)" fill="#1A1A1A" d="M349.66,48.117c4.28,0,7.749-3.47,7.749-7.749c0-4.28-3.469-7.75-7.749-7.75
            s-7.749,3.47-7.749,7.75C341.911,44.647,345.38,48.117,349.66,48.117"/>
          <path clip-path="url(#SVGID_2_)" fill="#1A1A1A" d="M468.114,48.117c4.279,0,7.749-3.47,7.749-7.749c0-4.28-3.47-7.75-7.749-7.75
            c-4.28,0-7.749,3.47-7.749,7.75C460.365,44.647,463.834,48.117,468.114,48.117"/>
          <path clip-path="url(#SVGID_2_)" fill="#1A1A1A" d="M626.422,209.746c-4.28,0-7.75,3.47-7.75,7.749s3.47,7.75,7.75,7.75
            c4.279,0,7.748-3.471,7.748-7.75S630.701,209.746,626.422,209.746"/>
        </g>
        </svg>
        <p class="banner__title--catchline">Grooming and inspiring the brightest digital minds <br>
        DLG和Le Wagon为在上海的数字领域的专业士打造一项全新的学习机会</p>
      </div>
      <div class="banner__countdown">
        <div class="banner__countdown--date">
          <div class="content">
            <span class="date day">12</span>
            <span class="date">May 2019</span>
          </div>
        </div>
        <div v-if="!loading && timeLeft > 0"  class="banner__countdown--badge">Starts in</div>
        <div class="banner__countdown--time">
          <app-skeleton
            v-if="loading"
            width="100%"
            height="10px">
          </app-skeleton>
          <div v-else-if="!loading && timeLeft > 0" class="value">
            <div><span v-if="days < 10">0</span>{{ days }}</div>
            <div><span v-if="hours < 10">0</span>{{ hours }}</div>
            <div><span v-if="minutes < 10">0</span>{{ minutes }}</div>
            <div><span v-if="seconds < 10">0</span>{{ seconds }}</div>
          </div>
          <div v-else-if="timeFinished" class="value notimeleft">
            <span>L'événement est terminé</span>
          </div>
          <div v-else class="value notimeleft">
            <span>L'événement a commencé</span>
          </div>
          <div v-if="!loading && timeLeft > 0" class="label">
            <span>d.</span>
            <span>h.</span>
            <span>m.</span>
            <span>s.</span>
          </div>
        </div>
        <div class="banner__countdown--buttons">
          <a href="https://jinshuju.net/f/7EDPFl" class="btn btn-red">Register here</a>
          <a href="#description" class="btn btn-white" v-smooth-scroll="{ duration: 1000, offset: -150 }">More info</a>
        </div>
      </div>
    </section>
    <section id="description" class="description">
      <div class="description__images">
        <div class="description__images--image">
          <picture>
            <source type="image/webp" srcset="../assets/images/le-wagon-talk-1.webp">
            <source type="image/jpeg" srcset="../assets/images/le-wagon-talk-1.jpg">
            <img src="../assets/images/le-wagon-talk-1.jpg" alt="conference image" />
          </picture>
        </div>
        <div class="description__images--image">
          <picture>
            <source type="image/webp" srcset="../assets/images/le-wagon-talk-2.webp">
            <source type="image/jpeg" srcset="../assets/images/le-wagon-talk-2.jpg">
            <img src="../assets/images/le-wagon-talk-2.jpg" alt="conference image" />
          </picture>
        </div>
        <div class="description__images--image">
          <picture>
            <source type="image/webp" srcset="../assets/images/le-wagon-talk-3.webp">
            <source type="image/jpeg" srcset="../assets/images/le-wagon-talk-3.jpg">
            <img src="../assets/images/le-wagon-talk-3.jpg" alt="conference image" />
          </picture>
        </div>
      </div>
      <div class="description__content">
        <h3>Welcome to The Digital Academy.</h3>
        <p class="description__content--text">

           <br/><br/>
           With China’s digital economy valued at approximately $3.8 trillion, and its e-commerce market the largest in the world, it is not hard to recognise the importance placed on skills in this industry. This is compounded by the fact that competition in the digital sector is intensifying, and individuals are faced with the uphill task of constantly upgrading themselves to stay relevant.
           <br>中国的数字经济价值约3.8万亿美元，其电子商务市场规模居世界首位，因此不难认识到该行业对技能的重视。此外，数字行业的竞争正在加剧，个人面临着不断提升自我以保持竞争力的艰巨任务。<br/>

          <br/><br/>
          It is with this in mind that <strong> DLG (Digital Luxury Group) </strong> and <strong> leading coding school Le Wagon </strong> have launched The Digital Academy – a series of workshops that focus on helping participants acquire new digital skills and hone existing ones. A knowledge sharing initiative, it aims to groom and inspire the country’s best and brightest digital talents. Designed as a full day of courses, participants are free to build their own curriculums based on their interests, or even spend the bulk of their time networking and building relationships with other like-minded industry professionals. Here’s a sneak peek of the courses available on the day.
          <br>考虑到这一点，<strong> DLG (Digital Luxury Group) </strong> 和领先的编程学校 <strong> Le Wagon </strong> 发起了“数字思维学院”(The Digital Academy)——一系列旨在帮助参与者学习新的数字技能、并磨练现有技能的课程。这是一项知识共享计划，旨在培养和激励中国最优秀、最聪明的数字人才。学员可以根据自己的兴趣自由地选择当天的课程，甚至可以花大量时间与其他志同道合的行业专业人士社交并建立联系。以下是当天的课程简介。<br/>
          <br/><br/>
        </p>
        <a id="number4-58542912427" class="btn btn-red" @click="getId($event)">Register here</a>
      </div>
    </section>
    <section class="conduct">
      <h2>What is <span class="tag tag-red">The Digital Academy</span></h2>
      <div class="conduct__cards">
        <div v-for="(card, index) in cards" :key="index" class="conduct__cards--card">
          <span class="step">{{ index + 1 }}</span>
          <h4>{{ card.title }}</h4>
          <p class="content">{{ card.content }}</p>
        </div>
      </div>
    </section>
    <section id="instructors" class="slider">
      <h2>The <span class="tag tag-yellow">Instructors</span></h2>
      <div class="slider__slides">
        <div class="slider__slides--tabs gradient" @scroll="handleScroll">
          <div v-for="(attendee, index) in attendeesShuffled" :key="index" @click="activeTab = index" :class="['tab', activeTab === index ? 'active' : '']">
            <span class="tab__name">{{ attendee.full_name }}</span>
            <span class="tab__activity">{{ attendee.activity }}</span>
          </div>
        </div>
        <div class="slider__slides--content">
          <div class="content">
            <div class="content__photo">
              <transition-group tag="div" class="content__photo--image" name="slide">
                <div v-for="photo in currentTab.photo" :key="photo.url">
                  <img :src="photo.url" :alt="currentTab.full_name + ' photo'">
                </div>
              </transition-group>
            </div>
            <div v-if="currentTab.company" class="content__company">
              <a v-for="photo in currentTab.company" :key="photo.id" :href="currentTab.link" target="_blank" rel="noreferrer noopener">
                <img class="content__company animated fadeIn" :src="photo.url" :alt="currentTab.full_name + ' logo'" :key="photo.id">
              </a>
            </div>
            <div v-if="!currentTab.company">
              <br>
            </div>
            <span class="content__fullname" :key="currentTab.full_name">
              <img src="../assets/icons/arrow.svg" v-if="activeTab > 0" @click="activeTab--" class="content__fullname--mobile left" alt="left arrow icon">
              <span class="animated fadeIn">{{ currentTab.full_name }}</span>
              <img src="../assets/icons/arrow.svg" v-if="activeTab < 14" @click="activeTab++" class="content__fullname--mobile right" alt="right arrow icon">
            </span>
            <span class="content__activity animated fadeIn" :key="currentTab.activity">
              {{ currentTab.activity }}
            </span>
            <div class="content__title animated fadeIn" :key="currentTab.title">
              {{ currentTab.title_en }}
              <br>
              {{ currentTab.title_cn }}
            </div>
            <div class="content__description">
              <span class="content__description--description animated fadeIn">{{ currentTab.description_en }}</span>
              <br><br/>
              <span class="content__description--description animated fadeIn">{{ currentTab.description_cn }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="planning">
      <h2>The <span class="tag tag-yellow">Agenda</span></h2>
      <div class="planning__timeline">
        <div class="planning__timeline--check shift">
          <span class="shift--start">09:30</span>
          🤝
        </div>
        <div :class="['planning__timeline--meeting shift', active.greenShift ? 'active' : '']" @mouseenter="active.greenCard = true" @mouseleave="active.greenCard = false">
          <span class="shift--start">10:00</span>
          👨‍💻
        </div>

        <div :class="['planning__timeline--break shift', active.blueShift ? 'active' : '']" @mouseenter="active.blueCard = true" @mouseleave="active.blueCard = false">
          <span class="shift--start">13:00</span>
          🥗
        </div>

        <div :class="['planning__timeline--meeting2 shift', active.greenShift ? 'active' : '']" @mouseenter="active.orangeCard = true" @mouseleave="active.orangeCard = false">
          <span class="shift--start">14:00</span>
          👨‍💻
        </div>

        <div :class="['planning__timeline--toast shift', active.toastShift ? 'active' : '']" @mouseenter="active.toastCard = true" @mouseleave="active.toastCard = false">
          <span class="shift--start">17:30</span>
          🍸
          <span class="shift--end">19:30</span>
        </div>

      </div>
      <div class="planning__cards">
        <div id="workshop1" :class="['planning__cards--card', active.greenCard ? 'active' : '']" @mouseenter="active.greenShift = true" @mouseleave="active.greenShift = false">
          <div class="head">

            <div class="tag tag-red">Workshops</div>
            <div class="hours">10:00 - 13:00</div>
          </div>
          <p>Acquire new digital skills and hone existing ones. Build your own curriculum based on your interests!</p>
        </div>
        <div id="lunch" :class="['planning__cards--card', active.blueCard ? 'active' : '']" @mouseenter="active.blueShift = true" @mouseleave="active.blueShift = false">
          <div class="head">
            <div class="tag tag-yellow">Lunch</div>
            <div class="hours">13:00 - 14:00</div>
          </div>
          <p>Pause and reflect. Network and build relationships with other like-minded industry professionals.</p>
        </div>
        <div id="workshop2" :class="['planning__cards--card', active.greenCard ? 'active' : '']" @mouseenter="active.greenShift = true" @mouseleave="active.greenShift = false">
          <div class="head">
            <div class="tag tag-red">Workshops</div>
            <div class="hours">14:00 - 17:30</div>
          </div>
          <p>Continue learning. Join more courses at your own pace.</p>
        </div>
        <div id="party" :class="['planning__cards--card', active.toastCard ? 'active' : '']" @mouseenter="active.toastShift = true" @mouseleave="active.toastShift = false">
          <div class="head">
            <div class="tag tag-yellow">Networking</div>
            <div class="hours">17:30 - 19:30</div>
          </div>
          <p>Grab a drink with us, make meaningful connections and end the day in style! 😎</p>
        </div>
      </div>
    </section>
    <section class="informations">
      <div class="information">
        <div class="information__date">
          <span class="information__date--day">12</span>
          <div class="information__date--content">
            <span class="month">May 2019</span>
            <span class="hours"> 9:30 - 19:30</span>
          </div>

        </div>
<!--         <div class="information__direction">
          <img src="../assets/icons/map.svg" alt="map icon">
          <div class="information__direction--content">
            <span>Location</span>
            <a href="https://map.baidu.com/poi/%E4%B8%96%E7%95%8C%E8%B4%B8%E6%98%93%E5%A4%A7%E5%8E%A6/@13524169.576603249,3641414.9812600003,19z?uid=f1f5cac5d64d779937b06ca5&primaryUid=17997717913066274815&ugc_type=3&ugc_ver=1&device_ratio=1&compat=1&querytype=detailConInfo&da_src=shareurl" target="_blank" rel="noreferrer noopener">How to get there</a>
          </div>
        </div> -->
        <a href="https://jinshuju.net/f/7EDPFl" class="btn btn-white">Register</a>
      </div>
    </section>
    <footer>
      <div class="footer__images">
        <img src="../assets/images/logo.svg" alt="DLG x Le Wagon logo">
      </div>
    </footer>
  </div>
</template>

<script>
import SkeletonBox from "@/components/SkeletonBox.vue";

export default {
  data() {
    return {
      days: null,
      hours: null,
      minutes: null,
      seconds: null,
      timeLeft: null,
      loading: true,
      cards: [
        {
          title: "Who?",
          content:
            "The Digital Academy is created by DLG, the leading independent agency for international luxury brands and Le Wagon, the world’s most highly rated and product-centric coding boot camp."
        },
        {
          title: "What?",
          content:
            "It is a one-day learning event for digital professionals, featuring courses that hone everything from content creation to technical development skills. "
        },
        {
          title: "Why?",
          content:
            "Competition in the digital sector is intensifying in China, and individuals must constantly upgrade themselves to stay relevant. As the first workshop series of its kind, The Digital Academy aims to groom and inspire the field’s best and brightest."
        }
      ],
      attendees: [],
      attendeesShuffled: [],
      activeTab: 0,
      tabScrolled: false,
      active: [
        {
          greenCard: false,
          greenShift: false,
          blueCard: false,
          blueShirt: false,
          blueShift: false,
          redCard: false
        }
      ],
      currentTab: []
    };
  },
  watch: {
    activeTab() {
      return (this.currentTab = this.attendeesShuffled[this.activeTab]);
    }
  },
  components: {
    "app-skeleton": SkeletonBox
  },
  computed: {
    timeFinished() {
      const timeNow = Date.now();
      const timeEnded = new Date("May 12, 2019 19:00:00").getTime();
      return timeNow > timeEnded;
    }
  },
  head() {
    return {
      title: "The Digital Academy.",
      meta: [
        // Open Graph
        {
          name: "og:title",
          hid: "og:title",
          content: "The Digital Academy."
        },
        {
          name: "og:description",
          hid: "og:description",
          content:
            "数字人才一日沉浸式学习。A one-day learning event for digital professionals in Shanghai, China."
        },
        { name: "og:url", content: "https://www.thedigitalacademy.sh" },
        {
          name: "og:site_name",
          hid: "og:site_name",
          content: "The Digital Academy"
        },
        // Twitter Card
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: "The Digital Academy" },
        {
          name: "twitter:title",
          content: "The Digital Academy - Shanghai 2019"
        },
        {
          name: "twitter:description",
          content:
            "数字人才一日沉浸式学习。A one-day learning event for digital professionals in Shanghai, China."
        },
        {
          name: "twitter:image",
          content: "https://foundersummit.tech/thumbnail.png"
        },
        { name: "twitter:image:alt", content: "The Digital Academy image" }
      ]
    };
  },
  methods: {
    countDown() {
      const countDownDate = new Date("May 12, 2019 9:30:00").getTime();
      const self = this;
      const x = setInterval(function() {
        const now = new Date().getTime();
        const distance = countDownDate - now;
        self.timeLeft = distance;

        self.days = Math.floor(distance / (1000 * 60 * 60 * 24));
        self.hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        self.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        self.seconds = Math.floor((distance % (1000 * 60)) / 1000);
      }, 0);
    },
    handleScroll(evt) {
      let bottom = evt.srcElement.clientHeight - evt.srcElement.scrollTop;
      console.log(bottom);
      const tab = document.querySelectorAll(".slider__slides--tabs");
    },
    fetchAttendees() {
      const Airtable = require("airtable");
      Airtable.configure({
        endpointUrl: "https://api.airtable.com",
        apiKey: process.env.airtableKey
      });
      const base = Airtable.base(process.env.airtableId);
      this.attendees = [];
      const self = this;
      base("List")
        .select({
          view: "Gallery"
        })
        .all()
        .then(records => {
          records.forEach(function(record) {
            self.attendees.push(record.fields);
          });
          this.randomAttendeesList();
          this.currentTab = this.attendeesShuffled[0];
        })
        .catch(err => {
          console.log(err);
        });
    },
    randomAttendeesList() {
      const attendees = this.attendees;
      let currentIndex = attendees.length,
        temporaryValue,
        randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = attendees[currentIndex];
        attendees[currentIndex] = attendees[randomIndex];
        attendees[randomIndex] = temporaryValue;
      }
      this.attendeesShuffled = attendees;
    },
    getId: function(id) {
      this.$root.$emit("buttonId", id.target.id);
    }
  },
  mounted() {
    this.countDown();
    this.$nextTick(() => {
      setTimeout(() => (this.loading = false), 200);
    });
    this.fetchAttendees();
  }
};
</script>


<style lang="postcss" scoped>
.banner {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  height: 750px;
  align-content: center;
  padding: 0 var(--spacing-base);
  &:before {
    content: "";
    background: url(../assets/images/background-bnr.svg) no-repeat;
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
    background-size: contain;
    width: 860px;
    height: 100%;
  }
  &__title {
    margin-bottom: 50px;
    align-self: center;
    &--catchline {
      padding: 0 5px;
      margin-top: 30px;
      line-height: 20px;
      font-size: 1.125em;
    }
    &--logo {
      width: 508px;
      margin-right: 100px;
    }
  }
  &__countdown {
    width: 451px;
    height: 361px;
    box-shadow: var(--shadow);
    border-radius: 3px;
    position: relative;
    padding: 110px 40px 45px 40px;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-between;
    justify-self: end;
    background-color: white;
    &--date {
      position: absolute;
      top: -70px;
      transform: translateX(-50%);
      left: 50%;
      border-radius: 3px;
      height: 150px;
      width: 267px;
      background-color: var(--color-lightred);
      display: flex;
      justify-content: center;
      align-items: center;
      .content {
        display: flex;
        flex-flow: column;
        .date {
          color: var(--color-red);
          font-size: 3em;
          font-family: var(--font-head-medium);
          &.day {
            font-size: 4.5em;
          }
        }
      }
    }
    &--badge {
      width: 122px;
      font-size: 0.75em;
      text-align: center;
      padding: 6px 0;
      border-radius: 3px;
      font-family: var(--font-head-medium);
      color: var(--color-red);
      box-shadow: 0px 4px 10px rgba(253, 16, 21, 0.1);
      animation: ping 2s ease-in-out infinite both;
    }
    &--time {
      width: 100%;
      font-family: var(--font-head-medium);
      display: flex;
      flex-flow: column;
      justify-content: center;
      height: 100%;
      .value {
        display: grid;
        grid-template-columns: repeat(4, 55px);
        font-size: 3em;
        justify-content: space-between;
        div {
          &:last-child {
            color: var(--color-gray);
            justify-self: end;
          }
        }
        &.notimeleft {
          grid-template-columns: 1fr;
          font-size: 1.9em;
        }
      }
      .label {
        display: grid;
        grid-template-columns: repeat(4, 55px);
        justify-content: space-between;
        justify-items: end;
        font-size: 1.125em;
        color: var(--color-gray);
      }
    }
    &--buttons {
      display: flex;
      justify-content: space-between;
      width: 100%;
      .btn-red {
        color: white;
      }
      .btn-white {
        width: 169px;
      }
    }
  }
}
.description {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  position: relative;
  margin-top: 250px;
  padding: 0 var(--spacing-base);
  &__images {
    &--image {
      border-radius: 3px;
      box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
      img {
        position: relative;
        width: 100%;
        height: 100%;
        border-radius: 3px;
      }
      .gradient {
      }
      &:nth-child(2),
      &:last-child {
        left: 120px;
      }
      &:first-child {
        width: 377px;
        height: 283px;
        margin: 0 auto;
        position: relative;
        &:after {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
          background: linear-gradient(
            rgba(253, 16, 21, 0.1),
            rgba(253, 16, 21, 0.1)
          );
        }
      }
      &:nth-child(2) {
        width: 225px;
        height: 150px;
        position: absolute;
        top: 0;
        opacity: 0.4;
        z-index: -1;
        &:after {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
          background: linear-gradient(
            rgba(253, 16, 21, 0.2),
            rgba(253, 16, 21, 0.2)
          );
        }
      }
      &:last-child {
        width: 245px;
        height: 163px;
        position: absolute;
        bottom: 0;
        z-index: -1;
        opacity: 0.4;
        &:after {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
          background: linear-gradient(
            rgba(253, 16, 21, 0.2),
            rgba(253, 16, 21, 0.2)
          );
        }
      }
    }
  }
  &__content {
    width: 591px;
    height: 100%;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    &--text {
      line-height: 20px;
    }
    a {
      color: white;
    }
  }
}
.conduct {
  text-align: center;
  margin-top: 150px;
  position: relative;
  padding: 200px var(--spacing-base);
  width: 100%;
  left: 0;
  &:before {
    content: "";
    position: absolute;
    background: url(../assets/images/conduct-background-1.svg) no-repeat center;
    background-size: cover;
    transform: translateX(-50%);
    top: 0;
    left: 50%;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  &:after {
    content: "";
    position: absolute;
    background: url(../assets/images/conduct-background-2.svg) no-repeat center;
    background-size: cover;
    transform: translateX(-50%);
    top: 0;
    left: 50%;
    width: 100%;
    height: 100%;
    z-index: -2;
  }
  &__cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 50px;
    &:before {
      content: "";
      position: absolute;
      background: url(../assets/images/conduct-line.svg) no-repeat center;
      background-size: contain;
      transform: translate(-50%, -50%);
      top: 50%;
      left: 50%;
      width: 100%;
      height: 228px;
    }
    &--card {
      display: grid;
      align-content: center;
      grid-gap: 20px;
      margin-top: 40px;
      text-align: left;
      &:first-child {
        justify-self: start;
      }
      &:nth-child(2) {
        padding-left: 25px;
        .step {
          padding-top: 40px;
          text-align: center;
        }
      }
      &:last-child {
        justify-self: end;
      }
      &:first-child,
      &:last-child {
        .step {
          display: flex;
          align-items: flex-end;
          justify-content: center;
        }
      }
      .step {
        font-family: var(--font-head-black);
        color: white;
        font-size: 9.375em;
        height: 270px;
        padding-right: 25px;
      }
      .content {
        text-align: left;
      }
    }
  }
}
.slider {
  text-align: center;
  margin-top: 160px;
  padding: 0 var(--spacing-base);
  &__subtitle {
    margin-top: 30px;
  }
  &__slides {
    display: grid;
    grid-template-columns: 40% 1fr;
    grid-column-gap: 130px;
    margin-top: 87px;
    position: relative;
    &--tabs {
      height: 522px;
      overflow-y: scroll;
      display: grid;
      grid-row-gap: 8px;
      &.gradient {
        &:after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          height: 20%;
          width: 100%;
          opacity: 1;
          background-image: linear-gradient(
            to top,
            rgba(255, 255, 255, 1) 0%,
            rgba(255, 255, 255, 0) 100%
          );
          pointer-events: none;
        }
      }
      .tab {
        display: flex;
        flex-flow: column;
        align-items: flex-start;
        justify-content: center;
        background: white;
        border: 0.5px solid rgba(0, 0, 0, 0.1);
        border-radius: 3px;
        height: 67px;
        padding: 0 15px;
        text-align: left;
        line-height: 20px;
        cursor: pointer;
        transition: all 0.2s ease;
        &__name {
          font-family: var(--font-head-medium);
          font-size: 1.25em;
        }
        &__activity {
          font-family: var(--font-head-regular);
          font-size: 0.875em;
        }
        &.active,
        &:hover {
          color: var(--color-red);
          background-color: var(--color-lightyellow);
          border: 0.5px solid transparent;
        }
      }
    }
    &--content {
      .content {
        display: grid;
        grid-template-columns: 0.8fr 1fr;
        grid-template-rows: repeat(3, auto) 100px auto 1fr;
        text-align: left;
        height: 100%;
        position: relative;
        &__title {
          padding: 10px 20px;
          color: var(--color-red);
          background-color: var(--color-lightred);
          width: fit-content;
          border-radius: 3px;
          font-size: 1.125em;
          font-family: var(--font-head-medium);
          animation-delay: 0.1s;
          grid-column: span 2;
          align-self: start;
          height: fit-content;
          margin-bottom: 10px;
        }
        &__fullname {
          font-family: var(--font-head-black);
          font-size: 2em;
          align-self: end;
          animation-delay: 0.2s;
          &--mobile {
            display: none;
          }
        }
        &__activity {
          font-family: var(--font-head-regular);
          font-size: 1.125em;
          margin-top: 10px;
          animation-delay: 0.3s;
          position: relative;
        }
        &__photo {
          grid-column: 2;
          grid-row: 1 / span 4;
          justify-self: center;
          background: url(../assets/icons/background-photo-dots.svg) center
            no-repeat;
          background-size: cover;
          height: 335px;
          width: 100%;
          max-width: 335px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 50px;
          position: relative;
          animation-delay: 0.8s;
          &:before {
            content: "";
            background-image: url(../assets/icons/rectangle.svg);
            background-size: cover;
            height: 82px;
            width: 82px;
            position: absolute;
            z-index: -1;
            left: -40px;
            bottom: 13px;
          }
          &:after {
            content: "";
            background-image: url(../assets/icons/rectangle.svg);
            height: 109px;
            width: 109px;
            position: absolute;
            z-index: -1;
            top: -14px;
            right: -7px;
          }
          &--image {
            height: 235px;
            width: 235px;
            border-radius: 50%;
            background-color: var(--color-lightyellow);
            overflow: hidden;
            position: relative;
            transform: translate3d(0, 0, 0);
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
        &__company {
          align-self: center;
          position: relative;
          animation-delay: 0.4s;
          img {
            width: auto;
          }
        }
        &__description {
          grid-column: span 2;
          align-self: start;
          margin-top: 20px;
          height: fit-content;
          &--description {
            line-height: 20px;
            animation-delay: 0.5s;
          }
        }
      }
    }
  }
}
.talk {
  margin-top: 200px;
  text-align: center;
  padding: 0 var(--spacing-base);
  &__content {
    display: grid;
    grid-template-columns: 1fr 0.9fr;
    align-items: center;
    grid-column-gap: 70px;
    margin-top: 100px;
    &--image {
      img {
        width: 100%;
      }
    }
    &--text {
      text-align: left;
      p {
        margin-top: 45px;
        line-height: 20px;
      }
    }
  }
}
.planning {
  text-align: center;
  margin-top: 200px;
  padding: 0 var(--spacing-base);
  &__timeline {
    width: 100%;
    height: 60px;
    background-color: rgba(229, 229, 229, 0.1);
    display: grid;
    grid-template-columns: repeat(17, 1fr);
    grid-column-gap: 1px;
    align-items: center;
    margin-top: 100px;
    .shift {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 38px;
      border-radius: 50px;
      position: relative;
      transition: background-color 0.2s ease;
      &:before {
        content: "";
        background: url(../assets/icons/hour-pin.svg) no-repeat left;
        height: 73px;
        width: 100%;
        position: absolute;
        left: -3px;
        bottom: -11px;
      }
      &--start {
        position: absolute;
        top: -50px;
        left: -20px;
        color: rgba(0, 0, 0, 0.5);
      }
      &--end {
        position: absolute;
        top: -50px;
        right: -25px;
        color: rgba(0, 0, 0, 0.5);
      }
      &:after {
        content: "";
        background: url(../assets/icons/hour-pin.svg) no-repeat right;
        height: 73px;
        width: 100%;
        position: absolute;
        right: -3px;
        bottom: -11px;
      }
    }
    &--check {
      grid-column: 1 / span 1;
      background-color: var(--color-lightyellow);
      &.active {
        background-color: #fd101560;
      }
    }
    &--meeting {
      grid-column: 2 / span 4;
      color: var(--color-red);
      background-color: var(--color-lightred);
      &.active {
        background-color: var(--color-red);
      }
    }
    &--meeting2 {
      grid-column: 8 / span 8;
      color: var(--color-red);
      background-color: var(--color-lightred);
      &.active {
        background-color: var(--color-red);
      }
    }
    &--talk {
      grid-column: 5 / span 4;
      background-color: var(--color-black);
      &.active {
        background-color: #62ddf560;
      }
    }
    &--toast {
      grid-column: 16 / span 3;
      background-color: var(--color-lightyellow);
      &.active {
        background-color: var(--color-yellow);
      }
    }
    &--break {
      grid-column: 6 / span 2;
      background-color: var(--color-lightyellow);
      &.active {
        background-color: var(--color-yellow);
      }
    }
  }
  &__cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 25px;
    margin-top: 100px;

    #meeting {
      &.active {
        box-shadow: 0px 4px 15px #1edd8860;
      }
    }
    #talk {
      &.active {
        box-shadow: 0px 4px 15px #62ddf560;
      }
    }
    #toast {
      &.active {
        box-shadow: 0px 4px 15px #fd101560;
      }
    }
    #break {
      &.active {
        box-shadow: 0px 4px 15px #fd101560;
      }
    }
    &--card {
      background-color: white;
      box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
      border-radius: 3px;
      min-height: 174px;
      padding: 20px;
      display: flex;
      flex-flow: column;
      position: relative;
      transition: box-shadow 0.2s ease;
      .head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        .tag {
          width: fit-content;
          font-family: var(--font-head-medium);
        }
        .hours {
          font-family: var(--font-head-regular);
        }
      }
      p {
        text-align: left;
        font-size: 1em;
        margin-top: auto;
        margin-right: auto;
        margin-bottom: auto;
        line-height: 20px;
      }
      &:last-child {
        &:after {
          content: "";
          background: url(../assets/icons/dots-small.svg) no-repeat;
          position: absolute;
          height: 140px;
          width: 154px;
          top: -29px;
          right: -35px;
          z-index: -1;
        }
      }
    }
  }
}
.informations {
  margin: 250px 0;
  padding: 0 var(--spacing-base);
  .information {
    background-color: var(--color-lightyellow);
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 50px 0;
    font-family: var(--font-head-medium);
    color: var(--color-red);
    position: relative;
    &__date {
      display: flex;
      align-items: center;
      position: relative;
      &--day {
        font-size: 3em;
        margin-right: 10px;
      }
      &--content {
        display: flex;
        flex-flow: column;
        line-height: 20px;
        .month {
          font-size: 1.125em;
        }
        .hours {
          font-size: 0.75em;
        }
      }
      &:after {
        content: "";
        border: 1px dashed white;
        height: 91px;
        position: absolute;
        right: -70px;
      }
    }
    &__direction {
      display: flex;
      align-items: center;
      position: relative;
      img {
        margin-right: 20px;
      }
      &--content {
        display: flex;
        flex-flow: column;
        line-height: 20px;
        span {
          font-size: 1.125em;
        }
        a {
          font-size: 0.75em;
          text-decoration: underline;
        }
      }
      &:after {
        content: "";
        border: 1px dashed white;
        height: 91px;
        position: absolute;
        right: -70px;
      }
    }
    &__social {
      display: flex;
      justify-content: space-between;
      width: 150px;
      position: relative;
      align-items: center;
      &:after {
        content: "";
        border: 1px dashed white;
        height: 91px;
        position: absolute;
        right: -70px;
      }
    }
    a {
      justify-self: end;
    }
    &:before {
      content: "";
      background: url(../assets/icons/dots-small.svg) no-repeat;
      position: absolute;
      height: 140px;
      width: 154px;
      bottom: -32px;
      left: -35px;
      z-index: -1;
    }
  }
}
footer {
  display: grid;
  justify-items: center;
  margin: 40px 0px;
  .footer {
    &__images {
      display: flex;
      justify-content: space-between;
      width: 230px;
    }
    &__menu {
      list-style: none;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 50px;
      justify-items: center;
      margin: 50px 0;
      a {
        position: relative;
        &:after {
          border-bottom: 1.5px solid var(--color-black);
          content: "";
          display: block;
          position: absolute;
          margin: 0.25em auto 0;
          transition: width 250ms ease-in-out 0s;
          width: 0;
        }
        &:hover {
          &:after {
            width: 100%;
            transition: width 100ms ease-in-out 0s;
          }
        }
      }
    }
  }
}
@keyframes ping {
  0% {
    box-shadow: 0px 4px 10px rgba(253, 16, 21, 0.15);
  }
  50% {
    box-shadow: 0px 4px 10px rgba(253, 16, 21, 0.05);
  }
  100% {
    box-shadow: 0px 4px 10px rgba(253, 16, 21, 0.15);
  }
}

@media (--mobile) {
  h2 {
    font-size: 2.5em;
    line-height: 1.5em;
    text-align: left;
  }
  h3 {
    font-size: 1.8em;
  }
  .background-icons {
    display: none;
  }
  .banner {
    padding: 0 20px;
    grid-template-columns: 1fr;
    &:before {
      display: none;
    }
    &__title {
      margin: 0;
      h1 {
        font-size: 2.5em;
      }
      &--catchline {
        margin: 0 0 120px 0;
        font-size: 1em;
      }
      &--logo {
        width: 348px;
        margin-right: 0px;
        margin-top: 30px;
      }
    }
    &__countdown {
      width: 100%;
      padding: 30px;
      &--buttons {
        display: grid;
        grid-template-columns: 1fr;
        grid-row-gap: 20px;
        .btn {
          width: 100%;
        }
      }
      &--date {
        width: 200px;
        height: auto;
        padding: 15px 0;
        .content {
          .date {
            font-size: 2em;
            &.day {
              font-size: 3.5em;
            }
          }
        }
      }
      &--badge {
        margin-top: 40px;
      }
      &--time {
        .value {
          font-size: 2.5em;
        }
      }
    }
  }
  .description {
    padding: 0 20px;
    margin-top: 95px;
    min-height: 900px;
    &__content {
      width: 100%;
      display: grid;
      grid-row-gap: 10px;
    }
    &__images {
      display: none;
    }
  }
  .conduct {
    padding: 130px 20px 100px 20px;
    &__cards {
      grid-template-columns: 1fr;
      &:before {
        display: none;
      }
      &--card {
        h4,
        .content {
          text-align: left;
          padding: 0;
        }
        &:nth-child(2) {
          padding: 0;
          .step {
            padding-top: 0;
          }
        }
        .step {
          padding: 0;
          height: auto;
        }
      }
    }
  }
  .slider {
    margin-top: 50px;
    margin-bottom: 200px;
    padding: 0 20px;
    &__subtitle {
      text-align: left;
    }
    &__slides {
      grid-template-columns: 1fr;
      grid-row-gap: 30px;
      margin-top: 30px;
      &--tabs {
        display: none;
      }
      &--content {
        .content {
          grid-template-columns: 1fr;
          grid-template-rows: repeat(4, auto) 80px auto;
          grid-row-gap: 30px;
          position: relative;
          &__photo {
            grid-column: 1;
            grid-row: 2;
            margin-right: 0;
            width: 100%;
            &--image > .slide-enter,
            .slide-leave-to {
              transform: none;
              opacity: 0;
            }
          }
          &__title {
            justify-self: center;
          }
          &__fullname {
            position: relative;
            grid-column: 1;
            grid-row: 3;
            font-size: 1.8em;
            justify-self: center;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            width: 100%;
            height: 85px;
            padding: 0 50px;
            &--mobile {
              display: block;
              position: absolute;
              background-color: var(--color-lightyellow);
              padding: 20px 2px 20px 7px;
              &.left {
                left: 0;
              }
              &.right {
                right: 0;
                transform: rotate(180deg);
              }
            }
          }
          &__company {
            grid-column: 1;
            grid-row: 5;
            align-self: center;
          }
          &__activity {
            grid-column: 1;
            grid-row: 4;
            margin-top: 0;
          }
          &__description {
            margin-top: 0;
          }
        }
      }
    }
  }
  .talk {
    padding: 0 20px;
    margin-top: 80px;
    &__content {
      grid-template-columns: 1fr;
      margin-top: 50px;
      &--text {
        margin-top: 50px;
      }
    }
  }
  .planning {
    padding: 0 10px;
    margin-top: 80px;
    &__timeline {
      display: none;
    }
    &__cards {
      margin-top: 50px;
      grid-template-columns: 1fr;
      grid-row-gap: 50px;
    }
  }
  .informations {
    padding: 0 20px;
    margin: 50px 0;
    .information {
      display: grid;
      grid-row-gap: 50px;
      justify-items: center;
      a {
        justify-self: center;
      }
      &__date {
        &:after {
          display: none;
        }
      }
      &__direction {
        &:after {
          display: none;
        }
      }
      &__social {
        &:after {
          display: none;
        }
      }
    }
  }
  footer {
    .footer {
      &__images {
        grid-row: 2;
        margin-bottom: 50px;
      }
      &__menu {
        grid-template-columns: 1fr;
        grid-row-gap: 20px;
        justify-items: start;
      }
    }
  }
}

@media (--tablet) {
  .banner {
    padding: 0 40px;
    grid-column-gap: 40px;
    &:before {
      width: 550px;
    }
    &__title {
      &--logo {
        width: 348px;
      }
    }
  }
  .description {
    padding: 0 40px;
    grid-column-gap: 40px;
    &__content {
      width: auto;
    }
  }
  .conduct {
    padding: 150px 40px;
    &__cards {
      &:before {
        top: 46%;
        width: 1150px;
      }
    }
  }
  .slider {
    padding: 0 40px;
    &__slides {
      grid-column-gap: 60px;
    }
  }
  .talk {
    padding: 0 40px;
  }
  .planning {
    padding: 0 40px;
  }
  .informations {
    padding: 0 40px;
  }
}
</style>
