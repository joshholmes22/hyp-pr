import Script from "next/script";

function Booking() {
  return (
    <div
      className="flex flex-col items-center md:items-start px-3"
      id="contact"
    >
      <h2 className="text-5xl pt-3 text-custom-white text-center mx-auto">
        Contact Us
      </h2>
      <p className="text-custom-white text-lg pt-4 pb-3 md:pl-8 text-center mx-auto">
        If you have any questions or would like to learn more about our
        services, you can get in touch via our email{" "}
        <a href="mailto:ryan@hyp-pr.com" className="underline">
          ryan@hyp-pr.com
        </a>{" "}
        or book in a free 30 minute consultation call from the calendal link
        below:
      </p>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
      <div
        className="calendly-inline-widget w-full" // Set width to 100%
        data-url="https://calendly.com/hyppr/60-minute-meeting-with-ryan"
        style={{ height: "850px" }} // Removed minWidth
      />
    </div>
  );
}

export default Booking;
