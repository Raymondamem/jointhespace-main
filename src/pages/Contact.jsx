export const Contact = () => {
  return (
    <div className="bg-[#0E0E0E] text-white min-h-screen flex items-center">
      <div className="container mx-auto">
        <div>
          <h2 className="uppercase text-center text-3xl leading-relaxed mb-6">
            Lets have a meeting soon : Click Here
            <br />
            Or fill the form
          </h2>

          <div className="w-1/2 mx-auto">
            <form className="">
              <input type="text" placeholder="name" className="joinform" />
              <input type="text" placeholder="phone" className="joinform" />
              <input type="email" placeholder="email" className="joinform" />
              <textarea
                id=""
                cols="30"
                rows="10"
                className="joinform"
              ></textarea>
              <input type="submit" value="Submit" className="joinform" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
