const tutorials = [
  'what does the this keyword mean?', 'What is the Constructor OO pattern?','implementing Blockchain Web API','The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
// hazina harf lwl ndiro Maj index 0 rah ymdli kol awl hrf mn klmt li kynin fi jomla mb3d lzmni slice bah nhz ba9i string b3sdha ndirlhom join kmlin
const titleCased = () => {
  return tutorials.map(tutorial =>{
    return tutorial.split(" ").map(word => word.charAt (0).toUpperCase()+ word.slice(1)).join(" ");
  } )
}
