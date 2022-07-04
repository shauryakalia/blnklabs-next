import Image from "next/image";
export default function LastPage({ data }) {
  const { endText, endImage } = data;
  return (
    <div className="lastSection">
      <div className="d-flex justify-content-end textRight">
        <p className="col-md-8 h5 p-4 textDark mt-4">{endText}</p>
      </div>

      <div className="lastImageSection p-3 d-flex justify-content-between align-items-start">
        <div className="verticalText col-md-1 text-center">
          FOR MORE INFO <i className="bi bi-arrow-down"></i>
        </div>
        <div className="col-md-11">
          <Image
            src={endImage}
            width="1400"
            height="700"
            alt="ourStory-1"
            className="mt-5 shadow"
            loading="lazy"
          />
        </div>
      </div>
      <div className="mb-5 p-3 w-100">
        <p>DETAILS</p>
        <span className="d-block text-right">info.blnklabs.com </span>
        <span className="d-block text-right">
          Phone no. 8650419419, 9164660069
        </span>
      </div>
    </div>
  );
}
