const vscode = require('vscode');
const codesquire = require('./src/codesquire')

function activate(context) {

	let disposable = vscode.commands.registerCommand('codesquire-beta.helloWorld', function () {
		
		vscode.window.showInformationMessage('Hello VS Code');
	});

	let d2 = vscode.commands.registerTextEditorCommand('codesquire-beta.suggestScript', codesquire);

	context.subscriptions.push(disposable);
	context.subscriptions.push(d2);

}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
