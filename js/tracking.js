var filetypes = ["pdf", "ppt", "doc", "docx", "pptx", "xls", "xlsx"];
var ids = ["cmp_like_container", "cmp_twitter_container", "cmp_google_container", "cmp_in_container"]
var host = "blog.sofer.com";                    // remove
//var host = "http://www.womenandchildrenfirst.org.uk";

$jppc(document).ready(function($) {

  $("a").attr("onClick", function() {
    if (this.host == host) {                    // ignore external links
      pathStartIndex = host.length + 7;         //ignore first part of the href
      var path = this.href.substr(pathStartIndex);
      var ext = path.substr(path.lastIndexOf(".") + 1).toLowerCase();
      if ($jppc.inArray(ext, filetypes) > -1) { // -1 means item not in array
        return "_gaq.push(['_trackPageview', '" + path + "']);"
      }
    }
  });

  $("#l").click(function(event) {
    alert("clicked: " + event.target.id);
  });

  
  $("div").click(function(event) {
    alert("clicked: " + event.target.id);
  });
/*
  $("body").on('click', '*', function() {
    alert("clicked: "); // + event.target.nodeName);
  });

/*
  for (var i = 0; i < ids.length; i++){
    $('#'+ids[i]).click(function() {
      alert('clicked'+ids[i])
    })
  }

/*
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
*/  
  
})

FB.Event.subscribe('edge.create', function(targetUrl) {
//_gaq.push(['_trackSocial', 'facebook', 'like', targetUrl]);
alert('facebook like');
});




