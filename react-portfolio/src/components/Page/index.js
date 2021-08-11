import React from 'react'
import About from './About'
import Contact from './Contact'
import Portfolio from './Portfolio'
import Resume from './Resume'
import PageContent from './PageContent'

function Page(props) {
    const { currentPage } = props;

    const renderPage = () => {
        switch (currentPage.name) {
            case 'about':
                return <About />;
            case 'contact':
                return <Contact />;
            case 'portfolio':
                return <Portfolio />;
            case 'resume':
                return <Resume />;
        }
    }
    return (
        <div>
            <h2> {currentPage.name} </h2>
            <PageContent>{renderPage()}</PageContent>
        </div>
    )


}