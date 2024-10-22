import React from "react";

function Footer() {
  return (
    <div className="block bottom-0 w-full p-10 text-center bg-slate-700">
      <div className="md:p-5 p-2">
        <h2 className="md:text-2xl text-xl">HannaH - © 20xx</h2><br></br>
        Follow us on: <a className="hover:underline md:text-base text-xs" target="_blank" href="https://www.linkedin.com/in/fatima-zohra-4a1b712b4/">LinkedIn</a>
      </div>

      <div className="p-5">
        <h2 className="md:text-2xl text-xl underline">Get in Touch:</h2>
        <ul className="md:text-base text-xs">
          <li>Email: HannaH@google.com</li>
          <li>Phone: +123 456 7890</li>
          <li>Address: 1234 Fragrance Lane, Perfume City</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
