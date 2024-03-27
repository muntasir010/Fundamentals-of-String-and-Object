const school = 'Raj UK Uttara Model High School';
// console.log(school);
// console.log(school.toLowerCase());
// console.log(school.toUpperCase());

const subject = 'Chemistry';
const book = 'chemistry';


// jodi case lower and upper thake tahle compare krar jonno 2 take uppercase othoba 2 take lowercase e nie jete hbe
if(subject.toLowerCase() === book.toLowerCase()){
    console.log('I am reading book aibar exam e pathai dimu');
}
else{
    console.log('Huda hudai pristha ultai, ar vat khawar jonno opekha kri')
}


// jodi word er modhe white space pde jay tahle oita dur krar somoy compare er modhe trim() use krte hbe tahle white space chle jabe.

const drink = 'water';
const liquid = '   water  ';

if(drink.trim() === liquid.trim()){
    console.log('water er opr name jibon');
}
else{
    console.log('Somudrer water direct khawa valo na');
}