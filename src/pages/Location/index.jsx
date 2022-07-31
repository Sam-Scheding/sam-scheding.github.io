import "./style.css";

const Location = () => {
  return (
    <div className="locationWrapper">
      <iframe
        title="Wedding location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12609.318545704798!2d144.96581558271888!3d-37.805747226059054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad668f6537835d7%3A0xdd25b58e27cec5f4!2sLune%20Croissanterie!5e0!3m2!1sen!2sus!4v1655984142122!5m2!1sen!2sus"
        width="500"
        height="450"
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default Location;
