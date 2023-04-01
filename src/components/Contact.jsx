import { TypeAnimation } from "react-type-animation";

// ! contact component
const Contact = () => {
  return (
    <div className="container">
      <div className="row">
        <div id="contact" className="col-12">
          <TypeAnimation
            className="type-animation"
            sequence={[
              "Je bent altijd welkom om mij een mailtje te sturen!",
              1000,
              "Voor vragen, opmerkingen of een bestelling",
              2000,
              "Of om gewoon even te hallo zeggen",
              1000,
              "Portretten, illustraties, cartoons, logo's, ... op aanvraag",
              500,
              "Of bezoek me op social media",
              2000,
              // "Connect with me through social media",
              () => {
                console.log("Sequence completed");
              },
            ]}
            wrapper="h3"
            cursor={false}
            repeat={Infinity}
            style={{
              fontFamily: "Dancing Script",
              fontSize: "2em",
              display: "block",
            }}
          />
          <form
            action="https://formsubmit.co/irisarts@protonmail.com"
            method="POST"
          >
            <input
              type="text"
              name="name"
              placeholder="Your name:"
              required
            ></input>
            <input
              type="email"
              name="email"
              placeholder="email:"
              required
            ></input>
            <textarea
              type="text"
              name="message"
              placeholder="Your message:"
              required
            ></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
