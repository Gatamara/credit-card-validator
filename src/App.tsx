import imageChip from './assets/chip.png'
import imageVisa from './assets/visa.png'
import { Formik, Form, useFormikContext, FormikErrors } from 'formik';
import { TextInput } from './components/TextInput'
import { Select } from './components/Select';

import { useState, useEffect } from 'react';
import { ofuscarNumero } from './utils';

import { Input } from './components/Input';

import { validateCreditCardNumber } from './utils/validateCreditCardNumber';




interface FormValues {
  name: string
  number: string
  month: string
  year: string
}

const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
  const key = event.key;
  if (!/[0-9]|Backspace|Delete/.test(key)) {
    event.preventDefault();
  }
};
const RealTimeDisplay = () => {

  const { values } = useFormikContext<FormValues>();
  const [ofuscatedCardNumber, setOfuscatedCardNumber] = useState("");

  useEffect(() => {
    const result = ofuscarNumero(values.number);
    setOfuscatedCardNumber(result);


  }, [values.number]);

  return (
    <div className="tarjeta border-color">
      <div>
        <div className="img-chip">
          <img src={imageChip} alt="chip" />
          <img src={imageVisa} alt="chip" />
        </div>

        <div className='container-info'>
          <div>
            <h2 className="title2"> Número de Tarjeta </h2>
            <div className="numberCreditCard">
              {ofuscatedCardNumber}
            </div>
          </div>


          <div className="date-card-name">
            <div>
              <h2 className="title2"> Nombre del titular</h2>
              <p> {values.name}</p>
            </div>
            <div>
              <h2 className="title2 fecha-centrar">Fecha </h2>
              <p> {values.month} / {values.year} </p>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

const validate = (values: FormValues) => {
  const errors: FormikErrors<FormValues> = {}
  if (!values.name) {
    errors.name = 'Requerido'
  }

  if (!values.number) {
    errors.number = 'Requerido'
  } else if (validateCreditCardNumber(values.number)) {
    errors.number = 'El numero es Invalido';
  }

  return errors
}

function App() {

  return (
    <div className='container'>
      <header>
        <h1>Tarjeta de Credito</h1>
      </header>

      <main style={{ paddingTop: 24 }}>
        <Formik
          initialValues={{ name: '', number: '', month: '', year: '' }}
          validate={validate}
          onSubmit={values => console.log(values)}
        >
          <Form className='form-container'>
            <div className='form-info'>
              <TextInput name='number' label='Numero de Tarjeta' maxLength={16} onKeyDown={handleKeyDown} />
              <Input name='name' label='Nombre Titular' />

              <div className="info-card">
                <div className="date">
                  <Select name="month" label='Mes' >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </Select>
                  <Select name="year" label='Año'  >
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                    <option value="2030">2030</option>
                    <option value="2031">2031</option>
                    <option value="2032">2032</option>
                    <option value="2033">2033</option>
                    <option value="2034">2034</option>
                  </Select>
                </div>
              </div>

            </div>


            <RealTimeDisplay />

          </Form>
        </Formik>

      </main>
    </div>
  )
}

export default App
