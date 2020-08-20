const LinkedList = require('./LinkedList');

const seasons = new LinkedList();
seasons.printList();

seasons.addToHead('summer');
seasons.addToHead('spring');

seasons.addToTail('fall');
seasons.addToTail('winter');


seasons.printList();
seasons.removeSpecific('fall')
seasons.printList();
