import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Cart = () => {
  const [cardSeguro, setCardSeguro] = useState("");
  const [name, setName] = useState("");
  const [numberCard, setCardNumber] = useState("");
  const [dateCard, setDateCard] = useState("");
  const [dateCardOne, setDateCardOne] = useState("");
  const [formSubmit, setFormSubmit] = useState(true);
  const [error, setError] = useState(false);

  let number = "0000 0000 0000 0000";
  let result = number.replace(/\d{4}(?=\d)/g, "$& ");

  // Submit boton
  const handleSubmit = (e) => {
    e.preventDefault();

    setFormSubmit(false);
  };

  // Validacion del CVC
  const handleInputSeguro = (e) => {
    const value = e.target.value;
    setCardSeguro(value);

    if (value.length > 4) {
      alert("Debes ser de 3 digites tu CVC");
      setCardSeguro("");
    }
  };

  // Validacion del Nombre
  const handleInputName = (e) => {
    const value = e.target.value;
    setName(value);

    if (value.length > 24) alert("No debe pasar el limite de 20 caracteres");

    if (value.length > 26) setName("");
  };

  // Validacion del Numero de tarjeta

  const handleInputNumberCard = (e) => {
    const value = e.target.value.trim();
    setError(!!isNaN(value));
    const result = value.replace(/\d{4}(?=\d)/g, "$& ");

    setCardNumber(result);

    if (value.length > 19) alert("No debe de tener mas de 19 caracteres");

    if (value.length > 22) setCardNumber("");
  };

  // Datos de la tarjeta
  const handleDateCard = (e) => {
    const value = e.target.value;
    setDateCard(value);

    if (value.length > 2) {
      alert("Solo de tener 2 caracteres");
      setDateCard("");
    }
  };
  // Datos de la tarjeta
  const handleDateCardOne = (e) => {
    const value = e.target.value;
    setDateCardOne(value);

    if (value.length > 2) {
      alert("Solo de tener 2 caracteres");
      setDateCardOne("");
    }
  };

  return (
    <section className="container">
      {/* Carta gris */}
      {/* Section 1 */}
      <section className="container-card tablet:w-[100vw] z-10">
        <div
          className="absolute top-[18px] left-[60px] tablet:translate-x-6 mobile:translate-x-20  smallMobile:translate-x-36 laptop:translate-x-44 largeLaptop:translate-x-64 desktop:translate-y-80  
        "
        >
          <div className="">
            <img
              className="w-[280px] h-[155px] bg-cover desktop:w-[390px] desktop:h-[214px] "
              src="/public/images/bg-card-back.png"
              alt="card-front"
            />
          </div>
          <div className="absolute top-[63px] left-[220px] z-10 desktop:left-[19rem] desktop:top-[90px] ">
            <p className="text-black font-semibold text-[18px]">
              {cardSeguro || "000"}
            </p>
          </div>
        </div>
        {/*  ** Carte color ** */}
        <div className="absolute top-[106px] left-[20px] tablet:translate-x-6 mobile:translate-x-20 smallMobile:translate-x-36 laptop:translate-x-44 largeLaptop:translate-x-64 desktop:-translate-y-10 desktop:-left-14 ">
          <div>
            <img
              className="w-[280px] h-[155px] bg-cover desktop:w-[390px] desktop:h-[214px]  "
              src="/public/images/bg-card-front.png"
              alt="card-back"
            />
          </div>

          <div className="absolute top-[16px] left-[10px] z-10 w-[70px] ">
            <div>
              <img src="/public/images/card-logo.svg" alt="" />
            </div>
          </div>

          <div className="absolute top-[76px] z-10 left-7 desktop:left-[77px] desktop:top-[95px] ">
            <p className="text-white font-semibold text-[24px]">
              {numberCard.slice(0, 20) || result}
            </p>
          </div>

          <div className="absolute top-[120px] flex justify-between w-full desktop:top-[160px] ">
            <p className="text-white font-medium text-[14px] pl-4 ">
              <code> {name || "@lil dree"} </code>
            </p>
            <span className="text-white font-medium text-[14px] pr-4 ">
              <code>
                {dateCardOne || "00"} / {dateCard || "00"}
              </code>
            </span>
          </div>
        </div>
      </section>
      {/* Formulario e inputs */}
      {/* Section 2  */}
      <section
        onSubmit={handleSubmit}
        className="w-[100%] flex justify-center items-center desktop:absolute  "
      >
        {formSubmit ? (
          <form className="flex flex-col justify-center gap-4 mt-[80px] desktop:relative desktop:left-72 desktop:top-12">
            <div className="flex flex-col gap-3 ">
              <label className="" htmlFor="">
                🎴 CARDHOLDER NAME
              </label>
              <input
                className="border-2 border-black  p-2 rounded-md text-lg"
                type="text"
                placeholder="Lil Dree"
                onChange={handleInputName}
                value={name}
                required
                minLength={3}
              />

              <span>
                {name.length < 24 ? (
                  ""
                ) : (
                  <Alert maxWidth="sm" status="error">
                    <AlertIcon />
                    <AlertTitle>Debes tener mas de 20 caracteres!</AlertTitle>
                  </Alert>
                )}
              </span>

              <label className="">💳 CARD NUMBER</label>
              <input
                className="border-2 border-black  p-2 rounded-md text-lg"
                type="text"
                placeholder="1245 7531 8745 0000"
                value={numberCard}
                onChange={handleInputNumberCard}
                required
              />

              {error !== false ? (
                <Alert maxWidth="sm" status="error">
                  <AlertIcon />
                  <AlertTitle>Solo se permiten numeros</AlertTitle>
                </Alert>
              ) : (
                ""
              )}
            </div>

            <div className="">
              <div className="flex justify-between pb-3 ">
                <label htmlFor="">
                  🎯 EXP. DATE <span className="pl-2"> (MM / YY) </span>
                </label>
                <label className="-translate-x-14" htmlFor="">
                  🔐 CVC
                </label>
              </div>
              <div className="flex gap-4 ">
                <input
                  className="w-[90px] h-[50px] border-2 border-black rounded-md p-2 text-lg"
                  type="text"
                  placeholder="MM"
                  value={dateCardOne}
                  onChange={handleDateCardOne}
                  required
                />
                <input
                  className="w-[90px] h-[50px] border-2 border-black rounded-md p-2 text-lg"
                  type="text"
                  placeholder="YY"
                  value={dateCard}
                  onChange={handleDateCard}
                  required
                />

                <input
                  className="w-[105px] h-[50px] border-2 border-black rounded-md p-2 text-lg"
                  type="text"
                  placeholder="1234"
                  onChange={handleInputSeguro}
                  value={cardSeguro}
                />
              </div>
            </div>

            <div>
              <button
                className="w-full h-[50px] bg-black text-white rounded-md text-xl text-center hover:bg-white hover:text-black transition-all duration-300 shadow-lg shadow-red-400"
                type="submit"
              >
                🤚🏾 Confirm
              </button>
            </div>
          </form>
        ) : (
          <section className="absolute ">
            <div className="relative top-60 w-full flex justify-center flex-col items-center gap-2 rounded-full animate-bounce desktop:left-[20rem] desktop:top-[22rem] ">
              <div>
                <img src="/public/images/icon-complete.svg" alt="" />
              </div>

              <div className="text-center p-3 ">
                <div className="p-3">
                  <h3>Thank you for your purchase!</h3>
                  <p>We appreciate your business</p>
                </div>
                <button
                  className="w-full h-[50px] bg-black text-white rounded-md text-xl text-center hover:bg-white hover:text-black transition-all duration-300 shadow-lg shadow-red-400 "
                  type="submit"
                >
                  🎉 Continue Shopping
                </button>
              </div>
            </div>
          </section>
        )}
      </section>
    </section>
  );
};

export default Cart;
