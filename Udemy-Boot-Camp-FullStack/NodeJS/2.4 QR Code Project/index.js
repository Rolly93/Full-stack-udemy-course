
import fs from 'fs';
import qr from 'qr-image';
import inquirer from 'inquirer';
/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/


inquirer.prompt([{
    name : 'link',
    message : 'ingrese su link\n'
},
{
    name:'fileName',
    message:'Please name you file\n'
}
]).then((res)=>{
      
    const link = res.link;
    const myFile= res.fileName;
    fs.writeFile(`./${myFile}.txt`,link,(err) =>{
        if (err) 
            {
                throw err
            
             }else{
           fileReader(myFile)
             }
    })
});

function fileReader (file){

    fs.readFile(`./${file}.txt`,'utf-8',(err,link)=>{
        if(err)
            {console.log(err) ; }
        else{

            qr_generator(link , file);
            console.log(`File Open:\n ${link}`);
        }
    })
}

function qr_generator (link , file){
    var qr_svg = qr.image(link,{type : 'png'});
    qr_svg.pipe(fs.createWriteStream(`./${file}.png`));
    var svg_string = qr.imageSync(link,{type:'png'});
}
