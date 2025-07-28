const PlaceSection = ({ title, children }) => (
  <section className="mb-12">
    <h2 className="text-xl p-4 font-semibold mb-4 text-center text-sky-300">
      {title}
    </h2>
    {children}
  </section>
);

export default PlaceSection;
