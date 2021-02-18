var aku=20;
var kamu=15;

var benar = aku > kamu;
var salah = aku < kamu;

var hasil = benar && salah;
document.write(`${aku} && ${kamu} = ${hasil} <br/>`);

var hasil = benar || salah;
document.write(`${aku} || ${kamu} = ${hasil} <br/>`);

var hasil = benar | salah;
document.write(`${aku} | ${kamu} = ${hasil} <br/>`);
