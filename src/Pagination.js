function Pagination(props) {

  return (
    <div className="topbar-filter">
      <div className="pagination2">
        <span>Page {props.page} of {props.total}:</span>
        <a className="active" href="#">1</a>
        <a href="#">2</a>
        <a href="#"><i className="ion-arrow-right-b"></i></a>
      </div>
    </div>
  )

}


export default Pagination;