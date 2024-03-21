

<script setup>
import useTodoStore from './stores/todoStore';
import {onMounted, ref} from 'vue';

const todoStore = useTodoStore();

onMounted(function(){
  const storage = localStorage. getItem("todoStore");
  if (storage){
    todoStore.$patch(JSON.parse(storage));
  }
})

const title = ref("")
function onSubmit(){
  if (title.value != ""){
    todoStore.addTodo(title.value)
  } else title.value = "..."
}

// notify property
todoStore.$subscribe(function(mutation, state){
  localStorage.setItem("todoStore", JSON.stringify(state))
})

</script>

<template>
  <form @submit.prevent = "onSubmit">
    <label for="title">Titre :</label>
    <input type="text" id="title" v-model="title">
    <button >Ajouter </button>
  </form>


  <ul>        <!-- of si on veut chercher dans un objet -->
    <li v-for="(item, index) in todoStore.todos">
      {{ item }}
      <button @click="todoStore.removeToDo(index)"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"> <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"></path> <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"></path> </svg></button>
    </li>
  </ul>

  Nombre:{{ todoStore.count }}


</template>

<style scoped>

</style>
