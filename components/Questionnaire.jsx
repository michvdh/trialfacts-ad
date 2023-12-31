const Questionnaire = () => {
  return (
    <div className="bg-dark-blue text-white font-sans drop-shadow-lg flex flex-col items-center justify-center p-10 gap-7 w-full sm:w-96">
      <h1 className="text-3xl font-semibold ">Next Steps</h1>
      <ol className="text-lg text-center 2xs:text-justify">
        <li>1. Complete a brief questionnaire</li>
        <li>2. Speak with a trial coordinator</li>
      </ol>
      <a
        href="https://forms.gle/RjRu51odcqmDtVNW8"
        target="_blank"
        className="bg-red-700 hover:bg-red-800 px-10 py-2 w-full text-center rounded-full transition-colors ease-in-out delay-50 font-bold text-lg"
      >
        Click Here
      </a>
    </div>
  );
};

export default Questionnaire;
