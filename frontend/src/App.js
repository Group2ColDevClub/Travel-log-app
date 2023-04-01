import './components/ui/Button/button.module.css';
import Button from './components/ui/Button/button';
import plusSign from './assets/plusSign.png';

function App() {
  const onClick = () => {
    console.log('clicked');
  };

  return (
    <div className='App'>
      <Button label='click me!' variant='primary' size='l' onClick={onClick} />
      <Button label='click me!' variant='secondary' size='m' onClick={onClick} />
      <Button icon={{ src: plusSign, alt: 'icon alt text' }} variant='tertiary' size='s' onClick={onClick} shape='circle' />
    </div>
  );
}
export default App;
