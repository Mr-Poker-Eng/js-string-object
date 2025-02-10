const address = 'andorkilla';
const part = address.slice(5,10);
// console.log(part);

const sentence = 'I am a good and hardworking person.';
// console.log(sentence.split(' '));
// console.log(sentence.split('a'));


const friendsStr = 'rahim, kahim, dahim, lahim, fahim, sahim';
const friends = friendsStr.split(',');
console.log(friends);
const realFriend = [ 'rahim', 'kahim', 'dahim', 'lahim', 'fahim', 'sahim' ];
console.log(realFriend.join());
console.log(realFriend.join('|'));
console.log(realFriend.join('-'));