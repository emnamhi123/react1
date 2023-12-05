import "./App.css";
import Navigation from "./components/Navigation";
import Profile from "./components/profil";
function App() {
  const users = [
    {
      name: "emna",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEaWaLRqqM_4gEee8cQap62Oq_bdRJrGyBSA&usqp=CAU",
    },
    {
      name: "amnouch",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgE5nnsxQMMcb9-lWcygeXz-_4OSsl8NkNl5gkXYRANeMDG2l_nGrZVjxINgQHJP7gJAQ&usqp=CAU",
    },
    {
      name: "ammouna",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/4140/4140051.png",
    },
  ];
  return (
    <div className="App">
      <Navigation />
      <p>Hello</p>
      {users.map((user) => {
        return <Profile userInfo={user} />;
      })}
    </div>
  );
}

export default App;
