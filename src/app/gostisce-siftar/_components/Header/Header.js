import "../../../../../dist/output.css";

export const Header36 = () => {
  return (
    <section
      id="relume"
      className="grid grid-cols-1 items-center gap-y-16 pt-16 md:pt-24 lg:grid-cols-2 lg:pt-0"
    >
      <div className="mx-[5%] sm:max-w-md md:justify-self-start lg:ml-[5vw] lg:mr-20 lg:justify-self-end">
        <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl neue">
          Gostišče Šiftar
        </h1>
        <p className="md:text-md neue gray-text">
          V Gostišču Šiftar pripravljamo bogate okuse Slovenije v naši gurmanski
          kuhinji. Vsaka jed je pripravljena po tradicionalnih receptih in z
          najkakovostnejšimi lokalnimi sestavinami, kar zagotavlja nepozabno
          kulinarično izkušnjo. Poleg tega ponujamo tudi tedenske malice, ki so
          popoln prigrizek za vaše vsakodnevne potrebe.
        </p>
        <div className="res-now-row">
          <p className="res-p">Preglej jedilnik</p>
          <img
            alt="logo"
            className="arrow-r"
            src="/Images/right-arrow-alt.svg"
          />
        </div>
        <div className="mt-6 flex flex-wrap gap-4 md:mt-8"></div>
      </div>
      <div>
        <img
          src="/Images/g9.webp"
          alt="gostisce"
          className="w-full object-cover lg:h-screen lg:max-h-[60rem]"
        />
      </div>
    </section>
  );
};
