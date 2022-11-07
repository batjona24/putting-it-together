import './App.css';
import PersonCard from './components/PersonCard';;

function App() {
  return (
    <div className="App">
     <PersonCard 
     tittle={ "Jane Doe" }
     age={ 45 }
     desc={ "Hair Color: Black" }
     initialAge={45}/>
     <PersonCard 
     tittle={ "John Smith" }
     age={ 88 }
     desc={ "Hair Color: Brown" }
     initialAge={88}/>
    </div>
  );
}

export default App;
