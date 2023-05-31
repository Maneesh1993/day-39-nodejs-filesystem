
const express = require('express')
const app = express()
// const fs=require("fs");

// const path = require('path');

// const dateObject = new Date();
//     console.log(dateObject)

// // fsPromises.rmdir(path[, options])
// fs.mkdir('./my_folder', function(err){
//     if (err) throw err;
//     console.log("folder created")
// })

// const dirpath=path.join(__dirname,"my_folder");

// fs.writeFileSync(dirpath+"/date-time.txt",`${dateObject}`,function(err){
//     if(err) throw err;
//     console.log("file created successfully")
// })
const fs=require("fs");

    const path = require('path');
    fs.mkdir('./my_folder', function(err){
        if (err) throw err;
        console.log("folder created")
    }
    )


app.get('/current-date-time', (req, res) => {
res.json("current-time-stamp file created")

    const dateObject = new Date();
    console.log(dateObject);

// fsPromises.rmdir(path[, options])


const dirpath=path.join(__dirname,"my_folder");


fs.writeFileSync(dirpath+"/date-time.txt",`${dateObject}`,function(err){

   
    

    if(err) throw err;
    console.log("file created successfully")
})
})
// fs.appendFile('date-time.txt', , (err) => {
//     if (err) throw err;
//     console.log('The "data to append" was appended to file!');
//   });


app.listen(4200)




