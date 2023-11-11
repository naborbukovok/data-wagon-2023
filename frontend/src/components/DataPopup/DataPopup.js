import "./DataPopup.css";

function DataPopup(props) {
  const { position } = props;

  return (
    <div className={`data-popup data-popup_position_${position}`}>
    </div>
  );
}

export default DataPopup;
