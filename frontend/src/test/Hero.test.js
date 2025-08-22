import React from 'react';
import {render,screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from '../landing_page/home/Hero';

//test suite
describe('Hero Component',()=>{
    test('Renders hero image',()=>{
        render(<Hero/>);
        const heroImage=screen.getByAltText("Hero Image");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute('src',"Media/Images/homeHero.png")
    });
    test('Renders signup button',()=>{
        render(<Hero/>);
        const signupButton=screen.getByRole('button',{name:'/signup now/i'});
        expect(signupButton).toBeInTheDocument();
        expect(signupButton).toHaveClass("btn-primary")
    });
});
