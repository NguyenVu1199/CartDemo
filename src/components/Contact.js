import React, { Component } from "react";
import { Link } from "react-router-dom";
class Contact extends Component {
  render() {
    return (
        <div>
        <div className="row mx-auto">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.473663078453!2d105.7329181148137!3d21.05373599230131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31345457e292d5bf%3A0x20ac91c94d74439a!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2hp4buHcCBIw6AgTuG7mWk!5e0!3m2!1svi!2s!4v1618380068239!5m2!1svi!2s" width="100%" height="450" allowfullscreen="" loading="lazy"></iframe>
        </div>
      <div className="row mt-5">
        <div className="col-6">
          <form onSubmit={this.onSave}>
            <div className="form-group">
              <label>Username</label>
              <input type="text" className="form-control" name="email" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="text" className="form-control" name="name" />
            </div>
            <div className="form-group">
              <label>Content</label>
              <textarea className="form-control" name="password" />
            </div>
            <Link to="/" className="btn btn-info mr-2">
            Send Message
            </Link>
          </form>
        </div>
        <div className="col-6">
            <a href="/" className="logo">				
				  <img src="//bizweb.dktcdn.net/100/047/633/themes/814480/assets/logo.png?1617159062074" alt="DKT Store" title="DKT Store" className="img-responsive"></img>	  
			</a>
            <br></br>
            <br></br>
            <p>Được thành lập vào ngày 20/08/2008 với niềm đam mê và khát vọng thành công trong lĩnh vực thương mại điện tử.</p>
			
            <p><i className="fa fa-map-marker"></i>266 Đội Cấn, Ba Đình, Hà Nội</p>
			<p><i className="fa fa-phone"></i><a href="tel:012344555666">012344555666</a></p>
            <p><i className="fa fa-envelope"></i><a href="mailto:aventteam@gmail.com">aventteam@gmail.com</a></p>
        </div>
      </div>
      
      </div>
    );
  }
}
export default Contact;
