import Tickets from './Tickets';

const demoContent = [
  {
    id: 1,
    column: 'todo',
    text: 'Add your card=)',
  },
  {
    id: 2,
    column: 'in-progress',
    text: 'Add your card=)',
  },
  {
    id: 3,
    column: 'done',
    text: 'Add your card=)',
  },
];

const tickets = new Tickets(demoContent);
tickets.init();
