angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    add: function(child) {
      chats.push(child);
    },
    get: function(chatsX, chatId) {
      console.log(chatId);

      for (var i = 0; i < chatsX.length; i++) {
        console.log(chatsX[i]);
        if (chatsX[i].id === chatId) {
          return chatsX[i];
        }
      }
      console.log("mull");
      return null;
    }
  };
});
