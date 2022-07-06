const app = new Vue (
   {
      el: '#root',
      data: {
         index: 0,
         addTodo: '',
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
         ]
      },

      methods: {
         closeTodo(index) {
            this.todoList.splice(index, 1);
         }
      }
   }
)