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

  { title: "ספיידרמן: ממד העכביש (Spider-Verse)", id: "1lMKHarLFY0OQKlg4IbrSJYBonG_Btw_u", image: "assets/spiderman.png" },
  { title: "מפלצות בשלג (Smallfoot)", id: "126Co8FEr23opmtNA1IbbqwOsPt8lJ_RI", image: "assets/smallfoot.png" },
  { title: "מעבר ליער (Over the Hedge)", id: "10AnEsLe9T85wtnia_rmqjgOBWX4iD7S7", image: "assets/hedge.png" },

  { title: "מדגסקר 3 (Madagascar 3)", id: "1Q3o-UgYzJF-FJmRlNP5Qm7BjYjmKOHVX", image: "assets/madagascar3.png" },
  { title: "ג'ומנג'י 2 (Jumanji)", id: "1jNBR1okdeR7Is8fQ8A3w09p4nbO5VWXP", image: "assets/jumanji.png" },

  { title: "גנוב על הירח 1 (Despicable Me)", id: "1z4DiNm90KsypotPeUM56bM9GPMklGjNj", image: "assets/gro.png" },
  { title: "אנגרי בירדס 2 (Angry Birds 2)", id: "1aayN5secOwpHVqGkQUWwBMJ0QctRVK0q", image: "assets/angrybirds.png" },

  { title: "אמיצה (Brave)", id: "15F-npGs53Cbvmh58mWIIwDLQU1Qv0Xck", image: "assets/brave.png" },
  { title: "הדרקון הראשון שלי 3 (Hidden World)", id: "1Aa_2OimQvI98aM-_4XsUBmsdf1dHE4fD", image: "assets/dragon.png" },

  { title: "משפחת אדמס (Addams Family)", id: "1xB516Q6f1lznZBoCrGCVksxljvcP7rLr", image: "assets/addams.png" },
  { title: "בית ספר למפלצות (School Monsters)", id: "1VhBw1sANIpblJB_3CMbo11bzNG2Y_nZ5", image: "assets/monsters.png" },

  { title: "מפלצת של מלון 1 (Hotel Transylvania)", id: "1JTlotR3RJHV-814o482pcITFcqy0yWxI", image: "assets/hotel1.png" },
  { title: "מפלצת של מלון 2 (Hotel Transylvania 2)", id: "1LSNHiSL72qSPgWGCgzHghqQEM7BIe9z1", image: "assets/hotel2.png" },

  { title: "פלונטר (Tangled)", id: "1aj2sXv3ZvzfeaGb1mDcCh0d3F-OH61n5", image: "assets/tangled.png" },
  { title: "שחקי אותה בוסית (Like a Boss)", id: "17XZWPoNEViTkmjIqMrkuXM6WSy51Qk0q", image: "assets/boss.png" },

  { title: "דוליטל (Dolittle)", id: "11rKfis-VWzdDxxmdcLpJysRkljFLxvws", image: "assets/dolittle.png" },
  { title: "האביר האפל עולה (Batman)", id: "1kYhHxegIQO8sYhkTiBYa0CVF2a43T6Gl", image: "assets/batman.png" },
  { title: "בלגאן בחווה (Barnyard)", id: "1A7B_L-wkIS-xQ9vjqeFp9YC4f8vd44VG", image: "assets/barnyard.png" }
];

const series = [
  {
    name: "צפוף",
    image: "assets/tsf1.png",
    seasons: [
      {
        name: "עונה 1",
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
          { title: "פרק 10", id: "1bclh23QFusb0tUPQWed6eqI6rfRA29aq" }
        ]
      },
      {
        name: "עונה 2",
        episodes: [
          { title: "פרק 1", id: "1Y9b9ZmuRq_svh0pE-5uNUTHOFpol4EHX" },
          { title: "פרק 2", id: "10CaRHCjgBMmmwnqmpRFtQsB5Bvq5uzd8" },
          { title: "פרק 3", id: "1pYvMHMWfmIApzEiRrnMXatKulR5YMguL" }
        ]
      }
    ]
  }
];
