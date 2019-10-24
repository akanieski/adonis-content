'use strict'

const fs = require('fs')

class FileUploadController {
  constructor ({ socket, request }) {
    this.socket = socket
    this.request = request
  }


  onMessage (message) {
    var rawBinary = Buffer.from(message.data.substr(message.data.indexOf(',')+1), 'base64')

    console.log('Received file with length of ' + message.size)
    
    // Write the file to the file system .. or in your application you can write to the db
    fs.writeFileSync('./public/uploads/' + message.name, rawBinary)

    this.socket.broadcastToAll('NewFileUploaded', {... message, data: null})
  }

}

module.exports = FileUploadController
