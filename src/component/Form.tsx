import React, { useState } from "react";
import * as yup from "yup";
import styles from "./Form.module.css";
import Input from "./Input";

type peopleType = {
  name: string;
  age: number;
  office: string;
  email: string;
  phone: string;
  date: string;
};

const register: yup.SchemaOf<peopleType> = yup.object().shape({
  name: yup
    .string()
    .required()
    .matches(/^[aA-zZ\s]+$/),
  email: yup.string().email().required(),
  office: yup
    .string()
    .required()
    .matches(/^[aA-zZ\s]+$/),
  age: yup.number().required(),
  phone: yup.string().required().min(11),
  date: yup.string().required(),
});

function Form() {
  const [people, setPeople] = useState<peopleType>({
    name: "",
    age: 0,
    office: "",
    email: "",
    phone: "",
    date: "",
  });

  const [isVisible, setIsvisible] = useState(false);

  const handleSetPeople = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPeople((previous) => {
      return {
        ...previous,
        [name]: value,
      };
    });
  };

  const handleSubmit = () => {
    if (register.isValidSync(people)) {
      setIsvisible((previous) => !previous);
    }
  };

  console.log(people);
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Input
          name="name"
          title="Nome"
          value="b"
          handleSetPeople={handleSetPeople}
        />
        <div className={styles.ageOffice}>
          <Input
            name="age"
            width={50}
            type="number"
            title="Idade"
            value="b"
            handleSetPeople={handleSetPeople}
          />
          <Input
            name="office"
            width={200}
            title="Profissão"
            value="b"
            handleSetPeople={handleSetPeople}
          />
        </div>
        <Input
          name="email"
          type="email"
          title="Email"
          value="b"
          handleSetPeople={handleSetPeople}
        />
        <Input
          name="phone"
          type="tel"
          title="Telefone"
          value="b"
          minLength={11}
          handleSetPeople={handleSetPeople}
        />
        <Input
          name="date"
          type="date"
          title="Data de Preenchimento"
          value="b"
          handleSetPeople={handleSetPeople}
        />
      </div>
      <button className={styles.action} onClick={handleSubmit}>
        Submeter
      </button>
      {isVisible ? (
        <p className={styles.message}>
          {people.name}, Seja bem vindo à Rethink
        </p>
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default Form;
