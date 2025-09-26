import LilHubIcon from "@/icons/lilhub.svg";
export default function Page() {
  return (
    <div>
      <section className="py-20">
        <div>
          <h2>Hi, i am Leko bebei, I am Leko Beberi.</h2>
          <p>
            From Tbilisi, Georgia. Front end developer , passionate about
            building accessible and user-friendly websites.{" "}
          </p>
        </div>
        <div>
          <button> CONTACT ME </button>
          <button>
            <LilHubIcon width={26} height={26} aria-label="Github" />
          </button>
        </div>
      </section>
    </div>
  );
}
