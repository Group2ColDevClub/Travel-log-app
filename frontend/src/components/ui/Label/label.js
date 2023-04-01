import Labelstyle from './label.module.css';

function Label({ labelName, className = undefined }) {
  return (
    <div>
      <h1 className={Labelstyle.h1}>{labelName}</h1>
    </div>
  );
}

export default Label;
