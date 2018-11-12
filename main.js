const fs = require('fs');
const path = require('path');

module.exports = promptAnswers => {
    
    const mainDirectoryFolders = [
        'factory',
        'reports'
    ];
        
    const factoryFolders = [
        'originalZip',
        'processed',
        'unzipped',
        'uploadZip'
    ];
        
    // put the needed folders in if they don't already exist
    mainDirectoryFolders.forEach(folder => {
        if (!fs.existsSync(path.resolve(folder))) {
            fs.mkdirSync(path.resolve(folder));
            console.log(`Made folder: ${folder}`);
        }
    });
        
    factoryFolders.forEach(folder => {
        if (!fs.existsSync(path.resolve(path.join('factory', folder)))) {
            fs.mkdirSync(path.resolve(path.join('factory', folder)));
            console.log(`Made folder: ${folder}`);
        }
    });

    return promptAnswers;
};