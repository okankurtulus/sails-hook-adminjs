/**
* AdminJS Panel Config
* (sails.config.adminJSPanel)
*
* These options is used to configure the params for the custom hook: adminjs-panel.
*
* > This file is mainly useful for configuring the parameters that used to generate
* > the admin panel.
*
* For all available options, see:
* https://github.com/okankurtulus/sails-hook-adminjs-panel
*/

module.exports = {
  adminJSPanel: {

    /***************************************************************************
    | Most of the time, the following options does not not be changed.
    | However, you are free to change and make it fit to your project constraints.
    ***************************************************************************/
   
    rootPath: '/adminPanel',      //The path where the admin page will serve, ex: localhost:1337/adminPanel
  },
};
