import * as React from 'react';

type JumbotronProps = React.PropsWithChildren<{
    className?: string;
    id?: string;
}>;

export const Jumbotron = React.forwardRef<HTMLDivElement, JumbotronProps>(function Jumbotron({className, id, children}, ref){
    return(
        <div id={id} ref={ref} className={className} 
        style={{
            padding: "2rem 1rem",
            marginBottom: "2rem",
            borderRadius: "0.3rem"
        }}>
            {children}
        </div>
    )
})
