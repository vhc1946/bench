const $ = require('jquery');
var {ipcRenderer,BrowserWindow}=require('electron');
var {app,ipcMain,viewtools} = require('../bin/electronrepo/tools/box/electronviewtool.js');

var RROOT='../bin/repo/';
var Titlebar = require('../bin/electronrepo/gui/js/modules/vg-titlebar.js');
var {navroutes}=require('../bin/routes.js');

//  TITLE BAR //
try{
  document.getElementById(Titlebar.tbdom.info.username).innerText = JSON.parse(localStorage.getItem(usersls.curruser)).uname;
}catch{}

document.getElementById(Titlebar.tbdom.page.user).addEventListener('click',(ele)=>{//GOTO LOGIN
  ipcRenderer.send(navroutes.gotologin,'Opening Login Dash...');
});
