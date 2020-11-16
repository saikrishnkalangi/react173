import React, { Component } from 'react'

 class Signup extends Component {
   

    constructor(props){
super(props);
this.state= {
    name:' ',
email:'',
city:'',
course:'',
phone:''

}
    }



    HandleNameInput=(e)=>{
      this.setState({ name: e.target.value})
    }


    HandleEmailInput=(e)=>{
      this.setState({ email: e.target.value})
    }

    HandleCityInput=(e)=>{
      this.setState({ city: e.target.value})
    }

    HandleCourseInput=(e)=>{
      this.setState({ course: e.target.value})
    }

    HandlePhoneInput=(e)=>{
      this.setState({ phone: e.target.value})
    }



    HandleSubmitForm=()=>{
      alert(`${this.state.name}
      -${this.state.email}
      -${this.state.city}
      -${this.state.course}
      
      -${this.state.phone}`);

    }

    render() {
        return (
            <div className="container p-5">

           {this.state.name}
            <form>



            <div class="form-group">
            <label>Name</label>
            <input type="text" className="form-control"
              value={this.state.name}
              onChange={this.HandleNameInput.bind(this)} />
            </div>


            <div class="form-group">
            <label>Email</label>
            <input type="email" className="form-control"
              value={this.state.email}
              onChange={this.HandleEmailInput.bind(this)} />
            </div>

            <div class="form-group">
            <label>city</label>
            <input type="text" className="form-control"
              value={this.state.city}
              onChange={this.HandleCityInput.bind(this)} />
            </div>

            <div class="form-group">
            <label>Course</label>
            <input type="text" className="form-control"
              value={this.state.course}
              onChange={this.HandleCourseInput.bind(this)} />
            </div>

            <div class="form-group">
            <label>Phone</label>
            <input type="number" className="form-control"
              value={this.state.phone}
              onChange={this.HandlePhoneInput.bind(this)} />
            </div>
          


            <button type="button"
             class="btn btn-primary"
             onClick={this.HandleSubmitForm}>Submit</button>
          </form>   
            </div>
        )
    }
}
export default Signup