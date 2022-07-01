import React, {Component} from "react";
import styled from "styled-components";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component{

    componentDidMount(){
        window.addEventListener('keydown', this.handleKeydown)
    }

    componentWillUnmount(){
        window.removeEventListener('keydown', this.handleKeydown);
    }

    handleKeydown = e => {
        if(e.code === 'Escape'){
            this.props.onToggleModal();
        }
    }

    handleBackdropClick = e => {
        if (e.currentTarget === e.target){
            this.props.onToggleModal();
        }
    }
    
    render (){
        return( createPortal(
            <Backdrop onClick={this.handleBackdropClick}>
                <StyledModal>{this.props.children}</StyledModal>
            </Backdrop>, modalRoot)
        )
    }
}

const Backdrop = styled('div')`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: ${p => p.theme.colors.muted};

`;

const StyledModal = styled('div')`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-height: 300px;
    max-width: 600px;
    width: 100%;
    padding: ${p => p.theme.space[5]}px;
    background-color: ${p => p.theme.colors.white};
    box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2),
    0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px -0px rgba(0,0,0,0.2)
`;
