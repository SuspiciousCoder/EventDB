function HtmlPreview(event) {
    html  = '<li>'
    html += '<a href="#" onclick=HtmlViewer("' + event.id  + '")>' + event.title1 + '</a></li>'
    return html
}


function PreviewList(list) {
    for (i in list) {
        $("#event-list").append(HtmlPreview(list[i]))
    }

    globalStorage['event-list'] = list
}

function HtmlViewer(id) {
    //dyn-ui
    globalStorage['current-id'] = id
    loadForm('view')
}

getList(PreviewList)