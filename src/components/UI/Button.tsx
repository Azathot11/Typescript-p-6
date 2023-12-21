import {type FC, type ComponentPropsWithoutRef} from 'react';
import {Link} from 'react-router-dom';

type BaseProps = {
    textOnly:boolean
}

type LinkProps =BaseProps & ComponentPropsWithoutRef<typeof Link>

type ButtonProps = BaseProps & ComponentPropsWithoutRef<'button'>

type CombinedProps= LinkProps | ButtonProps

const Button:FC<CombinedProps> = (props) => {
    const {textOnly} = props;
    const isLink = 'to' in props;
    if(isLink){
        return <Link className={`button ${textOnly && 'button--text-only'}`} {...props}  />;
    }

    return (
        <button className={`button ${textOnly && 'button--text-only'}`} {...props}>
        </button>
    );
};

export default Button;