import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function validateEmail(email: string) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
      alert("You have subscribed successfully!");

    }
  };

  return (
    <section className="bg-[#FFF2F3] py-16">
      <div className="container mx-auto px-4 text-center mt-24 mb-24">
        <h2 className="text-[#A5C98F] text-lg font-medium mb-2">Newsletter</h2>
        <h3 className="text-[#2D3748] text-3xl font-bold mb-4">Watch our Courses</h3>
        <p className="text-[#4A5568] max-w-2xl mx-auto mb-8">
          Problems trying to resolve the conflict between <br /> the two major realms of Classical physics: Newtonian mechanics
        </p>
        <div>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center items-center max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:w-[70%] px-4 py-3 rounded-l-md border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#A5C98F] text-base sm:text-lg"
            />
            <button
              type="submit"
              className="w-full sm:w-auto mt-4 sm:mt-0 px-6 py-3 bg-[#A5C98F] text-white rounded-r-md hover:bg-[#94B882] transition-colors text-base sm:text-lg"
            >
              Subscribe
            </button>
          </form>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
      </div>
    </section>
  );
}
