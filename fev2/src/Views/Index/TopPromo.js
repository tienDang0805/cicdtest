import React, { Component } from "react";
import { GetListTopPromo } from "../../services/Product";
import CustomeSlider from "../../components/Slider";

export default class TopPromo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      promos: [],
    };
  }

  async componentDidMount() {
    await GetListTopPromo()
      .then((res) => {
        this.setState({ promos: res.data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="recent-product product">
        <div className="container-fluid">
          <div className="section-header">
            <h1>HÀNG KHUYẾN MÃI</h1>
            <CustomeSlider data={this.state.promos && this.state.promos}/>
          </div>
          <div id="hang-khuyen-mai" className="row align-items-center"></div>
        </div>
      </div>
    );
  }
}
