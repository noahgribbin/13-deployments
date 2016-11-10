(function(module) {
  var reposObj = {};

  reposObj.requestRepos = function(callback) {
    // NOTE: refactor this request into an $.get call
    $.when(
     $.get('/github/users/noahgribbin/repos', function(data){
       reposObj.allRepos = data;
       console.log(data);
     }),
     $.get('/github/users/noahgribbin/followers', function(data){
       reposObj.followers = data;
     })
    ).done(callback);
  };

  reposObj.withTheAttribute = function(attr) {
    return reposObj.allRepos.filter(function(aRepo) {
      return aRepo[attr];
    });
  };

  module.reposObj = reposObj;
})(window);
