import React from 'react'
import '../../styles/Profile.module.css';

const Profile = () => {
    return (
        <>
            <div className="grid-container">
                {/* Header */}
                <header className="header">
                    <div className="menu-icon" onclick="openSidebar()">
                        <span className="material-icons-outlined">menu</span>
                    </div>
                    <div className="header-left">
                        <form id="form">
                            <input type="text" id="query" name="q" placeholder="Search..." />
                            <span className="material-icons-outlined">search</span>
                        </form>
                    </div>
                    <div className="header-right">
                        <span className="material-icons-outlined">notifications</span>
                        <span className="material-icons-outlined">email</span>
                        <span className="material-icons-outlined">account_circle</span>
                    </div>
                </header>
                {/* End Header */}
                {/* Sidebar */}
                <aside id="sidebar">
                    <div className="sidebar-title">
                        <div className="sidebar-brand">
                            <span className="material-icons-outlined">inventory</span> Startup
                            Lookup
                        </div>
                        <span className="material-icons-outlined" onclick="closeSidebar()">
                            close
                        </span>
                    </div>
                    <div className="card">
                        <div className="card-inner">
                            <p className="text-primary">data</p>
                            <span className="material-icons-outlined text-green">
                                shopping_cart
                            </span>
                        </div>
                        <span className="text-primary font-weight-bold">79</span>
                    </div>
                    <ul className="sidebar-list">
                        <li className="sidebar-list-item">
                            <span className="material-icons-outlined">dashboard</span> Dashboard
                        </li>
                        <li className="sidebar-list-item">
                            <span className="material-icons-outlined">inventory_2</span> Products
                        </li>
                        <li className="sidebar-list-item">
                            <span className="material-icons-outlined">fact_check</span> Inventory
                        </li>
                        <li className="sidebar-list-item">
                            <span className="material-icons-outlined">add_shopping_cart</span>{" "}
                            Purchase Orders
                        </li>
                        <li className="sidebar-list-item">
                            <span className="material-icons-outlined">shopping_cart</span> Sales
                            Orders
                        </li>
                        <li className="sidebar-list-item">
                            <span className="material-icons-outlined">poll</span> Reports
                        </li>
                        <li className="sidebar-list-item">
                            <span className="material-icons-outlined">settings</span> Settings
                        </li>
                    </ul>
                </aside>
                {/* End Sidebar */}
                {/* Main */}
                <main className="main-container">
                    <div className="main-title">
                        <p className="font-weight-bold">Trending startups</p>
                    </div>
                    <section id="product1" className="section-p1">
                        <div className="pro-container">
                            <div className="pro">
                                <img src="1.jpeg" alt="" />
                                <div className="des">
                                    <span>profile 4</span>
                                    <h5>rggesg</h5>
                                    <div className="star">
                                        <i className="bx bxs-star" />
                                        <i className="bx bxs-star" />
                                        <i className="bx bxs-star" />
                                        <i className="bx bxs-star" />
                                        <i className="bx bxs-star" />
                                    </div>
                                    <h4 />
                                </div>
                                <a href="#">
                                    <i className="bx bxs-cart bxs-cart" />
                                </a>
                            </div>
                            <div className="pro">
                                <img src="2.jpeg" alt="" />
                                <div className="des">
                                    <span>profile 2</span>
                                    <h5 />
                                    <div className="star">
                                        <i className="bx bxs-star" />
                                        <i className="bx bxs-star" />
                                        <i className="bx bxs-star" />
                                        <i className="bx bxs-star" />
                                        <i className="bx bxs-star" />
                                    </div>
                                    <h4 />
                                </div>
                                <a href="#">
                                    <i className="bx bxs-cart bxs-cart" />
                                </a>
                            </div>
                            <div className="pro">
                                <img src="2.jpg" alt="" />
                                <div className="des">
                                    <span>profile 3</span>
                                    <h5 />
                                    <div className="star">
                                        <i className="bx bxs-star" />
                                        <i className="bx bxs-star" />
                                        <i className="bx bxs-star" />
                                        <i className="bx bxs-star" />
                                        <i className="bx bxs-star" />
                                    </div>
                                    <h4 />
                                </div>
                                <a href="#">
                                    <i className="bx bxs-cart bxs-cart" />
                                </a>
                            </div>
                            <div className="pro">
                                <img src="3.jpg" alt="" />
                                <div className="des">
                                    <span>profile 4</span>
                                    <h5 />
                                    <div className="star">
                                        <i className="bx bxs-star" />
                                        <i className="bx bxs-star" />
                                        <i className="bx bxs-star" />
                                        <i className="bx bxs-star" />
                                        <i className="bx bxs-star" />
                                    </div>
                                    <h4 />
                                </div>
                                <a href="#">
                                    <i className="bx bxs-cart bxs-cart" />
                                </a>
                            </div>
                            <div className="pro">
                                <img src="4.jpg" alt="" />
                                <div className="des">
                                    <span>profile 4</span>
                                    <h5 />
                                    <div className="star">
                                        <i className="bx bxs-star" />
                                        <i className="bx bxs-star" />
                                        <i className="bx bxs-star" />
                                        <i className="bx bxs-star" />
                                        <i className="bx bxs-star" />
                                    </div>
                                    <h4 />
                                </div>
                                <a href="#">
                                    <i className="bx bxs-cart bxs-cart" />
                                </a>
                            </div>
                            <div className="pro">
                                <img src="5.jpg" alt="" />
                                <div className="des">
                                    <span>profile 4</span>
                                    <h5 />
                                    <div className="star">
                                        <i className="bx bxs-star" />
                                        <i className="bx bxs-star" />
                                        <i className="bx bxs-star" />
                                        <i className="bx bxs-star" />
                                        <i className="bx bxs-star" />
                                    </div>
                                    <h4 />
                                </div>
                                <a href="#">
                                    <i className="bx bxs-cart bxs-cart" />
                                </a>
                            </div>
                            <div className="pro">
                                <img src="6.jpeg" alt="" />
                                <div className="des">
                                    <span>profile 4</span>
                                    <h5 />
                                    <div className="star">
                                        <i className="bx bxs-star" />
                                        <i className="bx bxs-star" />
                                        <i className="bx bxs-star" />
                                        <i className="bx bxs-star" />
                                        <i className="bx bxs-star" />
                                    </div>
                                    <h4 />
                                </div>
                                <a href="#">
                                    <i className="bx bxs-cart bxs-cart" />
                                </a>
                            </div>
                            <div className="pro">
                                <img src="7.jpg" alt="" />
                                <div className="des">
                                    <span>profile 4</span>
                                    <h5 />
                                    <div className="star">
                                        <i className="bx bxs-star" />
                                        <i className="bx bxs-star" />
                                        <i className="bx bxs-star" />
                                        <i className="bx bxs-star" />
                                        <i className="bx bxs-star" />
                                    </div>
                                    <h4 />
                                </div>
                                <a href="#">
                                    <i className="bx bxs-cart bxs-cart" />
                                </a>
                            </div>
                        </div>
                    </section>
                    <section id="product1" className="section-p1">
                        <h2> New Entrepreneur</h2>
                        <p />
                        <div className="pro-container">
                            <div className="pro1">
                                <img src="n5.jpeg" alt="" />
                                <div className="des">
                                    <span />
                                    <h5 />
                                    <div className="star">
                                        <div className="flex-container">
                                            <div>1</div>
                                            <div>2</div>
                                            <div>3</div>
                                        </div>
                                        <i className="bx bxs-star" />
                                        <i className="bx bxs-star" />
                                        <i className="bx bxs-star" />
                                        <i className="bx bxs-star" />
                                        <i className="bx bxs-star" />
                                    </div>
                                    <h4 />
                                </div>
                                <a href="#">
                                    <i className="bx bxs-cart bxs-cart" />
                                </a>
                            </div>
                            <div className="pro1">
                                <img src="n5.jpeg" alt="" />
                                <div className="des">
                                    <span />
                                    <h5 />
                                    <div className="star">
                                        <i className="bx bxs-star" />
                                        <i className="bx bxs-star" />
                                        <i className="bx bxs-star" />
                                        <i className="bx bxs-star" />
                                        <i className="bx bxs-star" />
                                    </div>
                                    <h4 />
                                </div>
                                <a href="#">
                                    <i className="bx bxs-cart bxs-cart" />
                                </a>
                            </div>
                        </div>
                    </section>
                    <div className="charts">
                        <div className="charts-card">
                            <p className="chart-title">Top 5 Products</p>
                            <div id="bar-chart" />
                        </div>
                        <div className="charts-card">
                            <p className="chart-title">Purchase and Sales Orders</p>
                            <div id="area-chart" />
                        </div>
                    </div>
                </main>
                {/* End Main */}
            </div>

        </>
    )
}

export default Profile