import "./Progress.css"

const Progress = () => {
  return (
    <div className="progress">
      <div className="progress-container">
        <div className="progress-box1">
          <div className="progress-box1-top">
            <p>₹ 647,400</p>
            <p>All Earning</p>
          </div>
          <div className="progress-box1-bottom">
            <a>view details</a>
          </div>
        </div>
        <div className="progress-box2">
          <div className="progress-box2-top">
            <p>290+</p>
            <p>Page View</p>
          </div>
          <div className="progress-box2-bottom">
            <a>view details</a>
          </div>
        </div>
        <div className="progress-box3">
          <div className="progress-box3-top">
            <p>500+</p>
            <p>Downloads</p>
          </div>
          <div className="progress-box3-bottom">
            <a>view details</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Progress
