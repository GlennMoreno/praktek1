let BeratMadan = 60;
let TinggiMadan = 1.6;

let BeratJoan = 64;
let TinggiJoan = 1.65;

const MadanIMT = BeratMadan / TinggiMadan ** 2;
const JoanIMT = BeratMadan / TinggiMadan ** 2;

const MadanHigherIMT = MadanIMT>JoanIMT
alert('IMT Madan:' + MadanIMT);
alert('IMT Joan:' + JoanIMT);
alert('Nilai IMT Joan(28.3) Lebih tinggi dari joan (23.9)' + MadanHigherIMT);

console.log('IMT Madan: ' + MadanIMT);
console.log('IMT Joan: ' + JoanIMT);
console.log('Nilai IMT madan')


console.log 