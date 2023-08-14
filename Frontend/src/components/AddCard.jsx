import "../assets/styles/chart.scss"
function AddCard(props) {
  return (
      <div className="col-lg-3 col-md-6 char_col">
      <div className="char_item d-flex flex-row align-items-center justify-content-start">
        <div className="char_icon">
         {props.icon}
        </div>
        <div className="char_content">
          <div className="char_title">{`${props.title}`}</div>
          <div className="char_subtitle">{props.subtitle}</div>
        </div>
      </div>
    </div>
  )
}

export default AddCard