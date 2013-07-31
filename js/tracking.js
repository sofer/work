var filetypes = ["pdf", "ppt", "doc", "docx", "pptx", "xls", "xlsx"];
var host = "blog.sofer.com";                    // remove
//var host = "http://www.womenandchildrenfirst.org.uk";

$jppc(document).ready(function() {
  $jppc("a").attr("onClick", function() {
    if (this.host == host) {                    // ignore external links
      pathStartIndex = host.length + 7;         //ignore first part of the href
      var path = this.href.substr(pathStartIndex);
      var ext = path.substr(path.lastIndexOf(".") + 1).toLowerCase();
      if ($jppc.inArray(ext, filetypes) > -1) { // -1 means item not in array
        return "_gaq.push(['_trackPageview', '" + path + "']);"
      }
    }
  })
})