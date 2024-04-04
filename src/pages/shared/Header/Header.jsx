import logo from '../../../assets/logo.png';
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-[#706F6F] text-center my-10'>
            <div className='flex justify-center'>
                <img src={logo} alt="" />
            </div>
            <p className='mt-5 mb-3'>Journalism Without Fear or Favour</p>
            <p>{moment().format("dddd, MMMM Do , YYYY")}</p>
        </div>
    );
};

export default Header;