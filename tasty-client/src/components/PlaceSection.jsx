const PlaceSection = ({ title, children }) => (
  <section className="mb-12">
    <h2 className="text-xl font-semibold mb-4 text-center text-gray-800">
      {title}
    </h2>
    {children}
  </section>
);

export default PlaceSection;
