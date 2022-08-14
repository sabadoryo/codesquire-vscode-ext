const vscode = require('vscode')

async function openInUntitled(content, language) {
    const document = await vscode.workspace.openTextDocument({
        language,
        content,
    });
    vscode.window.showTextDocument(document);
}

module.exports = openInUntitled;