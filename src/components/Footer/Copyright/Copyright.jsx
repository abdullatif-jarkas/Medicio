import "./Copyright.css";

const Copyright = () => {
  return (
    <div className="copyright border-top mt-5 pt-4 text-center">
      <p className="mb-2">
        © Copyright <span className="px-1 fw-bold">Medicio</span> All Rights
        Reserved
      </p>
      <p className="mb-2">
        Designed by
        <a href="https://facebook.com/abdullatif.jarkas.1" className="ms-2 name-font-family main-color">Abdullatif Jarkas</a>
      </p>
    </div>
  );
};

export default Copyright;
