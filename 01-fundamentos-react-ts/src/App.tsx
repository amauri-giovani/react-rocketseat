import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post, PostType } from "./components/Post";
import './global.css'
import style from './App.module.css'


const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/amaurirg.png",
      name: "Amauri Rossetti Giovani",
      role: "Desenvolvedor Senior"
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2024-10-02 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat"
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais 2 projetos no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2024-10-06 20:00:00')
  }
]

export function App() {
  return (
    <div>
      <Header />
      <div className={style.wrapper}>
          <Sidebar />
        <main>
          {posts.map(post => {
            return (
            <Post 
            key={post.id}
              post={post}
            />
          )
          })}
        </main>
      </div>
    </div>
  )
}
