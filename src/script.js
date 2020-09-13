
document.addEventListener('drop', (event) => { 
    event.preventDefault(); 
    event.stopPropagation(); 
  
    for (const f of event.dataTransfer.files) { 
        // Using the path attribute to get absolute file path 
        console.log('File Path of dragged files: ', f.path) 
      } 
}); 
  
document.addEventListener('dragover', (e) => { 
    e.preventDefault(); 
    e.stopPropagation(); 
  }); 
  
document.addEventListener('dragenter', (event) => { 
    console.log('File is in the Drop Space'); 
}); 
  
document.addEventListener('dragleave', (event) => { 
    console.log('File has left the Drop Space'); 
}); 



const electron = require('electron') 
const path = require('path') 
// Importing the app module using Electron remote 

const app = require('electron').remote.app
  
var about = document.getElementById('about'); 
about.addEventListener('click', (event) => { 
    app.setAboutPanelOptions({ 
        applicationName: 'Editor.md', 
        applicationVersion: '1.0.0', 
        copyright: 'ohidur©2020', 
        credits: 'Ohidur.com', 
        authors: ['Ohidur Rahman Bappy'], 
        website: 'https://www.ohidur.com/', 
        iconPath: path.join(__dirname, '../assets/icon.png'), 
    }); 
    
    app.showAboutPanel(); 
});


// arguments=electron.remote.getGlobal('sharedObject').prop1;
// console.log(arguments);
if (electron.remote.process.argv >= 2) {
    let filePath = process.argv[1];
    //open, read, handle file
    console.log(filePath);
}