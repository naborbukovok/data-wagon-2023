import "./DataPopup.css";

function DataPopup(props) {
  const { position, markup } = props;

  return (
    <div className={`data-popup data-popup_position_${position}`}>
      {markup}
    </div>
  );
}

export default DataPopup;
