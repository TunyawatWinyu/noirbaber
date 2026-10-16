const ContactForm = () => {
  return (
    <section className="bg-main-bg lg:w-full pt-30 lg:pb-50 px-10 gap-4">
      <form>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col lg:flex-row gap-6">
            <label className="flex flex-col gap-4">
              <span className="font-secondary text-white text-sm font-semibold">
                NAME
              </span>
              <input
                className="font-secondary text-white text-sm font-semibold 
                border-b py-2 w-80"
                type="text"
                placeholder="Your name"
              />
            </label>
            <label className="flex flex-col gap-4">
              <span className="font-secondary text-white text-sm font-semibold">
                EMAIL
              </span>
              <input
                className="font-secondary text-white text-sm font-semibold 
                border-b py-2 w-80"
                type="text"
                placeholder="you@email.com"
              />
            </label>
          </div>
          <div>
            <label className="flex flex-col gap-4">
              <span className="font-secondary text-white text-sm font-semibold">
                SUBJECT
              </span>
              <input
                className="font-secondary text-white text-sm font-semibold 
                border-b py-2 w-165"
                type="text"
                placeholder="How can we have?"
              />
            </label>
          </div>
          <div>
            <label className="flex flex-col gap-4">
              <span className="font-secondary text-white text-sm font-semibold">
                MESSAGE
              </span>
              <textarea
                className="font-secondary text-white text-sm font-semibold 
                border-b py-2 w-165"
                placeholder="How can we have?"
              ></textarea>
            </label>
          </div>
          <button
            className="font-secondary text-xs font-semibold w-40 py-4 px-5 bg-white cursor-pointer transition-all duration-200 hover:bg-effect"
            type="submit"
          >
            SEND MESSAGE
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
