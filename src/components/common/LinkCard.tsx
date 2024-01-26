// @ts-nocheck
const LinkCard = ({ href, size, Component }) => {
  return (
    <a href={href} rel="noreferrer" target="_blank">
      <Component
        className="hover:-translate-y-1 transition-transform cursor-pointer"
        size={size}
      />
    </a>
  );
};

export default LinkCard;
