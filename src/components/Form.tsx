import './Form.css';
import React, { FormEvent, useState, ChangeEvent } from "react";
import Select from './Select';
import axios from 'axios';

const Form = (): JSX.Element => {
  const [name, setName] = useState<string>('');
  const [event, setEvent] = useState({ key: '', val: '' });
  const [city, setCity] = useState({ key: '', val: '' });
  const [errors, setErrors] = useState<string[]>([]);

  const choicesEvents: [string, string][] = [
    ['', '---'],
    ['front-end-react', 'Front End - ReactJS'],
    ['back-end-react', 'Back End - NodeJS'],
    ['full-stack-react', 'Full Stack - MERN'],
    ['tester-manual', 'Tester Manualny']
  ];

  const choicesCites: [string, string][] = [
    ['', '---'],
    ['online', 'Online'],
    ['warsaw', 'Warszawa'],
    ['cracow', 'Kraków'],
  ];

  const handleChangeName= (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleChangeEvent = (e: ChangeEvent<HTMLSelectElement>) => {
    setEvent({
      key: e.target.value,
      val: e.target.options[e.target.selectedIndex].innerText
    });
  };

  const handleChangeCity = (e: ChangeEvent<HTMLSelectElement>) => {
    setCity({
      key: e.target.value,
      val: e.target.options[e.target.selectedIndex].innerText
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Obsługa przesyłania formularza (np. walidacja, wysyłanie danych do API)
  };

  return (
    <div className="formWrapper">
      <form action="#" onSubmit={handleSubmit}>
        <div className="wrapper">
          <label htmlFor="name">Imię i nazwisko</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleChangeName}
          />
        </div>
        <div className="wrapper">
          <label htmlFor="event">Wydarzenie</label>
          <Select
            values={choicesEvents}
            selectedValue={event.key}
            onValuesChange={handleChangeEvent}
            id='event'
          />
        </div>
        <div className="wrapper">
          <label htmlFor="city">Miasto</label>
          <Select
            values={choicesCites}
            selectedValue={city.key}
            onValuesChange={handleChangeCity}
            id='city'
          />
        </div>
        <div className="wrapper">
          <button type="submit">Zapisz na szkolenie</button>
        </div>
      </form >
      <div className="errorsWrapper">
        <ul className="errors">
          {/* Wyświetlanie błędów */}
          {errors.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Form;