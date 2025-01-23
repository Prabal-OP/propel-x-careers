const CTA = () => (
  <SectionWrapper>
    <div className="custom-screen"></div>
  </SectionWrapper>
);

const SectionWrapper = ({ children, ...props }: any) => (
  <section {...props} className={`py-16 ${props.className || ""}`}>
    {children}
  </section>
);

export default CTA;
