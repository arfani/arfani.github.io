export const convLang = (lang: string) => {
  return {
    type: "convLang",
    lang,
  };
};

export const toggleDarkMode = () => {
  return {
    type: "toggleDarkMode",
  };
};

// const convertLang = (lang, dataLang) => {
//   return {
//     type: "convLang",
//     lang,
//     dataLang
//   };
// };

// export function convLang(lang) {
//   return dispatch => { // can return dispatch because of using middleware redux-thunk
//     if (lang === "english") {
//       fetch("https://restapi-cv.herokuapp.com/main")
//         .then(r => r.json())
//         .then(({data}) => dispatch(convertLang(lang, data.lang)))
//         .catch(err => console.log(err));
//     } else if (lang === "indo") {
//       fetch("https://restapi-cv.herokuapp.com/lang/indo")
//         .then(r => r.json())
//         .then(({data}) => dispatch(convertLang(lang, data)))
//         .catch(err => console.log(err));
//     } else if (lang === "sasak") {
//       fetch("https://restapi-cv.herokuapp.com/lang/sasak")
//         .then(r => r.json())
//         .then(({data}) => dispatch(convertLang(lang, data)))
//         .catch(err => console.log(err));
//     } else {
//       console.log("Language is not support yet!");
//     }
//   };
// }
