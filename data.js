const movies = [
  { title: "שרק 1 (Shrek)", id: "1Au4tpzq7rE8SkFKAlNfSOFF5L5zqzkBX", image: "assets/shrek1.png" },
  { title: "שרק 2 (Shrek 2)", id: "1CgRPoW8t9tWSZBKGcadxKaYAf013EXWW", image: "assets/shrek2.png" },
  { title: "שרק 3 (Shrek 3)", id: "1eWgn6V10lt4YcsdVFmc9YLv7hNVDPMFZ", image: "assets/shrek3.png" },

  { title: "קונג פו פנדה 1 (Kung Fu Panda)", id: "11azqduzJc6d-z_Vm2cA9yTQ3Pe0zeDL-", image: "assets/kfp1.png" },
  { title: "קונג פו פנדה 2 (Kung Fu Panda 2)", id: "1pFqf6RshriTtVYGvzvTxp4pN41P36VbH", image: "assets/kfp2.png" },
  { title: "קונג פו פנדה 3 (Kung Fu Panda 3)", id: "1PF-ISOLArYVZ-lfwmuAUymBi1EeapHNZ", image: "assets/kfp3.png" },
  { title: "קונג פו פנדה 4 (Kung Fu Panda 4)", id: "1n_ysnrnhmrIie0Y0KNX7pig6KxX-e0Zd", image: "assets/kfp4.png" },

  { title: "זוטרופוליס 1 (Zootropolis)", id: "14_z-C_3QL3rlmxP_JI8H4Ew_tj8M0FjQ", image: "assets/zootropolis1.png" },
  { title: "זוטרופוליס 2 (Zootropolis 2)", id: "1HrTPtCnqi9PPmlbMZ6Zl7dLO_Qs4dUMq", image: "assets/zootropolis2.png" },

  { title: "בייבי דיי אאוט (Baby's Day Out)", id: "1vUOCa9RC_nk12vieCVSNCuGYS1TeZF22", image: "assets/baby.png" },
  { title: "משפחת ווילובי (The Willoughbys)", id: "1bjvvbMhET-88_02I3cg1tOTQJqGSHsjM", image: "assets/willoughby.png" },

  { title: "טד 1 (Ted)", id: "1sKS0jxKQk3BnOpiPRqWoAYZo1OTJ-NZA", image: "assets/ted1.png" },
  { title: "טד 2 (Ted 2)", id: "11HmYmdOPab3j8ui7hNjOVz68XMm6Ot62", image: "assets/ted2.png" },

  { title: "ספיידרמן: ממד העכביש", id: "1lMKHarLFY0OQKlg4IbrSJYBonG_Btw_u", image: "assets/spiderman.png" },
  { title: "מפלצות בשלג (Smallfoot)", id: "126Co8FEr23opmtNA1IbbqwOsPt8lJ_RI", image: "assets/smallfoot.png" },
  { title: "מעבר ליער (Over the Hedge)", id: "10AnEsLe9T85wtnia_rmqjgOBWX4iD7S7", image: "assets/hedge.png" },

  { title: "מדגסקר 3 (Madagascar 3)", id: "1Q3o-UgYzJF-FJmRlNP5Qm7BjYjmKOHVX", image: "assets/madagascar3.png" },
  { title: "ג'ומנג'י 2 (Jumanji)", id: "1jNBR1okdeR7Is8fQ8A3w09p4nbO5VWXP", image: "assets/jumanji.png" },

  { title: "גנוב על הירח (Despicable Me)", id: "1z4DiNm90KsypotPeUM56bM9GPMklGjNj", image: "assets/gro.png" },
  { title: "אנגרי בירדס 2", id: "1aayN5secOwpHVqGkQUWwBMJ0QctRVK0q", image: "assets/angrybirds.png" },

  { title: "אמיצה (Brave)", id: "15F-npGs53Cbvmh58mWIIwDLQU1Qv0Xck", image: "assets/brave.png" },
  { title: "הדרקון הראשון שלי 3", id: "1Aa_2OimQvI98aM-_4XsUBmsdf1dHE4fD", image: "assets/dragon.png" },

  { title: "משפחת אדמס", id: "1xB516Q6f1lznZBoCrGCVksxljvcP7rLr", image: "assets/addams.png" },
  { title: "בית ספר למפלצות", id: "1VhBw1sANIpblJB_3CMbo11bzNG2Y_nZ5", image: "assets/monsters.png" },

  { title: "מפלצת של מלון 1", id: "1JTlotR3RJHV-814o482pcITFcqy0yWxI", image: "assets/hotel1.png" },
  { title: "מפלצת של מלון 2", id: "1LSNHiSL72qSPgWGCgzHghqQEM7BIe9z1", image: "assets/hotel2.png" },

  { title: "פלונטר (Tangled)", id: "1aj2sXv3ZvzfeaGb1mDcCh0d3F-OH61n5", image: "assets/tangled.png" },
  { title: "שחקי אותה בוסית", id: "17XZWPoNEViTkmjIqMrkuXM6WSy51Qk0q", image: "assets/boss.png" },

  { title: "דוליטל", id: "11rKfis-VWzdDxxmdcLpJysRkljFLxvws", image: "assets/dolittle.png" },
  { title: "האביר האפל עולה", id: "1kYhHxegIQO8sYhkTiBYa0CVF2a43T6Gl", image: "assets/batman.png" },
  { title: "בלגאן בחווה", id: "1A7B_L-wkIS-xQ9vjqeFp9YC4f8vd44VG", image: "assets/barnyard.png" }
];

const series = [
  {
    name: "צפוף",
    image: "assets/tsf1.png",
    seasons: [
      {
        name: "עונה 1",
        image: "assets/tsf1.png",
        episodes: [
          { title: "פרק 1", id: "1MoAzl5BX5Se80XOeypPoZhjgLIROjcxC", image: "assets/tsf1.png" },
          { title: "פרק 2", id: "1isZiALgbbQWagGzt4GxysVq1_Qfd4tvI", image: "assets/tsf1.png" },
          { title: "פרק 3", id: "1tJM6qYOmII0v6ehMcXojDRCixkNBqI2H", image: "assets/tsf1.png" },
          { title: "פרק 4", id: "1tJM6qYOmII0v6ehMcXojDRCixkNBqI2H", image: "assets/tsf1.png" },
          { title: "פרק 5", id: "1cWYhfwCoo5pJgzUFrpQiTvYMYEbg1ZUc", image: "assets/tsf1.png" },
          { title: "פרק 6", id: "1zRH9OKhSk87WZMVtdusb_z0ntZt110_7", image: "assets/tsf1.png" },
          { title: "פרק 7", id: "1Ymx5zil-aBBNH77yEhVwHhUaantmcA8h", image: "assets/tsf1.png" },
          { title: "פרק 8", id: "1KT6dDH3k9Ye13pKxarqztlTd0JYZfWSX", image: "assets/tsf1.png" },
          { title: "פרק 9", id: "1Qe99zYh0Nn6-9qPb3bgSdLmOn1_x7Wn8", image: "assets/tsf1.png" },
          { title: "פרק 10", id: "1bclh23QFusb0tUPQWed6eqI6rfRA29aq", image: "assets/tsf1.png" },
          { title: "פרק 11", id: "12U8BtVpzx7UiknGLrEl_FgFvfwr1mqi9", image: "assets/tsf1.png" },
          { title: "פרק 12", id: "1EhB5t03clS4bF0-RfTVcf2A0Ahvfa3VF", image: "assets/tsf1.png" },
          { title: "פרק 13", id: "1iABzmI3QAdVBFC-IvexCMQY20xmCq5GA", image: "assets/tsf1.png" },
          { title: "פרק 14", id: "1ER_utCWpc6TfbxK40cggW31THF8MhSpt", image: "assets/tsf1.png" },
          { title: "פרק 15", id: "1Ttk3UL1kFXNzYJUpD61NURCMTIJtuae3", image: "assets/tsf1.png" },
          { title: "פרק 16", id: "1X71gUsBhJtezYlJknMKHnz8x3hUdi2Vj", image: "assets/tsf1.png" },
          { title: "פרק 17", id: "1X71gUsBhJtezYlJknMKHnz8x3hUdi2Vj", image: "assets/tsf1.png" },
          { title: "פרק 18", id: "1HO42GsUOwp6R4sz6rbDdmhe219GoCGso", image: "assets/tsf1.png" },
          { title: "פרק 19", id: "1Fbu4IYyLZ5mSRQPSt6zgt0um4ra0Ng_h", image: "assets/tsf1.png" },
          { title: "פרק 20", id: "1Kq-J5fBAM9KlYnf1_nK0zA-VL3kZkrj6", image: "assets/tsf1.png" }
        ]
      },
      {
        name: "עונה 2",
        image: "assets/tsf2.png",
        episodes: [
          { title: "פרק 1", id: "1Y9b9ZmuRq_svh0pE-5uNUTHOFpol4EHX", image: "assets/tsf2.png" },
          { title: "פרק 2", id: "10CaRHCjgBMmmwnqmpRFtQsB5Bvq5uzd8", image: "assets/tsf2.png" },
          { title: "פרק 3", id: "1pYvMHMWfmIApzEiRrnMXatKulR5YMguL", image: "assets/tsf2.png" },
          { title: "פרק 4", id: "1LNvzpkGh6GJNltQFatr8l3NAuQskd1LJ", image: "assets/tsf2.png" },
          { title: "פרק 5", id: "1P_SoisLtg4klG4lTwAZxwLV1usOFdp6r", image: "assets/tsf2.png" },
          { title: "פרק 6", id: "1YO2M-0eoX-po-Hq2l91hsydznxW_RwiJ", image: "assets/tsf2.png" },
          { title: "פרק 7", id: "1xIkYXC5TIAyxv6rLaMpS3db8tnDotGx5", image: "assets/tsf2.png" },
          { title: "פרק 8", id: "1xZZzS7M9Vaq3hrc025-7WjfwGZMpIAEL", image: "assets/tsf2.png" },
          { title: "פרק 9", id: "1sAZz0BLoSn_9yPHOzdK1KVAQyzXnQS2Q", image: "assets/tsf2.png" },
          { title: "פרק 10", id: "1Gh6KC_wALojUh2iUeRa49jdh9iI4fhNL", image: "assets/tsf2.png" },
          { title: "פרק 11", id: "1Jmxzxajk4zQtPlw1zNcJd_soRWK1YUUe", image: "assets/tsf2.png" },
          { title: "פרק 12", id: "1qhS6LirpUorwLvWhouwuQbplIcHED6aB", image: "assets/tsf2.png" },
          { title: "פרק 13", id: "1FduDIXPKViwsGVZ1sJ0fZO9rO13vuHHO", image: "assets/tsf2.png" },
          { title: "פרק 14", id: "13PmLiTb_5Ki2mtK5pApJ1VdjdQ0xlfx5", image: "assets/tsf2.png" },
          { title: "פרק 15", id: "1ZWy2CGP1iqQZziA0oTcorPgMOcE-nm2m", image: "assets/tsf2.png" },
          { title: "פרק 16", id: "1CWluOSC8npxcM_oAYZ_Il1j5GEgLpxjM", image: "assets/tsf2.png" },
          { title: "פרק 17", id: "1rtH4V6JWO2a2Z2TT6pSViukVvtkcF8rk", image: "assets/tsf2.png" },
          { title: "פרק 18", id: "1xvE6y7_6vZ2URphkZqL9EnI517m3u2Eh", image: "assets/tsf2.png" },
          { title: "פרק 19", id: "1BLy0phn0KLYv_Z2q0rdZ7wcYhnGJrcO6", image: "assets/tsf2.png" },
          { title: "פרק 20", id: "1_2Kg53EuCQV57yyPvrqrdzYjGsfvEO5S", image: "assets/tsf2.png" }
        ]
      }
    ]
  }
];
