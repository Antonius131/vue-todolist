const app = new Vue (
   {
      el: '#root',
      data: {
         index: 0,
         todoList: [
            {
               text: 'svegliarsi',
               done: false
            },
            {
               text: 'bere acqua',
               done: false
            },
            {
               text: 'fare la doccia',
               done: false
            },
            {
               text: 'fare colazione',
               done: false
            },
         ],
      }
   }
)