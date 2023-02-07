const prompt = require('prompt-sync')();
const { FILE } = require('dns');
const fs = require('fs');
const path = require("path")

console.log("===================================================")
console.log("    Selamat Datang di Convert Rivaldi     ")
console.log("  Disini akan bertugas untuk Convert data ")
console.log("  Mermbuat file txt dan JSON dan juga merubahnya ")
console.log("===================================================")
console.log("pilih menu yang diinginkan ")
console.log("help")
console.log("json to txt ")
console.log("txt to json")

const choose = prompt('what is your options? ');

switch(choose){
  case "help":
    help()
    break;
  case "json to txt":
    json()
    break;
  case "txt to json":
    txt()
    break;
  default:
    txt()
}



function help(){
  console.log("Selamat datang di fungsi help ")
  console.log('ini CLI berguna untuk merubah data dan berguna untuk membuat file JSON dan Txt')
  console.log("Apabila ingin merubah data dari JSON ke TXT masukan perintah 'json to txt")
  console.log("Apabila ingin merubah data dari TXT ke JSON masukan perintah 'txt to json")
  console.log("apabila tidak maka akan diubah menjadi txt")
}


function json(){
  const file = prompt('Masukan file folder kedalam ini ');
  console.log(file)

  const nameFile = prompt("nama File yang akan dibuat? ")
  

  fs.readFile(`${file}`, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

    let saveData = data
    // console.log(saveData)

    fs.writeFile(`${nameFile}.txt`, saveData , function (err) {
        if (err) throw err;
        console.log('File Berhasil dibuat');
    });
  
  });

}


function txt(){
  const file = prompt('Masukan file folder kedalam ini ');
  console.log(file)

  const nameFile = prompt("nama File yang akan dibuat? ")
  

  fs.readFile(`${file}`, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

    let saveData = data
    // console.log(saveData)

    fs.writeFile(`${nameFile}.json`, saveData , function (err) {
        if (err) throw err;
        console.log('File Berhasil dibuat');
    });
  
  });

}











// if(name){
//     console.log(`Hey there ${name}`);
// }else{
//     console.log("cumi lu")
// }
// const { ext } = path.parse('./var/data.txt');
// console.log(ext)


// fs.readFile('./var/data.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });

// const namaFile = "Dendam"

// // writeFile function with filename, content and callback function
// fs.writeFile(`${namaFile}.json`, 'Learn Node FS module', function (err) {
//     if (err) throw err;
//     console.log('File is created successfully.');
// });

