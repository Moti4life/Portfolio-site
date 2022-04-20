import Router from "next/router";
import { useEffect } from "react";

export const OPACITY_EXIT_DURATION = 1;

// this fix is for the unmounting of css on exit transitions
// see https://github.com/vercel/next.js/issues/17464
// https://github.com/vercel/next.js/issues/17464#issuecomment-1094588632

const routeChange = () => {
    const tempFix = () => {
        const elements = document.querySelectorAll('style[media="x"]');
        elements.forEach((elem) => elem.removeAttribute('media'));
        setTimeout(() => {
            elements.forEach((elem) => elem.remove());
            console.log('tempFix ran');
        }, OPACITY_EXIT_DURATION * 1000);
    };
    tempFix();
};

export const useTransitionFix = () => {
    useEffect(() => {
        Router.events.on('routeChangeComplete', routeChange);
        Router.events.on('routeChangeStart', routeChange);

        console.log('useTransitionFix ran');
        return () => {
            Router.events.off('routeChangeComplete', routeChange);
            Router.events.off('routeChangeStart', routeChange);
        };
    }, []);

    useEffect(() => {
        const pathname = Router.router?.pathname
        const query = Router.router?.query
        Router.router?.push({ pathname, query })
      }, [])
};