const request = require('./http')
const vscode = require('vscode');
const openInUntitled = require('./openUntitled')

const backendParams = {
    host: 'localhost',
    port: 3000,
    method: 'GET',
    path: '/api/service'
}

const progressOptions = {
    cancellable: false,
    location: vscode.ProgressLocation.Notification,
    title: "Fetching data from CodeSquare",
};


module.exports = async (editor, edit) => {
    let cursorPoistion = editor.document.offsetAt(editor.selection.active)
    let selectedText = editor.document.lineAt(editor.selection.active.line).text
    const selection = editor.selection;

    let response = await vscode.window.withProgress(progressOptions, async (progress) => {
        return await request(backendParams)
    })

    // editor.edit((editBuilder) => {
    //     editBuilder.replace(selection, response.data)
    // })

    // openInUntitled(response.data, 'javascript')
    
    // console.log(response)
}