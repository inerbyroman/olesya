const FormButton = () => {
  return (
    <button className="fixed right-10 bottom-32 bg-yellow-400 z-50 p-3 sm:p-5 rounded-3xl hover:bg-violet-600 hover:text-white hover:p-3.5 sm:hover:p-6 hover:text-xl ease-out duration-300">
      <a
        rel="noreferrer"
        target="_blank"
        href="https://docs.google.com/forms/d/1ZgZKaWfrS45fkFZu36eQxPeDY2gEitEPsIj-NbUiHn8/viewform?edit_requested=true"
      >
        Заповнити форму
      </a>
    </button>
  );
};

export default FormButton;
