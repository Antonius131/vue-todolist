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

            {
               text: 'lavarsi i denti',
               done: false,
            },
         ],
      },

      methods: {
         closeTodo() {
            this.todoList.splice([this.index], 1);
         }
      }
   }
)