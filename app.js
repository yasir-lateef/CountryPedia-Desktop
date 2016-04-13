var app = require('app'),
BrowserWindow = require('browser-window');

app.on('ready', function(){
	var mainWindow = new BrowserWindow({
		height : 600,
		width: 800,
		minHeight: 600,
		minWidth: 600,
		center: true,
		show : false,
		darkTheme : true,
		webPreferences : {
			webSecurity : false
		}
	});

	mainWindow.loadURL('file://'+ __dirname + '/src/views/index.html');
	mainWindow.show();
}); 