/**
 * Listing the Links in a Document
 */
function listlinks(d)
{
    var newwin = window.open("", "linklist", 
                    "menubar,scrollbars,resizable,width=600,height=300");
    newwin.document.open("text/plain");
    for (var i = 0; i < d.links.length; i++)
        newwin.document.writeln(d.links[i]);
    newwin.document.close();
}