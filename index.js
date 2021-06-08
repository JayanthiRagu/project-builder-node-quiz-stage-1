var fs=require('fs');
var path=require('path')
var fetchedData;
//fs.appendFileSync('question.json',userdata.question);
fs.readFile(path.join(__dirname,'question.js'),'utf8',function(err,data){
    if(err)
    {
        throw err;
    }
    console.log("File is read");
    fetchedData=data;
    fs.writeFile(path.join(__dirname,'question.json'),JSON.stringify(data),function(err){
        if(err)
        {
            throw err;
        
         }
         console.log("File written as stringfy");
    });
});
