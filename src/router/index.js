import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/LoginView.vue'
import HomeView from '../views/HomeView.vue'
import MenuView from '../views/MenuView.vue'
import TesteVelocidadeView from '../views/TesteVelocidadeView.vue'
import SuporteView from '../views/SuporteView.vue'
import NotificaçõesView from '../views/NotificaçõesView.vue'
import CobrançasView from '../views/CobrançasView.vue'
import CobrançasPagasView from '../views/CobrançasPagasView.vue'
import BoletoView from '../views/BoletoView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/menu',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: '',
        name: 'menu',
        component: MenuView
      },
      {
        path: 'speedtest',
        name: 'teste de velocidade',
        component: TesteVelocidadeView
      },
      {
        path: 'suporte',
        name: 'suporte',
        component: SuporteView
      },
      {
        path: 'notificacoes',
        name: 'notificações',
        component: NotificaçõesView
      },
      {
        path: 'cobrancas',
        name: 'cobranças',
        component: CobrançasView
      },
      {
        path: 'cobrancaspagas',
        name: 'cobranças pagas',
        component: CobrançasPagasView
      },
      {
        path: 'boleto',
        name: 'boleto',
        component: BoletoView
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router