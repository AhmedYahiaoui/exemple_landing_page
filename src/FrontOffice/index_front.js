import React, { Component } from 'react';
import './Style/bootstrap.min.css';
import './Style/style.css';
import { Modal, Col, Button, Form, Alert } from 'react-bootstrap'
import { Container, Row } from "react-bootstrap";
import Axios from 'axios'
import Login from '../FrontOffice/components/Login'

export class index_front extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            auth: false,
            user: [],
            userinvalid: false,
            register: false,
            showSignIn: false,
            showSignUp: false,
            loginVerif: ''
        }
    }

    componentDidMount() {

        const user = JSON.parse(localStorage.getItem("user"));
        if (user !== null) {
            localStorage.setItem("Token", user.Token);
            this.setState({ auth: true })
            this.setState({ user: user });
            this.setState({ role: user.role });
        }
    }

    handleCloseSignIn = () => {
        this.setState({
            showSignIn: false
        });
    }
    handleShowSignIn = () => {
        this.setState({
            showSignIn: true
        });
    }
    handleCloseSignUp = () => {
        this.setState({
            showSignUp: false
        });
    }
    handleShowSignUp = () => {
        this.setState({
            showSignUp: true
        });
    }

    handleLogin() {
        Axios.post("https://localhost:44338/Auth/Login", { email: this.state.username, password: this.state.password })
            .then(res => res.data).then(response => {
                console.log('response => ');
                console.log(response);


                // if (response.status === 200) {
                //     localStorage.setItem("Token", response.Token)
                //     localStorage.setItem("user", JSON.stringify(response));
                //     this.setState({ auth: true })
                //     this.setState({ user: response.User })
                // }

                // if (response.message === "Invalid Password!" || response.status === 402) {
                //     console.log('Invalid Password!');
                //     this.setState({
                //         userinvalid: true,
                //         loginVerif: 'Invalid Password ! Check your password'
                //     });
                // }

                // if (response.message === "User Not found" || response.status === 401) {
                //     console.log('User Not found');
                //     this.setState({
                //         userinvalid: true,
                //         loginVerif: 'User Not found!  Check your email'
                //     });
                // }

                // else if (response.status === 500) {
                //     console.log('500 internal');
                //     this.setState({
                //         userinvalid: true,
                //     });
                // }
            })
    }

    handleRegiser() {
        Axios.post("http://localhost:4200/signup",
            {
                username: this.state.username,
                password: this.state.password

            })
            .then(res => res.data).then(response => {

                if (response !== "Erreur") {
                    console.log('token', response.token);
                    console.log('user JSON', JSON.stringify(response));
                    console.log('user response', response);
                }
                else { this.setState({ userinvalid: true }) }
            })
    }

    handleGoogle() {
        Axios.post("https://localhost:44338/Auth/google-login",null
            // {
            //     username: this.state.username,
            //     password: this.state.password

            // }
            )
            .then(res => res.data).then(response => {
                console.log('response', response);
            }).catch(res=>res.data).then(response =>{
                console.log('Catch ', response);
            })
    }
    

    render() {
        const { loginVerif } = this.state;

        return (

            <div>
                <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet" />

                <body data-bs-spy="scroll" data-bs-target="#navbar" data-bs-offset="100">

                    <header id="header" class="header fixed-top">
                        <div class="container-fluid container-xl d-flex align-items-center justify-content-between">

                            <a href="" class="logo d-flex align-items-center">
                                <img src="images/Front/logo.png" alt="" />
                                <span>YepYou</span>
                            </a>

                            <nav id="navbar" class="navbar">
                                <ul>
                                    <li><a class="nav-link active " href="#">Home</a></li>
                                    <li><a class="nav-link scrollto" href="#about">About</a></li>
                                    <li><a class="nav-link scrollto" href="#services">Services</a></li>
                                    <li><a class="nav-link scrollto" href="#pricing">pricing</a></li>
                                    <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
                                    <li><a class="nav-link scrollto" href="#contact"></a></li>
                                    <li><button class="btn btn-outline-primary" onClick={this.handleShowSignIn} >Sign In</button></li>
                                    &nbsp; &nbsp;
                                    <li><button class="btn btn-outline-primary" onClick={this.handleShowSignUp} >Sign Up</button></li>
                                    &nbsp; &nbsp;
                                    <li><button class="btn btn-outline-primary" onClick={this.handleGoogle} >Google</button></li>
                                </ul>
                            </nav>
                        </div>
                    </header>
                    <section id="hero" class="hero d-flex align-items-center">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-6 d-flex flex-column justify-content-center">
                                    <h1 data-aos="fade-up">We offer modern solutions for growing your business</h1>
                                    <h2 data-aos="fade-up" data-aos-delay="400">We are team of talented designers making websites with Bootstrap</h2>
                                    <div data-aos="fade-up" data-aos-delay="600">
                                        <div class="text-center text-lg-start">
                                            <a href="#about" class="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                                                <span>Get Started</span>
                                                <i class="bi bi-arrow-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div data-aos="fade-up" data-aos-delay="600">
                                        <div class="text-center text-lg-start">
                                            <Login/>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="200">
                                    <img src="images/Front/hero-img.png" class="img-fluid" alt="" />
                                </div>
                            </div>
                        </div>
                    </section>

                    <div id="main">
                        <section id="about" class="about">
                            <div class="container" data-aos="fade-up">
                                <div class="row gx-0">


                                    <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
                                        <img src="images/aot_bulb.gif" class="img-fluid" alt="" />
                                    </div>

                                </div>
                            </div>

                        </section>


                        <section id="values" class="values">

                            <div class="container" data-aos="fade-up">

                                <header class="section-header">
                                    <h2>Our Values</h2>
                                    <p>Odit est perspiciatis laborum et dicta</p>
                                </header>

                                <div class="row">

                                    <div class="col-lg-4">
                                        <div class="box" data-aos="fade-up" data-aos-delay="200">
                                            <img src="images/Front/values-1.png" class="img-fluid" alt="" />
                                            <h3>Ad cupiditate sed est odio</h3>
                                            <p>Eum ad dolor et. Autem aut fugiat debitis voluptatem consequuntur sit. Et veritatis id.</p>
                                        </div>
                                    </div>

                                    <div class="col-lg-4 mt-4 mt-lg-0">
                                        <div class="box" data-aos="fade-up" data-aos-delay="400">
                                            <img src="images/Front/values-2.png" class="img-fluid" alt="" />
                                            <h3>Voluptatem voluptatum alias</h3>
                                            <p>Repudiandae amet nihil natus in distinctio suscipit id. Doloremque ducimus ea sit non.</p>
                                        </div>
                                    </div>

                                    <div class="col-lg-4 mt-4 mt-lg-0">
                                        <div class="box" data-aos="fade-up" data-aos-delay="600">
                                            <img src="images/Front/values-3.png" class="img-fluid" alt="" />
                                            <h3>Fugit cupiditate alias nobis.</h3>
                                            <p>Quam rem vitae est autem molestias explicabo debitis sint. Vero aliquid quidem commodi.</p>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </section>


                        <section id="features" class="features">

                            <div class="container" data-aos="fade-up">

                                <header class="section-header">
                                    <h2>Features</h2>
                                    <p>Laboriosam et omnis fuga quis dolor direda fara</p>
                                </header>

                                <div class="row">

                                    <div class="col-lg-6">
                                        <img src="images/aot.gif" class="img-fluid" alt="" />
                                    </div>

                                    <div class="col-lg-6 mt-5 mt-lg-0 d-flex">
                                        <div class="row align-self-center gy-4">

                                            <div class="col-md-6" data-aos="zoom-out" data-aos-delay="200">
                                                <div class="feature-box d-flex align-items-center">
                                                    <i class="bi bi-check"></i>
                                                    <h3>Eos aspernatur rem</h3>
                                                </div>
                                            </div>

                                            <div class="col-md-6" data-aos="zoom-out" data-aos-delay="300">
                                                <div class="feature-box d-flex align-items-center">
                                                    <i class="bi bi-check"></i>
                                                    <h3>Facilis neque ipsa</h3>
                                                </div>
                                            </div>

                                            <div class="col-md-6" data-aos="zoom-out" data-aos-delay="400">
                                                <div class="feature-box d-flex align-items-center">
                                                    <i class="bi bi-check"></i>
                                                    <h3>Volup amet voluptas</h3>
                                                </div>
                                            </div>

                                            <div class="col-md-6" data-aos="zoom-out" data-aos-delay="500">
                                                <div class="feature-box d-flex align-items-center">
                                                    <i class="bi bi-check"></i>
                                                    <h3>Rerum omnis sint</h3>
                                                </div>
                                            </div>

                                            <div class="col-md-6" data-aos="zoom-out" data-aos-delay="600">
                                                <div class="feature-box d-flex align-items-center">
                                                    <i class="bi bi-check"></i>
                                                    <h3>Alias possimus</h3>
                                                </div>
                                            </div>

                                            <div class="col-md-6" data-aos="zoom-out" data-aos-delay="700">
                                                <div class="feature-box d-flex align-items-center">
                                                    <i class="bi bi-check"></i>
                                                    <h3>Repellendus mollitia</h3>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>

                                <div class="row feture-tabs" data-aos="fade-up">
                                    <div class="col-lg-6">
                                        <h3>Neque officiis dolore maiores et exercitationem quae est seda lidera pat claero</h3>


                                        <ul class="nav nav-pills mb-3">
                                            <li>
                                                <a class="nav-link active" data-bs-toggle="pill" href="#tab1">Saepe fuga</a>
                                            </li>
                                            <li>
                                                <a class="nav-link" data-bs-toggle="pill" href="#tab2">Voluptates</a>
                                            </li>
                                            <li>
                                                <a class="nav-link" data-bs-toggle="pill" href="#tab3">Corrupti</a>
                                            </li>
                                        </ul>
                                        <div class="tab-content">

                                            <div class="tab-pane fade show active" id="tab1">
                                                <p>Consequuntur inventore voluptates consequatur aut vel et. Eos doloribus expedita. Sapiente atque consequatur minima nihil quae aspernatur quo suscipit voluptatem.</p>
                                                <div class="d-flex align-items-center mb-2">
                                                    <i class="bi bi-check2"></i>
                                                    <h4>Repudiandae rerum velit modi et officia quasi facilis</h4>
                                                </div>
                                                <p>Laborum omnis voluptates voluptas qui sit aliquam blanditiis. Sapiente minima commodi dolorum non eveniet magni quaerat nemo et.</p>
                                                <div class="d-flex align-items-center mb-2">
                                                    <i class="bi bi-check2"></i>
                                                    <h4>Incidunt non veritatis illum ea ut nisi</h4>
                                                </div>
                                                <p>Non quod totam minus repellendus autem sint velit. Rerum debitis facere soluta tenetur. Iure molestiae assumenda sunt qui inventore eligendi voluptates nisi at. Dolorem quo tempora. Quia et perferendis.</p>
                                            </div>

                                            <div class="tab-pane fade show" id="tab2">
                                                <p>Consequuntur inventore voluptates consequatur aut vel et. Eos doloribus expedita. Sapiente atque consequatur minima nihil quae aspernatur quo suscipit voluptatem.</p>
                                                <div class="d-flex align-items-center mb-2">
                                                    <i class="bi bi-check2"></i>
                                                    <h4>Repudiandae rerum velit modi et officia quasi facilis</h4>
                                                </div>
                                                <p>Laborum omnis voluptates voluptas qui sit aliquam blanditiis. Sapiente minima commodi dolorum non eveniet magni quaerat nemo et.</p>
                                                <div class="d-flex align-items-center mb-2">
                                                    <i class="bi bi-check2"></i>
                                                    <h4>Incidunt non veritatis illum ea ut nisi</h4>
                                                </div>
                                                <p>Non quod totam minus repellendus autem sint velit. Rerum debitis facere soluta tenetur. Iure molestiae assumenda sunt qui inventore eligendi voluptates nisi at. Dolorem quo tempora. Quia et perferendis.</p>
                                            </div>

                                            <div class="tab-pane fade show" id="tab3">
                                                <p>Consequuntur inventore voluptates consequatur aut vel et. Eos doloribus expedita. Sapiente atque consequatur minima nihil quae aspernatur quo suscipit voluptatem.</p>
                                                <div class="d-flex align-items-center mb-2">
                                                    <i class="bi bi-check2"></i>
                                                    <h4>Repudiandae rerum velit modi et officia quasi facilis</h4>
                                                </div>
                                                <p>Laborum omnis voluptates voluptas qui sit aliquam blanditiis. Sapiente minima commodi dolorum non eveniet magni quaerat nemo et.</p>
                                                <div class="d-flex align-items-center mb-2">
                                                    <i class="bi bi-check2"></i>
                                                    <h4>Incidunt non veritatis illum ea ut nisi</h4>
                                                </div>
                                                <p>Non quod totam minus repellendus autem sint velit. Rerum debitis facere soluta tenetur. Iure molestiae assumenda sunt qui inventore eligendi voluptates nisi at. Dolorem quo tempora. Quia et perferendis.</p>
                                            </div>

                                        </div>

                                    </div>

                                    <div class="col-lg-6">
                                        <img src="images/Front/features-2.png" class="img-fluid" alt="" />
                                    </div>

                                </div>

                                <div class="row feature-icons" data-aos="fade-up">
                                    <h3>Ratione mollitia eos ab laudantium rerum beatae quo</h3>

                                    <div class="row">

                                        <div class="col-xl-4 text-center" data-aos="fade-right" data-aos-delay="100">
                                            <img src="images/Front/features-3.png" class="img-fluid p-4" alt="" />
                                        </div>

                                        <div class="col-xl-8 d-flex content">
                                            <div class="row align-self-center gy-4">

                                                <div class="col-md-6 icon-box" data-aos="fade-up">
                                                    <i class="ri-line-chart-line"></i>
                                                    <div>
                                                        <h4>Corporis voluptates sit</h4>
                                                        <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                                                    </div>
                                                </div>

                                                <div class="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                                                    <i class="ri-stack-line"></i>
                                                    <div>
                                                        <h4>Ullamco laboris nisi</h4>
                                                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                                                    </div>
                                                </div>

                                                <div class="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                                                    <i class="ri-brush-4-line"></i>
                                                    <div>
                                                        <h4>Labore consequatur</h4>
                                                        <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                                                    </div>
                                                </div>

                                                <div class="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
                                                    <i class="ri-magic-line"></i>
                                                    <div>
                                                        <h4>Beatae veritatis</h4>
                                                        <p>Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</p>
                                                    </div>
                                                </div>

                                                <div class="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">
                                                    <i class="ri-command-line"></i>
                                                    <div>
                                                        <h4>Molestiae dolor</h4>
                                                        <p>Et fuga et deserunt et enim. Dolorem architecto ratione tensa raptor marte</p>
                                                    </div>
                                                </div>

                                                <div class="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="500">
                                                    <i class="ri-radar-line"></i>
                                                    <div>
                                                        <h4>Explicabo consectetur</h4>
                                                        <p>Est autem dicta beatae suscipit. Sint veritatis et sit quasi ab aut inventore</p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </section>


                        <section id="services" class="services">

                            <div class="container" data-aos="fade-up">

                                <header class="section-header">
                                    <h2>Services</h2>
                                    <p>Veritatis et dolores facere numquam et praesentium</p>
                                </header>

                                <div class="row gy-4">

                                    <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                                        <div class="service-box blue">
                                            <i class="ri-discuss-line icon"></i>
                                            <h3>Nesciunt Mete</h3>
                                            <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.</p>
                                            <a href="#" class="read-more"><span>Read More</span> <i class="bi bi-arrow-right"></i></a>
                                        </div>
                                    </div>

                                    <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                                        <div class="service-box orange">
                                            <i class="ri-discuss-line icon"></i>
                                            <h3>Eosle Commodi</h3>
                                            <p>Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.</p>
                                            <a href="#" class="read-more"><span>Read More</span> <i class="bi bi-arrow-right"></i></a>
                                        </div>
                                    </div>

                                    <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
                                        <div class="service-box green">
                                            <i class="ri-discuss-line icon"></i>
                                            <h3>Ledo Markt</h3>
                                            <p>Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.</p>
                                            <a href="#" class="read-more"><span>Read More</span> <i class="bi bi-arrow-right"></i></a>
                                        </div>
                                    </div>

                                    <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
                                        <div class="service-box red">
                                            <i class="ri-discuss-line icon"></i>
                                            <h3>Asperiores Commodi</h3>
                                            <p>Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.</p>
                                            <a href="#" class="read-more"><span>Read More</span> <i class="bi bi-arrow-right"></i></a>
                                        </div>
                                    </div>

                                    <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
                                        <div class="service-box purple">
                                            <i class="ri-discuss-line icon"></i>
                                            <h3>Velit Doloremque.</h3>
                                            <p>Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.</p>
                                            <a href="#" class="read-more"><span>Read More</span> <i class="bi bi-arrow-right"></i></a>
                                        </div>
                                    </div>

                                    <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="700">
                                        <div class="service-box pink">
                                            <i class="ri-discuss-line icon"></i>
                                            <h3>Dolori Architecto</h3>
                                            <p>Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.</p>
                                            <a href="#" class="read-more"><span>Read More</span> <i class="bi bi-arrow-right"></i></a>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </section>


                        <section id="pricing" class="pricing">

                            <div class="container" data-aos="fade-up">

                                <header class="section-header">
                                    <h2>Pricing</h2>
                                    <p>Check our Pricing</p>
                                </header>

                                <div class="row gy-4" data-aos="fade-left">

                                    <div class="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="100">
                                        <div class="box">
                                            <h3 color="#07d5c0">Free Plan</h3>
                                            <div class="price"><sup>$</sup>0<span>/mo</span></div>
                                            <img src="images/Front/pricing-free.png" class="img-fluid" alt="" />
                                            <ul>
                                                <li>Aida dere</li>
                                                <li>Nec feugiat nisl</li>
                                                <li>Nulla at volutpat dola</li>
                                                <li class="na">Pharetra massa</li>
                                                <li class="na">Massa ultricies mi</li>
                                            </ul>
                                            <a href="#" class="btn-buy">Buy Now</a>
                                        </div>
                                    </div>

                                    <div class="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="200">
                                        <div class="box">
                                            <span class="featured">Featured</span>
                                            {/* <h3 style="color: #65c600;">Starter Plan</h3> */}
                                            <div class="price"><sup>$</sup>19<span>/mo</span></div>
                                            <img src="images/Front/pricing-starter.png" class="img-fluid" alt="" />
                                            <ul>
                                                <li>Aida dere</li>
                                                <li>Nec feugiat nisl</li>
                                                <li>Nulla at volutpat dola</li>
                                                <li>Pharetra massa</li>
                                                <li class="na">Massa ultricies mi</li>
                                            </ul>
                                            <a href="#" class="btn-buy">Buy Now</a>
                                        </div>
                                    </div>

                                    <div class="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="300">
                                        <div class="box">
                                            {/* <h3 style="color: #ff901c;">Business Plan</h3> */}
                                            <div class="price"><sup>$</sup>29<span>/mo</span></div>
                                            <img src="images/Front/pricing-business.png" class="img-fluid" alt="" />
                                            <ul>
                                                <li>Aida dere</li>
                                                <li>Nec feugiat nisl</li>
                                                <li>Nulla at volutpat dola</li>
                                                <li>Pharetra massa</li>
                                                <li>Massa ultricies mi</li>
                                            </ul>
                                            <a href="#" class="btn-buy">Buy Now</a>
                                        </div>
                                    </div>

                                    <div class="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="400">
                                        <div class="box">
                                            {/* <h3 style="color: #ff0071;">Ultimate Plan</h3> */}
                                            <div class="price"><sup>$</sup>49<span>/mo</span></div>
                                            <img src="images/Front/pricing-ultimate.png" class="img-fluid" alt="" />
                                            <ul>
                                                <li>Aida dere</li>
                                                <li>Nec feugiat nisl</li>
                                                <li>Nulla at volutpat dola</li>
                                                <li>Pharetra massa</li>
                                                <li>Massa ultricies mi</li>
                                            </ul>
                                            <a href="#" class="btn-buy">Buy Now</a>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </section>


                        <section id="contact" class="contact">

                            <div class="container" data-aos="fade-up">

                                <header class="section-header">
                                    <h2>Contact</h2>
                                    <p>Contact Us</p>
                                </header>

                                <div class="row gy-4">

                                    <div class="col-lg-6">

                                        <div class="row gy-4">
                                            <div class="col-md-6">
                                                <div class="info-box">
                                                    <i class="bi bi-geo-alt"></i>
                                                    <h3>Address</h3>
                                                    <p>A108 Adam Street,<br />New York, NY 535022</p>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="info-box">
                                                    <i class="bi bi-telephone"></i>
                                                    <h3>Call Us</h3>
                                                    <p>+1 5589 55488 55<br />+1 6678 254445 41</p>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="info-box">
                                                    <i class="bi bi-envelope"></i>
                                                    <h3>Email Us</h3>
                                                    <p>info@example.com<br />contact@example.com</p>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="info-box">
                                                    <i class="bi bi-clock"></i>
                                                    <h3>Open Hours</h3>
                                                    <p>Monday - Friday<br />9:00AM - 05:00PM</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="col-lg-6">
                                        <form action="forms/contact.php" method="post" class="php-email-form">
                                            <div class="row gy-4">

                                                <div class="col-md-6">
                                                    <input type="text" name="name" class="form-control" placeholder="Your Name" required />
                                                </div>

                                                <div class="col-md-6 ">
                                                    <input type="email" class="form-control" name="email" placeholder="Your Email" required />
                                                </div>

                                                <div class="col-md-12">
                                                    <input type="text" class="form-control" name="subject" placeholder="Subject" required />
                                                </div>

                                                <div class="col-md-12">
                                                    <textarea class="form-control" name="message" rows="6" placeholder="Message" required></textarea>
                                                </div>

                                                <div class="col-md-12 text-center">
                                                    <div class="loading">Loading</div>
                                                    <div class="error-message"></div>
                                                    <div class="sent-message">Your message has been sent. Thank you!</div>

                                                    <button type="submit">Send Message</button>
                                                </div>

                                            </div>
                                        </form>

                                    </div>

                                </div>

                            </div>

                        </section>


                    </div>

                    <footer id="footer" class="footer">


                        <div class="footer-top">
                            <div class="container">
                                <div class="row gy-4">
                                    <div class="col-lg-5 col-md-12 footer-info">
                                        <a href="index.html" class="logo d-flex align-items-center">
                                            <img src="images/Front/logo.png" alt="" />
                                            <span>TreeTronix</span>
                                        </a>
                                        <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
                                        <div class="social-links mt-3">
                                            <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
                                            <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
                                            <a href="#" class="instagram"><i class="bi bi-instagram bx bxl-instagram"></i></a>
                                            <a href="#" class="linkedin"><i class="bi bi-linkedin bx bxl-linkedin"></i></a>
                                        </div>
                                    </div>

                                    <div class="col-lg-2 col-6 footer-links">
                                        <h4>Useful Links</h4>
                                        <ul>
                                            <li><i class="bi bi-chevron-right"></i> <a href="#">Home</a></li>
                                            <li><i class="bi bi-chevron-right"></i> <a href="#">About us</a></li>
                                            <li><i class="bi bi-chevron-right"></i> <a href="#">Services</a></li>
                                            <li><i class="bi bi-chevron-right"></i> <a href="#">Terms of service</a></li>
                                            <li><i class="bi bi-chevron-right"></i> <a href="#">Privacy policy</a></li>
                                        </ul>
                                    </div>

                                    <div class="col-lg-2 col-6 footer-links">
                                        <h4>Our Services</h4>
                                        <ul>
                                            <li><i class="bi bi-chevron-right"></i> <a href="#">Web Design</a></li>
                                            <li><i class="bi bi-chevron-right"></i> <a href="#">Web Development</a></li>
                                            <li><i class="bi bi-chevron-right"></i> <a href="#">Product Management</a></li>
                                            <li><i class="bi bi-chevron-right"></i> <a href="#">Marketing</a></li>
                                            <li><i class="bi bi-chevron-right"></i> <a href="#">Graphic Design</a></li>
                                        </ul>
                                    </div>

                                    <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                                        <h4>Contact Us</h4>
                                        <p>
                                            A108 Adam Street <br />
                                            New York, NY 535022<br />
                                            United States <br /><br />
                                            <strong>Phone:</strong> +1 5589 55488 55<br />
                                            <strong>Email:</strong> info@example.com<br />
                                        </p>

                                    </div>

                                </div>
                            </div>
                        </div>

                        <div class="container">
                            <div class="copyright">
                                &copy; Copyright <strong><span>TreeTronix</span></strong>. All Rights Reserved
                            </div>
                        </div>
                    </footer>

                    <a href="#"
                        class="back-to-top d-flex align-items-center justify-content-center active">
                        <i class="bi bi-arrow-up-short"></i>
                    </a>



                    {/* SIGN IN MODAL */}
                    <Modal
                        show={this.state.showSignIn}
                        onHide={this.handleCloseSignIn}
                        backdrop="static"
                        keyboard={true}
                        size="lg"

                    >

                        <div onClick={this.handleCloseSignIn}>X</div>

                        <Modal.Body>
                            <br />
                            <Container>
                                <Row>
                                    <Form >
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email"
                                                onChange={e => {
                                                    this.setState({ username: e.target.value })
                                                }} />
                                            <Form.Text className="text-muted">
                                                We'll never share your email with anyone else.
                                            </Form.Text>
                                        </Form.Group>
                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Password"
                                                onChange={e => {
                                                    this.setState({ password: e.target.value })
                                                }} />
                                        </Form.Group>
                                        <br />
                                        <center><Button variant="outline-primary" onClick={this.handleLogin.bind(this)}>LOGIN</Button></center>
                                    </Form>

                                    {loginVerif ? <Alert variant="danger">{loginVerif}</Alert> : null}


                                </Row>
                            </Container><br />
                        </Modal.Body>
                        <Button variant="outline-danger" onClick={this.handleCloseSignIn}>Close</Button>
                    </Modal>












                    {/* SIGN UP MODAL */}
                    <Modal
                        show={this.state.showSignUp}
                        onHide={this.handleCloseSignUp}
                        backdrop="static"
                        keyboard={false}
                        size="lg"
                    >
                        <Modal.Body>
                            <br /><br />
                            <Form>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                </Form.Row>

                                <Form.Group controlId="formGridAddress1">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control placeholder="1234 Main St" />
                                </Form.Group>

                                <Form.Group controlId="formGridAddress2">
                                    <Form.Label>Address 2</Form.Label>
                                    <Form.Control placeholder="Apartment, studio, or floor" />
                                </Form.Group>

                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridCity">
                                        <Form.Label>City</Form.Label>
                                        <Form.Control />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridState">
                                        <Form.Label>State</Form.Label>
                                        <Form.Control as="select" defaultValue="Choose...">
                                            <option>Choose...</option>
                                            <option>...</option>
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridZip">
                                        <Form.Label>Zip</Form.Label>
                                        <Form.Control />
                                    </Form.Group>
                                </Form.Row>

                                <Form.Group id="formGridCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    submit
                                </Button>
                            </Form>
                            <br /><br />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleCloseSignUp}>Close</Button>
                        </Modal.Footer>
                    </Modal>


                </body>
            </div>


        );
    }
}


// export default index_front;