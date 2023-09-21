import React, { Component } from "react";
import "./layout.css";

export default class Layout extends Component {
 constructor(props){
    super(props);
    this.showToggle = this.showToggle.bind(this);
    this.state = {
        toggleActive : true
    }
    
 }


 showToggle(){
    console.log('--called-1-', this.state)
    this.setState({toggleActive : false})
    console.log('---called2--', this.state)
 }

  render() {
    return (
      <div>
        <header
          id="header"
          className="header fixed-top d-flex align-items-center"
        >
          <div className="d-flex align-items-center justify-content-between">
            <a href="index.html" className="logo d-flex align-items-center">
              <img src="assets/img/logo.png" alt="" />
              <span className="d-none d-lg-block">Admin Dashboard</span>
            </a>
            <i className="bi bi-list toggle-sidebar-btn" onClick={this.showToggle}></i>
          </div>

          <div className="search-bar">
            <form
              className="search-form d-flex align-items-center"
              method="POST"
              action="#"
            >
              <input
                type="text"
                name="query"
                placeholder="Search"
                title="Enter search keyword"
              />
              <button type="submit" title="Search">
                <i className="bi bi-search"></i>
              </button>
            </form>
          </div>

          <nav className="header-nav ms-auto">
            <ul className="d-flex align-items-center">
              <li className="nav-item d-block d-lg-none">
                <a className="nav-link nav-icon search-bar-toggle " href="#">
                  <i className="bi bi-search"></i>
                </a>
              </li>

              <li className="nav-item dropdown pe-3">
                <a
                  className="nav-link nav-profile d-flex align-items-center pe-0"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  <span className="d-none d-md-block dropdown-toggle ps-2">
                    Dheeraj Sharma
                  </span>
                </a>

                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                  <li className="dropdown-header">
                    <h6>Dheeraj</h6>
                    <span>Software Engineer</span>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>

                  <li>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="users-profile.html"
                    >
                      <i className="bi bi-person"></i>
                      <span>My Profile</span>
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>

                  <li>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="users-profile.html"
                    >
                      <i className="bi bi-gear"></i>
                      <span>Account Settings</span>
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>

                  <li>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="pages-faq.html"
                    >
                      <i className="bi bi-question-circle"></i>
                      <span>Need Help?</span>
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>

                  <li>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="#"
                    >
                      <i className="bi bi-box-arrow-right"></i>
                      <span>Sign Out</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </header>

        <aside id="sidebar" className="sidebar" style={!this.state.toggleActive ?  {left : '-300px'} : {left : ''} }>
          <ul className="sidebar-nav" id="sidebar-nav">
            <li className="nav-item">
              <a className="nav-link " href="index.html">
                <i className="bi bi-grid"></i>
                <span>Dashboard</span>
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link collapsed"
                data-bs-target="#components-nav"
                data-bs-toggle="collapse"
                href="#"
              >
                <i className="bi bi-menu-button-wide"></i>
                <span>Components</span>
                <i className="bi bi-chevron-down ms-auto"></i>
              </a>
              <ul
                id="components-nav"
                className="nav-content collapse "
                data-bs-parent="#sidebar-nav"
              >
                <li>
                  <a href="components-alerts.html">
                    <i className="bi bi-circle"></i>
                    <span>Alerts</span>
                  </a>
                </li>
                <li>
                  <a href="components-accordion.html">
                    <i className="bi bi-circle"></i>
                    <span>Accordion</span>
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a
                className="nav-link collapsed"
                data-bs-target="#forms-nav"
                data-bs-toggle="collapse"
                href="#"
              >
                <i className="bi bi-journal-text"></i>
                <span>Forms</span>
                <i className="bi bi-chevron-down ms-auto"></i>
              </a>
              <ul
                id="forms-nav"
                className="nav-content collapse "
                data-bs-parent="#sidebar-nav"
              >
                <li>
                  <a href="forms-elements.html">
                    <i className="bi bi-circle"></i>
                    <span>Form Elements</span>
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a
                className="nav-link collapsed"
                data-bs-target="#tables-nav"
                data-bs-toggle="collapse"
                href="#"
              >
                <i className="bi bi-layout-text-window-reverse"></i>
                <span>Tables</span>
                <i className="bi bi-chevron-down ms-auto"></i>
              </a>
              <ul
                id="tables-nav"
                className="nav-content collapse "
                data-bs-parent="#sidebar-nav"
              >
                <li>
                  <a href="tables-general.html">
                    <i className="bi bi-circle"></i>
                    <span>General Tables</span>
                  </a>
                </li>
                <li>
                  <a href="tables-data.html">
                    <i className="bi bi-circle"></i>
                    <span>Data Tables</span>
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a
                className="nav-link collapsed"
                data-bs-target="#charts-nav"
                data-bs-toggle="collapse"
                href="#"
              >
                <i className="bi bi-bar-chart"></i>
                <span>Charts</span>
                <i className="bi bi-chevron-down ms-auto"></i>
              </a>
              <ul
                id="charts-nav"
                className="nav-content collapse "
                data-bs-parent="#sidebar-nav"
              >
                <li>
                  <a href="charts-chartjs.html">
                    <i className="bi bi-circle"></i>
                    <span>Chart.js</span>
                  </a>
                </li>
                <li>
                  <a href="charts-apexcharts.html">
                    <i className="bi bi-circle"></i>
                    <span>ApexCharts</span>
                  </a>
                </li>
                <li>
                  <a href="charts-echarts.html">
                    <i className="bi bi-circle"></i>
                    <span>ECharts</span>
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a
                className="nav-link collapsed"
                data-bs-target="#icons-nav"
                data-bs-toggle="collapse"
                href="#"
              >
                <i className="bi bi-gem"></i>
                <span>Icons</span>
                <i className="bi bi-chevron-down ms-auto"></i>
              </a>
              <ul
                id="icons-nav"
                className="nav-content collapse "
                data-bs-parent="#sidebar-nav"
              >
                <li>
                  <a href="icons-bootstrap.html">
                    <i className="bi bi-circle"></i>
                    <span>Bootstrap Icons</span>
                  </a>
                </li>
                <li>
                  <a href="icons-remix.html">
                    <i className="bi bi-circle"></i>
                    <span>Remix Icons</span>
                  </a>
                </li>
                <li>
                  <a href="icons-boxicons.html">
                    <i className="bi bi-circle"></i>
                    <span>Boxicons</span>
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-heading">Pages</li>

            <li className="nav-item">
              <a className="nav-link collapsed" href="users-profile.html">
                <i className="bi bi-person"></i>
                <span>Profile</span>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link collapsed" href="pages-faq.html">
                <i className="bi bi-question-circle"></i>
                <span>F.A.Q</span>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link collapsed" href="pages-contact.html">
                <i className="bi bi-envelope"></i>
                <span>Contact</span>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link collapsed" href="pages-register.html">
                <i className="bi bi-card-list"></i>
                <span>Register</span>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link collapsed" href="pages-login.html">
                <i className="bi bi-box-arrow-in-right"></i>
                <span>Login</span>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link collapsed" href="pages-error-404.html">
                <i className="bi bi-dash-circle"></i>
                <span>Error 404</span>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link collapsed" href="pages-blank.html">
                <i className="bi bi-file-earmark"></i>
                <span>Blank</span>
              </a>
            </li>
          </ul>
        </aside>

        <main id="main" className="main">
          <section className="section dashboard">
            <div className="row">
              <div className="col-lg-8">
                <div className="row">
                  <div className="col-xxl-4 col-md-6">
                    <div className="card info-card sales-card">
                      <div className="filter">
                        <a className="icon" href="#" data-bs-toggle="dropdown">
                          <i className="bi bi-three-dots"></i>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                          <li className="dropdown-header text-start">
                            <h6>Filter</h6>
                          </li>

                          <li>
                            <a className="dropdown-item" href="#">
                              Today
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              This Month
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              This Year
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div className="card-body">
                        <h5 className="card-title">
                          Sales <span>| Today</span>
                        </h5>

                        <div className="d-flex align-items-center">
                          <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                            <i className="bi bi-cart"></i>
                          </div>
                          <div className="ps-3">
                            <h6>145</h6>
                            <span className="text-success small pt-1 fw-bold">
                              12%
                            </span>{" "}
                            <span className="text-muted small pt-2 ps-1">
                              increase
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xxl-4 col-md-6">
                    <div className="card info-card revenue-card">
                      <div className="filter">
                        <a className="icon" href="#" data-bs-toggle="dropdown">
                          <i className="bi bi-three-dots"></i>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                          <li className="dropdown-header text-start">
                            <h6>Filter</h6>
                          </li>

                          <li>
                            <a className="dropdown-item" href="#">
                              Today
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              This Month
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              This Year
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div className="card-body">
                        <h5 className="card-title">
                          Revenue <span>| This Month</span>
                        </h5>

                        <div className="d-flex align-items-center">
                          <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                            <i className="bi bi-currency-dollar"></i>
                          </div>
                          <div className="ps-3">
                            <h6>$3,264</h6>
                            <span className="text-success small pt-1 fw-bold">
                              8%
                            </span>{" "}
                            <span className="text-muted small pt-2 ps-1">
                              increase
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xxl-4 col-xl-12">
                    <div className="card info-card customers-card">
                      <div className="filter">
                        <a className="icon" href="#" data-bs-toggle="dropdown">
                          <i className="bi bi-three-dots"></i>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                          <li className="dropdown-header text-start">
                            <h6>Filter</h6>
                          </li>

                          <li>
                            <a className="dropdown-item" href="#">
                              Today
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              This Month
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              This Year
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div className="card-body">
                        <h5 className="card-title">
                          Customers <span>| This Year</span>
                        </h5>

                        <div className="d-flex align-items-center">
                          <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                            <i className="bi bi-people"></i>
                          </div>
                          <div className="ps-3">
                            <h6>1244</h6>
                            <span className="text-danger small pt-1 fw-bold">
                              12%
                            </span>{" "}
                            <span className="text-muted small pt-2 ps-1">
                              decrease
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="card">
                      <div className="filter">
                        <a className="icon" href="#" data-bs-toggle="dropdown">
                          <i className="bi bi-three-dots"></i>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                          <li className="dropdown-header text-start">
                            <h6>Filter</h6>
                          </li>

                          <li>
                            <a className="dropdown-item" href="#">
                              Today
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              This Month
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              This Year
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div className="card-body">
                        <h5 className="card-title">
                          Reports <span>/Today</span>
                        </h5>

                        <div id="reportsChart"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="card">
                  <div className="filter">
                    <a className="icon" href="#" data-bs-toggle="dropdown">
                      <i className="bi bi-three-dots"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li className="dropdown-header text-start">
                        <h6>Filter</h6>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#">
                          Today
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          This Month
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          This Year
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="card-body">
                    <h5 className="card-title">
                      Recent Activity <span>| Today</span>
                    </h5>

                    <div className="activity"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer id="footer" className="footer">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>Dheeraj</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits">
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </footer>
      </div>
    );
  }
}
