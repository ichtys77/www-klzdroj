import React from 'react';

import Layout from '../components/Layout';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import pic4 from '../assets/images/pic04.jpg';
import pic5 from '../assets/images/pic05.jpg';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>Galeria</h2>
        <p>Aliquam ut ex ut interdum donec amet imperdiet eleifend</p>
      </header>
      <section className="wrapper style5">
        <div className="inner">
        <div className="box alt">
						<div className="row gtr-50 gtr-uniform">
							<div className="col-4"><span className="image fit"><img src={pic1} alt="" /></span></div>
							<div className="col-4"><span className="image fit"><img src={pic2} alt="" /></span></div>
							<div className="col-4"><span className="image fit"><img src={pic3} alt="" /></span></div>
							<div className="col-4"><span className="image fit"><img src={pic3} alt="" /></span></div>
							<div className="col-4"><span className="image fit"><img src={pic2} alt="" /></span></div>
							<div className="col-4"><span className="image fit"><img src={pic1} alt="" /></span></div>
							<div className="col-4"><span className="image fit"><img src={pic2} alt="" /></span></div>
							<div className="col-4"><span className="image fit"><img src={pic1} alt="" /></span></div>
							<div className="col-4"><span className="image fit"><img src={pic3} alt="" /></span></div>
						</div>
					</div>
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;
