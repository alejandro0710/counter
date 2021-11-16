import React from 'react';
import { Acountant } from '../Accountant';
import { ButtonAcountant } from '../ButtonAcountant';

function App() {
  const [accountantNumber, setAccountantNumber] = React.useState(0);

  let number = accountantNumber;
  console.log(number);

  const increaseNumber = () => {
    number++;
    setAccountantNumber(number);
  };

  const subtractNumber = () => {
    if (number > 0) {
      number--;
      setAccountantNumber(number);
    }
  };

  const resetNumber = () => {
    number = 0;
    setAccountantNumber(number);
  };

  return (
    <React.Fragment>
      <main className="fatherContainer">
        <div className="accountant">
          <Acountant accountantNumber={accountantNumber} />
          <ButtonAcountant
            increaseNumber={increaseNumber}
            subtractNumber={subtractNumber}
            resetNumber={resetNumber}
          />
        </div>
      </main>
    </React.Fragment>
  );
}

export { App };
