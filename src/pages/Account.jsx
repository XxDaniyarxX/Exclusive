import './styles/Account.scss';

export default function Account() {
    return (
        <div className="account-container">
            <div className="account-form-container">
                <div className='account-text'>
                    <h4>Home /  <span>My Account</span></h4>
                </div>
                <div className='account-form'>
                    <h4>Welcome! <span>Md Rimel</span></h4>

                </div>
            </div>
            <nav className="account-nav">
                <div className="account-nav-item">
                    <h6>Manage My Account</h6>
                    <div className="account-nav-item-list-1">
                        <h4 className='list-1-1'>My Profile</h4>
                        <h4 className='list-1-2'>Address Book</h4>
                        <h4 className='list-1-3'>My Payment Options</h4>
                    </div>
                    <h6>My Orders</h6>
                    <div className="account-nav-item-list-2" >
                        <h4 className='list-1-2'>My Returns</h4>
                        <h4 className='list-1-3'>My Cancellations</h4>
                    </div>
                    <h6>My WhisList</h6>
                </div>

                <div className='account-nav-edit'>
                    <h4 className='h4-nav'>Edit Your Profile</h4>
                    <div className='account-nav-edit-form'>
                        <div className='account-nav-edit-form-item-1'>
                            <h5 className='h5-edit'>First Name</h5>
                            <input type="text" placeholder='Md' />
                        </div>
                        <div className='account-nav-edit-form-item-1'>
                            <h5 className='h5-edit'>Last Name</h5>
                            <input type="text" placeholder='Rimel' />
                        </div>
                    </div>
                    <div className='account-nav-edit-form-2'>
                        <div className='account-nav-edit-form-item-1'>
                            <h5 className='h5-edit'>Email</h5>
                            <input type="text" placeholder='rimel1111@gmail.com' />
                        </div>
                        <div className='account-nav-edit-form-item-1'>
                            <h5 className='h5-edit'>Address</h5>
                            <input type="text" placeholder='Kingston, 5236, United State' />
                        </div>
                    </div>
                    <div className='account-nav-edit-form-3'>
                        <div className='account-nav-edit-form-item-3-1'>
                            <h5 className='h5-gg'>Password Changes</h5>
                            <input type="text" placeholder='Current Passwod' />
                        </div>
                        <div className='account-nav-edit-form-item-3-1'>
                            <input type="text" placeholder='New Password' />
                        </div>
                        <div className='account-nav-edit-form-item-3-1'>
                            <input type="text" placeholder='Confirm New Passwod' />
                        </div>
                    </div>
                    <div className='account-nav-edit-form-4'>
                        <h4>Cancel</h4>
                        <button className='account-nav-edit-form-button'>Save Changes</button>
                    </div>    
                </div>
            </nav>
        </div>
    )
}


