import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Recruit from '../views/Recruit.vue'
import Person from '../views/Person.vue'
import OverflowTest from '../views/OverflowTest.vue'
import UpdateImage from '../views/UpdateImage.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/recruit',
    name: 'Recruit',
    component: Recruit
  },
  {
    path: '/person',
    name: 'Person',
    component: Person
  },
  {
    path: '/overflowTest',
    name: 'OverflowTest',
    component: OverflowTest
  },
  {
    path: '/updateImage',
    name: 'UpdateImage',
    component: UpdateImage
  }
]

const router = new VueRouter({
  routes
})

export default router
