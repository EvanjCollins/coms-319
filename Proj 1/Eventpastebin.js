var url = 'proj-309-NN.cs.iastate.edu'

function getswitchUrl(){
  var url = ScriptApp.getService().getUrl();
  return url;
}

function switchPage(){
	  var urlswitch = ScriptApp.getService().getUrl();
      if (requestInfo.parameter && requestInfo.parameter['page'] == '2') {
        return HtmlService.createTemplateFromFile('FILE2').evaluate();
      }
      return HtmlService.createTemplateFromFile('FILE1').evaluate();
}
