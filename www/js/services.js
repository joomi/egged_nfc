angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var persistent = [{
    id: 1,
    name: 'בני כהן',
    phone: '052-65432154',
    comments: 'כל מיני הערות הקשורות לבניץץץ',
    face: 'img/ben.png'
    },
    {
      id: 2,
      name: 'שלום מזרחי',
      phone: '052-34567567',
      comments: 'אין מה לומר עליו',
      face: 'img/max.png'
    },
    {
      id: 3,
      name: 'מיכאל בנימין',
      phone: '052-65432154',
      comments: 'יש לזכור להוריד אותו ליד התחנה ולהתקשר לאמא',
      face: 'img/perry.png'
    }
  ];
  var chats = [];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    scan: function(childId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === childId) {
          chats.splice(chats.indexOf(chats[i]), 1);
          return false;
        }
      }
      for (var i = 0; i < persistent.length; i++) {
        if (persistent[i].id === childId) {
          return persistent[i];
        }
      }
      return null;
    },
    get: function(chatsX, chatId) {
      for (var i = 0; i < chatsX.length; i++) {
        if (chatsX[i].id === chatId) {
          return chatsX[i];
        }
      }
      return null;
    }
  };
});
//  .factory('Nfc', function() {
//
//});
