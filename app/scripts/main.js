/* globals window, AIP, $ */
  'use strict';
  window.addEventListener('Agave::ready', function() {
    if(console){
        console.log('Agave has been initialized, do something');
        /* Remove this if you don't want to print the example */
          var appContext = $('[data-app-name="araport-cistome"]');
          AIP.displayDocs(appContext);
          
    }
  });
