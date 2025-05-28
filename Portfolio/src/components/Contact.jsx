export function Contact(){
    return (
        <div id="contact">
          <h2 className="para_head">Contact Me</h2>
          <form
            className="contact_form"
            action="https://getform.io/f/ajjjogna"
            method="post"
          >
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
            />

            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Write your message here..."
              required
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
    );
}