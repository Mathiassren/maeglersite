const ContactForm = () => {
  return (
    <section className="w-[650px] h-[704px]  shadow ">
      <div className="ml-[40px] pt-[40px]">
        <h2 className="pb-[12px] font-bold">Kontakt</h2>
        <hr className="w-16 border-t-4 mb-[20px] border-Button" />
      </div>
      <div class="flex ml-[40px] space-x-8">
        <div class="flex flex-col mb-[20px]">
          <label for="name" class="mb-2">
            Navn
          </label>
          <input
            id="name"
            class="border px-3 py-2"
            type="text"
            placeholder="Indtast navn"
          />
        </div>
        <div class="flex flex-col ">
          <label for="email" class="mb-2">
            Email
          </label>
          <input
            id="email"
            class="border px-3 py-2"
            type="email"
            placeholder="Indtast email"
          />
        </div>
      </div>
      <div className="ml-[40px] mb-[20px]">
        <p className="mb-2">Emne</p>
        <textarea
          className="border w-[570px] px-3 py-2"
          type="text"
          placeholder="Hvad drejer din henvendelse om?"
        />
      </div>
      <div className="ml-[40px]">
        <p className="mb-2">Besked</p>
        <textarea
          className="border w-[570px] h-[180px] p-4"
          placeholder="Skriv din besked her.."
        ></textarea>
      </div>{" "}
      <button className="ml-[40px] mt-[30px] w-[168px] h-[62px] bg-Button text-white">
        Send besked
      </button>
    </section>
  );
};

export default ContactForm;
