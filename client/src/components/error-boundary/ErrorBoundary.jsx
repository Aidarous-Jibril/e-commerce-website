
import React, { Component } from 'react'
import {ErrorImageOverlay, ErrorImageText, ErrorImageContainer} from './errorBoundary.styles';

 class ErrorBoundary extends Component {

    constructor(){
        super();
        this.state= {
            error: false
        }
    }
    static getDerivedStateFromError (error) {
        
        return {error: true};
    }

    componentDidCatch(error, errorInfo){
        console.log(error);
    }
    render() {
       
        if(this.state.error){
            return (
                <ErrorImageOverlay >
                    <ErrorImageContainer  imageUrl='https://i.imgur.com/yW2W9SC.png' />
                    <ErrorImageText>Sorry currently this page is broken </ErrorImageText>
                </ErrorImageOverlay>
            )
            }
        return this.props.children;             
       
    }
}
export default ErrorBoundary;