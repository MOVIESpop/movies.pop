// --------------------- data.js פנימי ---------------------
const movies = [
  // Shrek Trilogy
  { id: "1eWgn6V10lt4YcsdVFmc9YLv7hNVDPMFZ", title: "Shrek 3", image: "https://via.placeholder.com/200x300?text=Shrek+3" },
  { id: "1CgRPoW8t9tWSZBKGcadxKaYAf013EXWW", title: "Shrek 2", image: "https://via.placeholder.com/200x300?text=Shrek+2" },
  { id: "1Au4tpzq7rE8SkFKAlNfSOFF5L5zqzkBX", title: "Shrek 1", image: "https://via.placeholder.com/200x300?text=Shrek+1" },

  // Kung Fu Panda
  { id: "11azqduzJc6Z-d-z_Vm2cA9yTQ3Pe0zeDL-", title: "Kung Fu Panda", image: "https://via.placeholder.com/200x300?text=Kung+Fu+Panda" },
  { id: "1pFqf6RshriTtVYGvzvTxp4pN41P36VbH", title: "Kung Fu Panda 2", image: "https://via.placeholder.com/200x300?text=Kung+Fu+Panda+2" },
  { id: "1PF-ISOLArYVZ-lfwmuAUymBi1EeapHNZ", title: "Kung Fu Panda 3", image: "https://via.placeholder.com/200x300?text=Kung+Fu+Panda+3" },
  { id: "1n_ysnrnhmrIie0Y0KNX7pig6KxX-e0Zd", title: "Kung Fu Panda 4", image: "https://via.placeholder.com/200x300?text=Kung+Fu+Panda+4" },

  // Zootropolis
  { id: "14_z-C_3QL3rlmxP_JI8H4Ew_tj8M0FjQ", title: "Zootropolis 1", image: "https://via.placeholder.com/200x300?text=Zootropolis+1" },
  { id: "1HrTPtCnqi9PPmlbMZ6Zl7dLO_Qs4dUMq", title: "Zootropolis 2", image: "https://via.placeholder.com/200x300?text=Zootropolis+2" },

  // Baby Day Out
  { id: "1vUOCa9RC_nk12vieCVSNCuGYS1TeZF22", title: "Baby Day Out", image: "https://via.placeholder.com/200x300?text=Baby+Day+Out" },

  // The Willoughby Family
  { id: "1bjvvbMhET-88_02I3cg1tOTQJqGSHsjM", title: "The Willoughby Family", image: "https://via.placeholder.com/200x300?text=Willoughby+Family" },

  // Ted 1 & 2
  { id: "1sKS0jxKQk3BnOpiPRqWoAYZo1OTJ-NZA", title: "Ted 1", image: "https://via.placeholder.com/200x300?text=Ted+1" },
  { id: "11HmYmdOPab3j8ui7hNjOVz68XMm6Ot62", title: "Ted 2", image: "https://via.placeholder.com/200x300?text=Ted+2" },

  // Spider-Man: Into the Spider-Verse
  { id: "1lMKHarLFY0OQKlg4IbrSJYBonG_Btw_u", title: "Spider-Man: Into the Spider-Verse", image: "https://via.placeholder.com/200x300?text=Spider-Verse" },

  // Smallfoot
  { id: "126Co8FEr23opmtNA1IbbqwOsPt8lJ_RI", title: "Smallfoot", image: "https://via.placeholder.com/200x300?text=Smallfoot" },

  // Over the Hedge
  { id: "10AnEsLe9T85wtnia_rmqjgOBWX4iD7S7", title: "Over the Hedge", image: "https://via.placeholder.com/200x300?text=Over+the+Hedge" },

  // Madagascar 3
  { id: "1Q3o-UgYzJF-FJmRlNP5Qm7BjYjmKOHVX", title: "Madagascar 3", image: "https://via.placeholder.com/200x300?text=Madagascar+3" },

  // Jumanji 2
  { id: "1jNBR1okdeR7Is8fQ8A3w09p4nbO5VWXP", title: "Jumanji: Next Level", image: "https://via.placeholder.com/200x300?text=Jumanji+2" },

  // Gro 1
  { id: "1z4DiNm90KsypotPeUM56bM9GPMklGjNj", title: "Despicable Me 1", image: "https://via.placeholder.com/200x300?text=Gro+1" },

  // Angry Birds 2
  { id: "1aayN5secOwpHVqGkQUWwBMJ0QctRVK0q", title: "Angry Birds 2", image: "https://via.placeholder.com/200x300?text=Angry+Birds+2" },

  // Brave
  { id: "15F-npGs53Cbvmh58mWIIwDLQU1Qv0Xck", title: "Brave", image: "https://via.placeholder.com/200x300?text=Brave" },

  // Dragons: The Hidden World
  { id: "1Aa_2OimQvI98aM-_4XsUBmsdf1dHE4fD", title: "Dragons: The Hidden World", image: "https://via.placeholder.com/200x300?text=Dragons+Hidden+World" },

  // The Addams Family
  { id: "1xB516Q6f1lznZBoCrGCVksxljvcP7rLr", title: "The Addams Family", image: "https://via.placeholder.com/200x300?text=Addams+Family" },

  // School Monsters
  { id: "1VhBw1sANIpblJB_3CMbo11bzNG2Y_nZ5", title: "School Monsters", image: "https://via.placeholder.com/200x300?text=School+Monsters" },

  // Hotel Monster 1 & 2
  { id: "1JTlotR3RJHV-814o482pcITFcqy0yWxI", title: "Hotel Monster 1", image: "https://via.placeholder.com/200x300?text=Hotel+Monster+1" },
  { id: "1LSNHiSL72qSPgWGCgzHghqQEM7BIe9z1", title: "Hotel Monster 2", image: "https://via.placeholder.com/200x300?text=Hotel+Monster+2" },

  // Plonter 1
  { id: "1aj2sXv3ZvzfeaGb1mDcCh0d3F-OH61n5", title: "Plonter 1", image: "https://via.placeholder.com/200x300?text=Plonter+1" },

  // Like a Boss
  { id: "17XZWPoNEViTkmjIqMrkuXM6WSy51Qk0q", title: "Like a Boss", image: "https://via.placeholder.com/200x300?text=Like+a+Boss" },

  // Dolittle
  { id: "11rKfis-VWzdDxxmdcLpJysRkljFLxvws", title: "Dolittle", image: "https://via.placeholder.com/200x300?text=Dolittle" },

  // Batman
  { id: "1kYhHxegIQO8sYhkTiBYa0CVF2a43T6Gl", title: "Batman: Dark Knight", image: "https://via.placeholder.com/200x300?text=Batman" },

  // Barnyard
  { id: "1A7B_L-wkIS-xQ9vjqeFp9YC4f8vd44VG", title: "Barnyard", image: "https://via.placeholder.com/200x300?text=Barnyard" },

  // … הוספתי גם סדרות עם פרקים ניתן להמשיך באותו סגנון
];
