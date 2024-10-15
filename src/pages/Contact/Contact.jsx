import React from "react";
import PageBanner from "../../components/PageBanner";
import bg_img from "../../assets/images/contact_imgae.jpg";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMailUnread } from "react-icons/io";
import { HiBuildingOffice2 } from "react-icons/hi2";

export default function Contact() {
  return (
    <div className="">
      <PageBanner bg_img={bg_img} title="Contact" />
      <div className="pt-16">
        <div className="mb-10 text-center">
          <p className="mb-3 font-semibold text-center text-accent">
            Contact Us
          </p>
          <h3 className="text-3xl font-bold ">Get In Touch</h3>
        </div>

        {/* First Section */}
        <div className="flex flex-wrap justify-center gap-6 px-5">
          <div className="text-center shadow-lg card w-96 bg-base-200">
            <div className="items-center card-body">
              <IoMdMailUnread className="text-3xl text-lime-500" />
              <h2 className="card-title">Email Adress</h2>
              <p className="leading-snug text-slate-500">
                tjdammy@yahoo.com<br />
              </p>
            </div>
          </div>
          <div className="text-center shadow-lg card w-96 bg-base-200">
            <div className="items-center card-body">
              <FaPhoneAlt className="text-3xl text-red-500" />
              <h2 className="card-title">Phone Number</h2>
              <p className="leading-snug text-slate-500">
                +436764022539<br />
              </p>
            </div>
          </div>
          <div className="text-center shadow-lg card w-96 bg-base-200">
            <div className="items-center card-body">
              <HiBuildingOffice2 className="text-3xl text-amber-500" />
              <h2 className="card-title">Office Address</h2>
              <p className="leading-snug text-slate-500">
                NEUBAUGASSE 71,  <br /> Vienna 1070
              </p>
            </div>
          </div>
        </div>

        {/* Second Section */}
        <div className="flex flex-wrap justify-center gap-8 py-24 mt-16 bg-slate-200">
          <div className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100">
            <div className="card-body">
              <h3 className="font-bold text-center">What's on Your Mind</h3>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="rounded-md input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Subject</span>
                </label>
                <input
                  type="text"
                  placeholder="subject"
                  className="rounded-md input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea
                  row={4}
                  type="text"
                  placeholder="message"
                  className="rounded-md resize-none textarea input-bordered"
                />
              </div>
              <div className="mt-6 form-control">
                <button className="btn">Send</button>
              </div>
            </div>
          </div>
          <div className="">
            <iframe
              className="rounded-lg min-w-[400px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7302.4472076124885!2d90.41465880669234!3d23.775050597965045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c79007cc6675%3A0x7df6b39febb764a3!2sSouth%20Badda%2C%20Dhaka%201212!5e0!3m2!1sen!2sbd!4v1671354397088!5m2!1sen!2sbd"
              height="450"
              title="badda"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
