import {defineStore} from "pinia";

// on doit l'exporter
const useTodoStore = defineStore("todo",{
    state: () => {
        return {
            todos:[]
        }
    },
    actions:{
        addTodo(title){
            // objet actuel: le store
            this.todos.push(title);
        } ,
        removeToDo(index){
            this.todos.splice(index, 1)
        },
        async getTodos(){
            this.todos = await new Promise((resolve)=>{
                setTimeout(()=>{
                    resolve(["test1", "test2"]), 500
                })
            })
        }
    }, getters:{
        count(state){ // toujours state en premier argument
                return state.todos.length
        }
    }
})

export default useTodoStore;