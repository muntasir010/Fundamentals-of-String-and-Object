// slice mane tukra kra. kono text k slice krte hole apnar je je index projonto darkar oi index select krte hbe tahle slice hoye jabe. 
const address = "Andhorkilla";
const part = address.slice(2,5);
console.log(part);


// split holo kono ekta sentence k vag kra.
const sentences = 'I am good and hardworking person';
// console.log(sentences.split(''));
// console.log(sentences.split(' '));
// console.log(sentences.split('a'));


const friendsStr = 'rahim, kahim, dahim, lahim, sahim, mahim';
const friends = friendsStr.split(',');
// console.log(friends);

const realFriends = [ 'rahim', ' kahim', ' dahim', ' lahim', ' sahim', ' mahim' ];
console.log(realFriends.join());
console.log(realFriends.join('-'));
console.log(realFriends.join('|'));