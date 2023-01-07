const  path = require('path'),
       fs = require('fs'),
       os = require('os'),
       request = require('request');

// REPO ////////////////////////////////////////////////////////////////////////
var {app,ipcMain,BrowserWindow,viewtools} = require('./bin/electronrepo/tools/box/electronviewtool.js');
var {loginroutes}=require('./bin/electronrepo/gui/js/modules/login.js');
////////////////////////////////////////////////////////////////////////////////

//Midleware //////////////////////////
var controlsroot = path.join(__dirname,'/controllers/'); //dir path to views
var appset = require('./app/settings.json');//appset.dev.on = true;
var au = require('./bin/back/appuser.js'); //initialize the app user object
var {navroutes}=require('./bin/routes.js');
/////////////////////////////////////

var mainv; //holds the main BrowserWindow
var defw = 1080;  //Default window width
var defh = 750;   //Default window height


require('dns').resolve('www.google.com',(err)=>{ //test for internet connection
  if(err){//is not connected
  }
  else{//is connected
  }
});

/* LANDING PAGE
    The landing page will more often be the login screen
    This login screen can be skipped by editing the
    appset.dev.on = true. This will default to main.html
    If the developer wants to skip to a page, the
    appset.dev.page = '' can have a desired page file
    name
*/

app.on('ready',(eve)=>{
  if(!appset.dev.on){
    console.log(au.auser);
    if(appset.users[au.auser.uname]==undefined){
      mainv = viewtools.loader(controlsroot + 'login.html',defw,defh,false,false,'hidden');
    }else{
      try{//attempt to open users default page
        mainv = viewtools.loader(controlsroot + appset.groups[au.auser.config.group].main,defw,defh,false,false,'hidden');
      }catch{mainv = viewtools.loader(controlsroot + 'login.html',defw,defh,false,false,'hidden');}
    }
    mainv.on('close',(eve)=>{ //any app closing code below
    });
  }else{appset.dev.page==''?mainv = viewtools.loader(controlsroot+'main.html',defw,defh,false,false,false):mainv=viewtools.loader(controlsroot+appset.dev.page,defw,defh,false,false)}
});

/* APP login
    data:{
      user:'',
      pswrd:''
    }

    Recieve a user name and password from login form AND
    attach the application auth code to it. The api is
    queried to check both the auth code and the user
    credentials.

    If the access/login to the api is a success, the
    appset.users is checked for a match to the user name.

    If the user is found in appset.users, that users group
    view (appset.groups.main) 'dash' is loaded
*/
ipcMain.on(loginroutes.submit,(eve,data)=>{
  if(au.SETUPappuser(appset.users,data.uname,data.pswrd)){ //check to see if username matches app settings
    viewtools.swapper(mainv,controlsroot + appset.groups[au.auser.config.group].main,defw,defh);
  }else{eve.sender.send(loginroutes.submit,{status:false,msg:'Not an app user',user:null})}
});

// Titlebar Request
ipcMain.on('view-minimize',(eve,data)=>{
  BrowserWindow.getFocusedWindow().minimize();
});

// Request login screen
ipcMain.on(navroutes.gotologin,(eve,data)=>{
  au.RESETappuser();
  console.log('login')
  viewtools.swapper(mainv,controlsroot + 'login.html',defw,defh);
});
