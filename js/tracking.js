var filetypes = ["pdf", "ppt", "doc", "docx", "pptx", "xls", "xlsx"];
var domain = 'www.womenandchildrenfirst.org.uk';

$jppc(document).ready(function($) {

  $("a").attr("onClick", function() {
    if (this.host == domain) {              // ignore external links
      pathStartIndex = domain.length + 7;   // ignore first part of the href
      var path = this.href.substr(pathStartIndex);
      var ext = path.substr(path.lastIndexOf(".") + 1).toLowerCase();
      if ($.inArray(ext, filetypes) > -1) { // -1 means item not in array
        return "_gaq.push(['_trackPageview', '" + path + "']);"
      }
    }
  });

})
