globalStorage['token'] = null

$('#submitbutton').click(function(){
  var tokenstr = $('#username').val() + ':' + $('#password').val()
  token = btoa(tokenstr)
  var valid = authorize(token)

  if (!valid) {
    alert ('fehler beim anmelden')
    return
  }

  globalStorage['token'] = token
  
  home = 'view'
  navigate('home')
})
