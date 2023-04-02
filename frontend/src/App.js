import './components/ui/Button/Button.module.css';
import Button from './components/ui/Button/Button';
// import plusSign from './assets/plusSign.png';

function App() {
  const onClick = () => {
    console.log('clicked');
  };

  return (
    <div className='App'>
      <Button label='click me!' variant='primary' size='l' onClick={onClick} />
      <Button label='click me!' variant='secondary' size='m' onClick={onClick} />
    </div>
  );
}
export default App;
