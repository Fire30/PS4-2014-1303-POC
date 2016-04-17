function debug_log(msg)
{
    $.ajax({
     url: '/debug/log/',
     type: 'POST',
     contentType: 'text/html',
     data: msg,
     processData: false,
     async: false
  });
}

function debug_bin(bin)
{
    $.ajax({
     url: '/debug/bin/',
     type: 'POST',
     contentType: 'application/octet-stream',
     data: bin,
     processData: false,
     async: false
  });
}
