// Assets base path
const ASSETS_PATH = "assets/";

// Helper to create movie objects
const movie = (title, id, imageFile) => ({ title, id, image: ASSETS_PATH + imageFile });

// Movies list
const movies = [
  movie("שרק 1 (Shrek 1)", "1Au4tpzq7rE8SkFKAlNfSOFF5L5zqzkBX", "shrek1.png"),
  movie("שרק 2 (Shrek 2)", "1CgRPoW8t9tWSZBKGcadxKaYAf013EXWW", "shrek2.png"),
  movie("שרק 3 (Shrek 3)", "1eWgn6V10lt4YcsdVFmc9YLv7hNVDPMFZ", "shrek3.png"),

  movie("קונג פו פנדה 1 (Kung Fu Panda 1)", "11azqduzJc6d-z_Vm2cA9yTQ3Pe0zeDL-", "kfp1.png"),
  movie("קונג פו פנדה 2 (Kung Fu Panda 2)", "1pFqf6RshriTtVYGvzvTxp4pN41P36VbH", "kfp2.png"),
  movie("קונג פו פנדה 3 (Kung Fu Panda 3)", "1PF-ISOLArYVZ-lfwmuAUymBi1EeapHNZ", "kfp3.png"),
  movie("קונג פו פנדה 4 (Kung Fu Panda 4)", "1n_ysnrnhmrIie0Y0KNX7pig6KxX-e0Zd", "kfp4.png"),

  movie("זוטרופוליס 1 (Zootropolis 1)", "14_z-C_3QL3rlmxP_JI8H4Ew_tj8M0FjQ", "zootropolis1.png"),
  movie("זוטרופוליס 2 (Zootropolis 2)", "1HrTPtCnqi9PPmlbMZ6Zl7dLO_Qs4dUMq", "zootropolis2.png"),

  movie("בייבי די אאוט (Baby's Day Out)", "1vUOCa9RC_nk12vieCVSNCuGYS1TeZF22", "baby.png"),
  movie("משפחת ווילובי (The Willoughbys)", "1bjvvbMhET-88_02I3cg1tOTQJqGSHsjM", "willoughby.png"),

  movie("טד 1 (Ted 1)", "1sKS0jxKQk3BnOpiPRqWoAYZo1OTJ-NZA", "ted1.png"),
  movie("טד 2 (Ted 2)", "11HmYmdOPab3j8ui7hNjOVz68XMm6Ot62", "ted2.png"),

  movie("ספיידרמן: ממד העכביש (Spider‑Verse)", "1lMKHarLFY0OQKlg4IbrSJYBonG_Btw_u", "spiderman.png"),
  movie("מפלצות בשלג (Smallfoot)", "126Co8FEr23opmtNA1IbbqwOsPt8lJ_RI", "smallfoot.png"),
  movie("מעבר ליער (Over the Hedge)", "10AnEsLe9T85wtnia_rmqjgOBWX4iD7S7", "hedge.png"),

  movie("מדגסקר 3 (Madagascar 3)", "1Q3o-UgYzJF-FJmRlNP5Qm7BjYjmKOHVX", "madagascar3.png"),
  movie("ג'ומנג'י 2 (Jumanji 2)", "1jNBR1okdeR7Is8fQ8A3w09p4nbO5VWXP", "jumanji.png"),

  movie("גנוב על הירח 1 (Despicable Me)", "1z4DiNm90KsypotPeUM56bM9GPMklGjNj", "gro.png"),
  movie("אנגרי בירדס 2 (Angry Birds 2)", "1aayN5secOwpHVqGkQUWwBMJ0QctRVK0q", "angrybirds.png"),

  movie("אמיצה (Brave)", "15F-npGs53Cbvmh58mWIIwDLQU1Qv0Xck", "brave.png"),
  movie("הדרקון הראשון שלי 3 (Hidden World)", "1Aa_2OimQvI98aM-_4XsUBmsdf1dHE4fD", "dragon.png"),

  movie("משפחת אדמס (The Addams Family)", "1xB516Q6f1lznZBoCrGCVksxljvcP7rLr", "addams.png"),
  movie("בית ספר למפלצות (School Monsters)", "1VhBw1sANIpblJB_3CMbo11bzNG2Y_nZ5", "monsters.png"),

  movie("מפלצת של מלון 1 (Hotel Transylvania 1)", "1JTlotR3RJHV-814o482pcITFcqy0yWxI", "hotel1.png"),
  movie("מפלצת של מלון 2 (Hotel Transylvania 2)", "1LSNHiSL72qSPgWGCgzHghqQEM7BIe9z1", "hotel2.png"),

  movie("פלונטר (Tangled)", "1aj2sXv3ZvzfeaGb1mDcCh0d3F-OH61n5", "tangled.png"),
  movie("שחקי אותה בוסית (Like a Boss)", "17XZWPoNEViTkmjIqMrkuXM6WSy51Qk0q", "boss.png"),

  movie("דוליטל (Dolittle)", "11rKfis-VWzdDxxmdcLpJysRkljFLxvws", "dolittle.png"),
  movie("האביר האפל עולה (Batman)", "1kYhHxegIQO8sYhkTiBYa0CVF2a43T6Gl", "batman.png"),
  movie("בלגאן בחווה (Barnyard)", "1A7B_L-wkIS-xQ9vjqeFp9YC4f8vd44VG", "barnyard.png")
];

// Helper to create episode objects
const episode = (title, id, imageFile) => ({ title, id, image: ASSETS_PATH + imageFile });

// Helper to create season objects
const season = (name, imageFile, episodesArray) => ({
  name,
  image: ASSETS_PATH + imageFile,
  episodes: episodesArray
});

// Series list
const series = [
  {
    name: "צפוף",
    image: ASSETS_PATH + "tsf1.png",
    seasons: [
      season("עונה 1", "tsf1.png", [
        episode("פרק 1", "1MoAzl5BX5Se80XOeypPoZhjgLIROjcxC", "tsf1.png"),
        episode("פרק 2", "1isZiALgbbQWagGzt4GxysVq1_Qfd4tvI", "tsf1.png"),
        episode("פרק 3", "1tJM6qYOmII0v6ehMcXojDRCixkNBqI2H", "tsf1.png"),
        episode("פרק 4", "1tJM6qYOmII0v6ehMcXojDRCixkNBqI2H", "tsf1.png"),
        episode("פרק 5", "1cWYhfwCoo5pJgzUFrpQiTvYMYEbg1ZUc", "tsf1.png"),
        episode("פרק 6", "1zRH9OKhSk87WZMVtdusb_z0ntZt110_7", "tsf1.png"),
        episode("פרק 7", "1Ymx5zil-aBBNH77yEhVwHhUaantmcA8h", "tsf1.png"),
        episode("פרק 8", "1KT6dDH3k9Ye13pKxarqztlTd0JYZfWSX", "tsf1.png"),
        episode("פרק 9", "1Qe99zYh0Nn6-9qPb3bgSdLmOn1_x7Wn8", "tsf1.png"),
        episode("פרק 10", "1bclh23QFusb0tUPQWed6eqI6rfRA29aq", "tsf1.png"),
        episode("פרק 11", "12U8BtVpzx7UiknGLrEl_FgFvfwr1mqi9", "tsf1.png"),
        episode("פרק 12", "1EhB5t03clS4bF0-RfTVcf2A0Ahvfa3VF", "tsf1.png"),
        episode("פרק 13", "1iABzmI3QAdVBFC-IvexCMQY20xmCq5GA", "tsf1.png"),
        episode("פרק 14", "1ER_utCWpc6TfbxK40cggW31THF8MhSpt", "tsf1.png"),
        episode("פרק 15", "1Ttk3UL1kFXNzYJUpD61NURCMTIJtuae3", "tsf1.png"),
        episode("פרק 16", "1X71gUsBhJtezYlJknMKHnz8x3hUdi2Vj", "tsf1.png"),
        episode("פרק 17", "1X71gUsBhJtezYlJknMKHnz8x3hUdi2Vj", "tsf1.png"),
        episode("פרק 18", "1HO42GsUOwp6R4sz6rbDdmhe219GoCGso", "tsf1.png"),
        episode("פרק 19", "1Fbu4IYyLZ5mSRQPSt6zgt0um4ra0Ng_h", "tsf1.png"),
        episode("פרק 20", "1Kq-J5fBAM9KlYnf1_nK0zA-VL3kZkrj6", "tsf1.png")
      ]),
      season("עונה 2", "tsf2.png", [
        episode("פרק 1", "1Y9b9ZmuRq_svh0pE-5uNUTHOFpol4EHX", "tsf2.png"),
        episode("פרק 2", "10CaRHCjgBMmmwnqmpRFtQsB5Bvq5uzd8", "tsf2.png"),
        episode("פרק 3", "1pYvMHMWfmIApzEiRrnMXatKulR5YMguL", "tsf2.png"),
        episode("פרק 4", "1LNvzpkGh6GJNltQFatr8l3NAuQskd1LJ", "tsf2.png"),
        episode("פרק 5", "1P_SoisLtg4klG4lTwAZxwLV1usOFdp6r", "tsf2.png"),
        episode("פרק 6", "1YO2M-0eoX-po-Hq2l91hsydznxW_RwiJ", "tsf2.png"),
        episode("פרק 7", "1xIkYXC5TIAyxv6rLaMpS3db8tnDotGx5", "tsf2.png"),
        episode("פרק 8", "1xZZzS7M9Vaq3hrc025-7WjfwGZMpIAEL", "tsf2.png"),
        episode("פרק 9", "1sAZz0BLoSn_9yPHOzdK1KVAQyzXnQS2Q", "tsf2.png"),
        episode("פרק 10", "1Gh6KC_wALojUh2iUeRa49jdh9iI4fhNL", "tsf2.png"),
        episode("פרק 11", "1Jmxzxajk4zQtPlw1zNcJd_soRWK1YUUe", "tsf2.png"),
        episode("פרק 12", "1qhS6LirpUorwLvWhouwuQbplIcHED6aB", "tsf2.png"),
        episode("פרק 13", "1FduDIXPKViwsGVZ1sJ0fZO9rO13vuHHO", "tsf2.png"),
        episode("פרק 14", "13PmLiTb_5Ki2mtK5pApJ1VdjdQ0xlfx5", "tsf2.png"),
        episode("פרק 15", "1ZWy2CGP1iqQZziA0oTcorPgMOcE-nm2m", "tsf2.png"),
        episode("פרק 16", "1CWluOSC8npxcM_oAYZ_Il1j5GEgLpxjM", "tsf2.png"),
        episode("פרק 17", "1rtH4V6JWO2a2Z2TT6pSViukVvtkcF8rk", "tsf2.png"),
        episode("פרק 18", "1xvE6y7_6vZ2URphkZqL9EnI517m3u2Eh", "tsf2.png"),
        episode("פרק 19", "1BLy0phn0KLYv_Z2q0rdZ7wcYhnGJrcO6", "tsf2.png"),
        episode("פרק 20", "1_2Kg53EuCQV57yyPvrqrdzYjGsfvEO5S", "tsf2.png")
      ])
    ]
  }
];
