var filetypes = ["pdf", "ppt", "doc", "docx", "pptx", "xls", "xlsx"]

$jppc(document).ready(function() {
  $jppc("a").attr("onClick", function() {
    if (this.href.substr(0,7) != "http://" && this.href.substr(0,8) != "https://" ) { //ignore off-site links
      var url = this.href.substr(this.href.lastIndexOf("/") + 1);
      //var url = this.href; // swap for this to get full paths
      var ext = url.substr(url.lastIndexOf(".") + 1).toLowerCase();
      if ($jppc.inArray(ext, filetypes) > -1) {
        return "_gaq.push(['_trackPageview', '" + url + "']);"
      }
    }
  })
})