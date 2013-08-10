var filetypes = ["pdf", "ppt", "doc", "docx", "pptx", "xls", "xlsx"];

$jpcc(document).ready(function($) {

  $("a").attr("onClick", function() {
    if (this.host == Document.domain) {         // ignore external links
      pathStartIndex = this.host.length + 7;    //ignore first part of the href
      var path = this.href.substr(pathStartIndex);
      var ext = path.substr(path.lastIndexOf(".") + 1).toLowerCase();
      if ($.inArray(ext, filetypes) > -1) { // -1 means item not in array
        return "_gaq.push(['_trackPageview', '" + path + "']);"
      }
    }
  });

})
