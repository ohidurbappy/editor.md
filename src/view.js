let fs=require('fs')





function load_file(filename){
    if (fs.existsSync(filename)){
        let content=fs.readFileSync(filename,'utf8')
        return content
    }else{
        console.log("ERROR: File Doesn\'t Exist")
        return 0
    }
}

