import React from 'react'
import { Redirect } from 'react-router-dom'

interface RedirectToLandingPageProps {

}

const RedirectToLandingPage: React.FC<RedirectToLandingPageProps> = () => {
        return <Redirect to={{pathname: '/'}} />
}
export default RedirectToLandingPage