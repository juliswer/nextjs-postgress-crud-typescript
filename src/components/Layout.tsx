import React from 'react'
import { Container } from 'semantic-ui-react';
import Navbar from 'src/components/Navbar';

export default function Layout(props) {
    return (
        <div>
            <Navbar />
            <Container style={{paddingTop: '2rem'}}>
                {props.children}
            </Container>
        </div>
    )
}
