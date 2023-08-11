import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useState } from "react";

const Form = () => {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    access_key: "d0202c79-2d13-4320-be74-64ddd9a8329e",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = JSON.stringify(formData);

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setSuccess(true);
        setFormData({
          ...formData,
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      })
      .catch((err) => console.log(err));
  };

  return (
    <motion.form
      action=""
      ref={ref}
      className="contactForm"
      initial={{ x: "-10vw", opacity: 0 }}
      animate={inView ? { x: 0, opacity: 1 } : { x: "-10vw", opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      onSubmit={handleSubmit}
    >
      <h4 className="contentTitle">메시지를 보내보세요</h4>
      <div
        className="col-12 col-md-6 formGroup"
        style={{ display: "inline-block" }}
      >
        <input
          type="text"
          className="formControl"
          onChange={handleChange}
          value={formData.name}
          id="contactName"
          name="name"
          placeholder="이름"
          required
        />
      </div>
      <div
        className="col-12 col-md-6 formGroup"
        style={{ display: "inline-block" }}
      >
        <input
          type="email"
          className="formControl"
          onChange={handleChange}
          value={formData.email}
          id="contactEmail"
          name="email"
          placeholder="이메일"
          required
        />
      </div>
      <div className="col-12 formGroup">
        <input
          type="text"
          className="formControl"
          onChange={handleChange}
          value={formData.subject}
          id="contactSubject"
          name="subject"
          placeholder="제목"
          required
        />
      </div>
      <div className="col-12 formGroup">
        <textarea
          className="formControl"
          onChange={handleChange}
          value={formData.message}
          name="message"
          id="contactMessage"
          rows="5"
          placeholder="메시지"
          required
        ></textarea>
      </div>
      <div className="col-12 formGroup formSubmit">
        <button className="btn">{success ? "보내기 성공" : "보내기"}</button>
      </div>
    </motion.form>
  );
};

export default Form;
