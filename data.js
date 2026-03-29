const movies = [
  {
    title: "Zootropolis 1",
    id: "14_z-C_3QL3rlmxP_JI8H4Ew_tj8M0FjQ",
    image: "assets/zootropolis1.png"
  },
  {
    title: "Zootropolis 2",
    id: "1HrTPtCnqi9PPmlbMZ6Zl7dLO_Qs4dUMq",
    image: "assets/zootropolis2.png"
  }
];

const series = [
  {
    name: "צפוף - עונה 1",
    image: "assets/tsf1.png",
    episodes: [
      { title: "פרק 1", id: "1MoAzl5BX5Se80XOeypPoZhjgLIROjcxC" },
      { title: "פרק 2", id: "1isZiALgbbQWagGzt4GxysVq1_Qfd4tvI" },
      { title: "פרק 3", id: "1tJM6qYOmII0v6ehMcXojDRCixkNBqI2H" },
      { title: "פרק 4", id: "1tJM6qYOmII0v6ehMcXojDRCixkNBqI2H" },
      { title: "פרק 5", id: "1cWYhfwCoo5pJgzUFrpQiTvYMYEbg1ZUc" },
      { title: "פרק 6", id: "1zRH9OKhSk87WZMVtdusb_z0ntZt110_7" },
      { title: "פרק 7", id: "1Ymx5zil-aBBNH77yEhVwHhUaantmcA8h" },
      { title: "פרק 8", id: "1KT6dDH3k9Ye13pKxarqztlTd0JYZfWSX" },
      { title: "פרק 9", id: "1Qe99zYh0Nn6-9qPb3bgSdLmOn1_x7Wn8" },
      { title: "פרק 10", id: "1bclh23QFusb0tUPQWed6eqI6rfRA29aq" },
      { title: "פרק 11", id: "12U8BtVpzx7UiknGLrEl_FgFvfwr1mqi9" },
      { title: "פרק 12", id: "1EhB5t03clS4bF0-RfTVcf2A0Ahvfa3VF" },
      { title: "פרק 13", id: "1iABzmI3QAdVBFC-IvexCMQY20xmCq5GA" },
      { title: "פרק 14", id: "1ER_utCWpc6TfbxK40cggW31THF8MhSpt" },
      { title: "פרק 15", id: "1Ttk3UL1kFXNzYJUpD61NURCMTIJtuae3" },
      { title: "פרק 16", id: "1X71gUsBhJtezYlJknMKHnz8x3hUdi2Vj" },
      { title: "פרק 17", id: "1X71gUsBhJtezYlJknMKHnz8x3hUdi2Vj" },
      { title: "פרק 18", id: "1HO42GsUOwp6R4sz6rbDdmhe219GoCGso" },
      { title: "פרק 19", id: "1Fbu4IYyLZ5mSRQPSt6zgt0um4ra0Ng_h" },
      { title: "פרק 20", id: "1Kq-J5fBAM9KlYnf1_nK0zA-VL3kZkrj6" }
    ]
  },
  {
    name: "צפוף - עונה 2",
    image: "assets/tsf2.png",
    episodes: [
      { title: "פרק 1", id: "1Y9b9ZmuRq_svh0pE-5uNUTHOFpol4EHX" },
      { title: "פרק 2", id: "10CaRHCjgBMmmwnqmpRFtQsB5Bvq5uzd8" },
      { title: "פרק 3", id: "1pYvMHMWfmIApzEiRrnMXatKulR5YMguL" },
      { title: "פרק 4", id: "1LNvzpkGh6GJNltQFatr8l3NAuQskd1LJ" },
      { title: "פרק 5", id: "1P_SoisLtg4klG4lTwAZxwLV1usOFdp6r" },
      { title: "פרק 6", id: "1YO2M-0eoX-po-Hq2l91hsydznxW_RwiJ" },
      { title: "פרק 7", id: "1xIkYXC5TIAyxv6rLaMpS3db8tnDotGx5" },
      { title: "פרק 8", id: "1xZZzS7M9Vaq3hrc025-7WjfwGZMpIAEL" },
      { title: "פרק 9", id: "1sAZz0BLoSn_9yPHOzdK1KVAQyzXnQS2Q" },
      { title: "פרק 10", id: "1Gh6KC_wALojUh2iUeRa49jdh9iI4fhNL" },
      { title: "פרק 11", id: "1Jmxzxajk4zQtPlw1zNcJd_soRWK1YUUe" },
      { title: "פרק 12", id: "1qhS6LirpUorwLvWhouwuQbplIcHED6aB" },
      { title: "פרק 13", id: "1FduDIXPKViwsGVZ1sJ0fZO9rO13vuHHO" },
      { title: "פרק 14", id: "13PmLiTb_5Ki2mtK5pApJ1VdjdQ0xlfx5" },
      { title: "פרק 15", id: "1ZWy2CGP1iqQZziA0oTcorPgMOcE-nm2m" },
      { title: "פרק 16", id: "1CWluOSC8npxcM_oAYZ_Il1j5GEgLpxjM" },
      { title: "פרק 17", id: "1rtH4V6JWO2a2Z2TT6pSViukVvtkcF8rk" },
      { title: "פרק 18", id: "1xvE6y7_6vZ2URphkZqL9EnI517m3u2Eh" },
      { title: "פרק 19", id: "1BLy0phn0KLYv_Z2q0rdZ7wcYhnGJrcO6" },
      { title: "פרק 20", id: "1_2Kg53EuCQV57yyPvrqrdzYjGsfvEO5S" }
    ]
  }
];
