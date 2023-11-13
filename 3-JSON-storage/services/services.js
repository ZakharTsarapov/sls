import fs from 'fs';
import path from 'path';
import axios from 'axios';

async function getFile(path) {
    let result = null
    fs.readdir('../temp').find((file)=> {
        const newFile = fs.readFile('../temp' + file, "utf-8")
        const parsFile = JSON.parse(newFile)

        if(parsFile.name === path) {
            result = parsFile.data
            return file;
        }
    })
    return result;
}

async function writeFile(path) {
    try {
        const { data } = await axios.get(path)
        const isExist = await checkFile(path, data)
        if(isExist) 
        return "File was rewrited" 

        const fileName = Date.now().toString();
        const filePath = path.resolve("temp", fileName + ".txt")
        const fileToWrite = {
            name: path,
            data
        } 
        fs.writeFile(filePath, JSON.stringify(fileToWrite))
        return "success"
    } catch(e) {
            return "fail: " + e.message
    }
}

async function checkFile(path, data) {
    let result = false
    fs.readdir("../temp").find((file) => {
        const newFile = fs.readFile('../temp' + file, "utf-8")
        const parsFile = JSON.parse(newFile)

        if(parsFile.name === path) {
            const filePath = path.resolve("temp", file)
            parsFile.data = data
            fs.writeFile(filePath, JSON.stringify(parsFile))
            result = true
            return file
        }
    })
    return result
}

export default {
    getFile,
    writeFile
}