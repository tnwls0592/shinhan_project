import { createRouter,createWebHistory } from "vue-router";
import MainCompView from "@/views/MainCompView.vue";
import SaveView from "@/views/SaveView.vue";
import CardView from "@/views/CardView.vue";
import ServiceView from "@/views/ServiceView.vue";

const routes = [
  {
    path : '/',
    component : MainCompView
  },
  {
    path : '/Save',
    component : SaveView
  },
  {
    path : '/Card',
    component : CardView
  },
  {
    path : '/Service',
    component : ServiceView
  }
]

const router = createRouter({
  history : createWebHistory('/shinhan/'),
  routes
})

export default router;