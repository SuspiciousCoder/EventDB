function readEvent(id) {

    e = globalStorage['event-list'][id]
    console.log(e)
    $("#title1").text(e.title1)
    $("#title2").text(e.title2)
    $("#time").text(e.time)
    $("#description").text(e.description)
}

readEvent(globalStorage['current-id'])

$('#delete').click(function(){
  id = globalStorage['current-id']
  deleteEvent(globalStorage['event-list'][id])
  navigate('home')
})
