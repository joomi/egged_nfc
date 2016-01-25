angular.module('starter.controllers', [])

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

  nfc.addNdefListener(
    function (nfcEvent) {
      var tag = nfcEvent.tag,
          ndefMessage = tag.ndefMessage;
      alert(JSON.stringify(ndefMessage));
      alert(nfc.bytesToString(ndefMessage[0].payload).substring(3));

      var newChild = Chats.scan(ndefMessage);
      if(newChild !== false && newChild !== null) {
        $scope.chats.push({
          name: newChild.name,
          id: newChild.id,
          phone: newChild.phone,
          face: newChild.face,
          comments: newChild.comments
        });
      }
    },
    function () { // success callback
      alert("Waiting for NDEF tag");
    },
    function (error) { // error callback
      alert("Error adding NDEF listener " + JSON.stringify(error));
    }
  );
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
