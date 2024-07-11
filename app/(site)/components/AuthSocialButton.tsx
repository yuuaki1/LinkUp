import { IconType } from "react-icons";

interface AuthSocialButtonProps {
    icon: IconType;
    onClick: () => void;

}

const AuthSocialButton: React.FC<AuthSocialButtonProps> = ({
    icon: Icon, onClick
}) => {
    return ( 
        <button type="button" onClick={onClick} className="inline-flex w-full justify-center bg-gray-900 rounded-md px-4 py-3 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-500 hover:bg-gray-900 focus:outline-offset-0">
            <Icon />
        </button>
     );
}
 
export default AuthSocialButton;