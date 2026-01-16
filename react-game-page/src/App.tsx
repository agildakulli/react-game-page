
  import ListGroup from './components/ListGroup';

function App() {
  let items = ["New York", "San Francisco", "Miami", "paris"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  }
  return <>
   <ListGroup items={items} heading="cities"onSelectItem={handleSelectItem}/>

  </>;
}
export default App;