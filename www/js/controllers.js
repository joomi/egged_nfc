angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('FormCtrl', function($scope, Chats, $location) {

      $scope.chats = Chats.all();

      $scope.createTask = function(task) {
        $scope.chats.push({
          name: task.name,
          id: task.id,
          phone: task.phone,
          face: 'img/ben.png',
          comments: task.comments
        });
        //$scope.childForm.$setPristine();
        $location.path('/tab/chats');
      };
    })

.controller('ChatsCtrl', function($scope, Chats) {

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
      var all = Chats.all();
  $scope.chat = Chats.get(all, $stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
