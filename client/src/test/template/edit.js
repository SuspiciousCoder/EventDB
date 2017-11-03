$("#form").submit(function(e) {
    event = {
      title1 : $("#title1").val(),
      title2 : $("#title2").val(),
      time : $("#time").val(),
      description : $("#description").val()
    }

    putEvent(JSON.stringify(event))

    e.preventDefault()
})

function initEditor() {
    id = globalStorage['current-id'] 
    if (id != undefined) {
        e = globalStorage['event-list'][id]
        $("#title1").val(e.title1)
        $("#title2").val(e.title2)
        $("#time").val(e.time)
        $("#description").val(e.description)
        $('#mode').text("Update Event")
        $('#submit').text('Update')
    } else {
        $('#mode').text("New Event")
    }
}

initEditor()