const TagButton = ({ href = "#0", text }) => {
  return (
    <a href={href} className="TagButton">
      {text}
    </a>
  );
};

export default TagButton;
