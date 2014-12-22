Tasks = new Mongo.Collection("tasks");

if (Meteor.isClient) {

  Template.task.helpers({
    prettyDate: function() {
      var itemDate = this.createdAt;
      var zeeDate = new Date(itemDate);
      //console.log(zeeDate);
      return zeeDate.toLocaleDateString();
    }
  });

  Template.task.events({
    "click .toggle-checked": function () {
      Tasks.update(this._id, {$set: {checked: ! this.checked}});
    },
    "click .delete": function () {
      Tasks.remove(this._id);
    }
  });

  Template.body.events({
    "submit .new-task": function(event) {
      var text = event.target.text.value;

      Tasks.insert({
        text: text,
        createdAt: new Date()
      });

      event.target.text.value = "";

      $('.add-task').modal('hide');

      return false;
    }
  });

  Template.body.helpers({
    tasks: function() {
      return Tasks.find({}, {sort: {createdAt: -1}});
    },
    doneTasks: function() {
      return Tasks.find({checked: true});
    },
    toDoTasks: function() {
      return Tasks.find({checked: false});
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
