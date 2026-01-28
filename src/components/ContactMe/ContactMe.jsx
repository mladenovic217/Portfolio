import "./ContactMe.scss";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css';

export default function ContactMe() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "2033d4ed-46b6-480e-bac5-a993cb612254");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Message sent!",
        text: "Thank you for reaching out. I’ll get back to you shortly.",
        icon: "success",
        confirmButtonColor: "#2c4062"
      });
        event.target.reset();
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-top">
        <h1 data-animate="FadeIn">Let's work together!</h1>
      </div>

      <div className="contact-bottom">
        <div className="contact-left">
          <h2 data-animate="fadeLeft">Let’s talk</h2>
          <p data-animate="fadeLeft">
            <strong>Email:</strong>
            <span> vmladenovic110@gmail.com</span>{" "}
          </p>

          <p data-animate="fadeLeft">
            <strong>Availability: </strong> Open for freelance & full-time work
          </p>

          <p data-animate="fadeLeft">
            <strong>Response time:</strong> 12–24 hours
          </p>

          <p data-animate="fadeLeft">You can also reach me on LinkedIn / GitHub.</p>

          <div className="contact-socials" data-animate="fadeLeft">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" />

            <img
              id="gh"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg"
            />
          </div>
        </div>

        <div className="contact-right" data-animate="fadeRight">
          <h2>Contact me</h2>
          <form className="contact-form" onSubmit={onSubmit}>
            <input type="text" placeholder="Full name" name="name" required />
            <input
              type="email"
              placeholder="Your email"
              name="email"
              required
            />
            <textarea placeholder="Message" name="message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
