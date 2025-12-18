import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("http://localhost:5000/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      if (!response.ok) throw new Error("Failed");

      setStatus("success");
      setForm({
        name: "",
        phone: "",
        email: "",
        course: "",
        message: ""
      });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section bg-white">
      <div className="container">
        <div className="section-header">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider">
            Contact
          </p>
          <h2>Admissions Enquiry</h2>
          <p className="mt-4 text-lg text-slate-600">
            Submit your details and our team will contact you.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="card p-8 max-w-3xl grid gap-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              name="name"
              placeholder="Student / Parent Name"
              required
              value={form.name}
              onChange={handleChange}
              className="border px-4 py-3 rounded-lg"
            />

            <input
              name="phone"
              placeholder="Mobile Number"
              required
              value={form.phone}
              onChange={handleChange}
              className="border px-4 py-3 rounded-lg"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <input
              name="email"
              placeholder="Email (optional)"
              value={form.email}
              onChange={handleChange}
              className="border px-4 py-3 rounded-lg"
            />

            <select
              name="course"
              required
              value={form.course}
              onChange={handleChange}
              className="border px-4 py-3 rounded-lg"
            >
              <option value="">Select Course</option>
              <option value="IIT-JEE">IIT-JEE</option>
              <option value="NEET">NEET</option>
              <option value="MPC">MPC</option>
              <option value="BiPC">BiPC</option>
            </select>
          </div>

          <textarea
            name="message"
            placeholder="Message (optional)"
            rows="4"
            value={form.message}
            onChange={handleChange}
            className="border px-4 py-3 rounded-lg"
          />

          <button className="btn-primary w-fit" type="submit">
            {status === "loading" ? "Submitting..." : "Submit Enquiry"}
          </button>

          {status === "success" && (
            <p className="text-green-600 font-medium">
              Enquiry submitted successfully.
            </p>
          )}

          {status === "error" && (
            <p className="text-red-600 font-medium">
              Submission failed. Try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
