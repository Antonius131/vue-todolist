const app = new Vue (
   {
      el: '#root',
      data: {
         index: 0,
         todoList: [
            {
               text: 'svegliarsi',
               done: true,
            },
            {
               text: 'bere acqua',
               done: true,
            },
            {
               text: 'fare la doccia',
               done: false,
            },
            {
               text: 'fare colazione',
               done: false,
            },
         ],
      }
   }
)