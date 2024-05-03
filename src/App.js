import MainBody from "./components/Body/MainBody";
import HeaderSection from "./components/Header/HeaderSection";
import NavBar from "./components/navBar/NavBar";

function App() {
  return (
    <div className="w-screen h-full bg-slate-50">
       <HeaderSection/>
       <main className="flex ">
         <NavBar/>
         <MainBody/>
       </main>
    </div>
  );
}

export default App;
