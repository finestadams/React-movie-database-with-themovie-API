import React from 'react'
const About = () => {
    return (
        <div data-testid="about-1">
            <section className="section section--head section--head-fixed">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-xl-6">
                            <h1 className="section__title section__title--head">FlixTV – Best place for movies</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section section--pb0">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <p className="section__text section__text--small">Many desktop publishing packages and editors now use Lorem Ipsum as their default model text, and a search will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                                <p className="section__text section__text--small">All the Lorem Ipsum generators on the <b>Internet</b> tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                            </div>
                    </div>
                    </div>
            </section>
        </div>
    )
}
export default About