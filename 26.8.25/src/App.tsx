import Profile from "./comps/profile";
import Title from "./comps/title";
import "./App.css"
import Foter from "./comps/foter";


export default function App() {
  return (
    <>
      <div className="app">
        <Title
          title="My Profile Page"
        >
        </Title>
        <Profile
          userName="neta"
          description="Developer from Israel"
          imageUrl="./imgProfile.jpg"
        >
        </Profile>
        <Profile
          userName="naomi"
          description="nerss from Israel"
          imageUrl="./imgProfile.jpg"
        >
        </Profile>
        <Profile
          userName="talya"
          description="swity baby from Israel"
          imageUrl="./imgProfile.jpg"
        >
        </Profile>
        <Profile
          userName="talya"
          description="swity baby from Israel"
          imageUrl="./imgProfile.jpg"
        >
        </Profile>
        <Foter
          foter = "© myapp 2025"
        >
        </Foter>
      </div>
    </>
  )
}
