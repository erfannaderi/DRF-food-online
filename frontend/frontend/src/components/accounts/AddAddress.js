import CustomerSidebar from "../includes/CustomerSidebar";
import AutoComplete from "../includes/AutoComplete";

export default function AddAddress() {
    return (
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-3 col-12 mb-2'>
                    <CustomerSidebar />
                </div>
                <div className='col-md-9 col-12 mb-2'>
                    <div className='card'>
                        <h4 className='card-header mb-2 bg-black text-white-50 rounded-4'>Add New Address</h4>
                        <div className='card-body'>
                            <form>
                                {/*<div className="mb-3 row">*/}
                                {/*    <label className='col-sm-2 col-form-label' htmlFor='id_address'>Address</label>*/}
                                {/*    <div className="col-sm-10">*/}
                                {/*        <input type='text' className='rounded-4 w-50form-control' name='address' id='id_address' placeholder='Enter address'/>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                <AutoComplete/>
                                <div className="mb-3 row">
                                    <label className='col-sm-2 col-form-label' htmlFor="id_country">Country</label>
                                    <div className="col-sm-10">
                                        <input type='text' className='rounded-4 w-50form-control' name='country' id='id_country' placeholder='Enter country'/>
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label className='col-sm-2 col-form-label' htmlFor='id_state'>State</label>
                                    <div className="col-sm-10">
                                        <input type='text' className='rounded-4 w-50form-control' name='state' id='id_state' placeholder='Enter state'/>
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label className='col-sm-2 col-form-label' htmlFor='id_city'>City</label>
                                    <div className="col-sm-10">
                                        <input type='text' className='rounded-4 w-50form-control' name='city' id='id_city' placeholder='Enter city'/>
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label className='col-sm-2 col-form-label' htmlFor='id_pin_code'>Pin Code</label>
                                    <div className="col-sm-10">
                                        <input type='text' className='frounded-4 w-50orm-control' name='pin_code' id='id_pin_code' placeholder='Enter pin code'/>
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label className='col-sm-2 col-form-label' htmlFor='id_latitude'>Latitude</label>
                                    <div className="col-sm-10">
                                        <input type='text' className='rounded-4 w-50form-control' name='latitude' id='id_latitude' placeholder='Enter latitude'/>
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label className='col-sm-2 col-form-label' htmlFor='id_longitude'>Longitude</label>
                                    <div className="col-sm-10">
                                        <input type='text' className='rounded-4 w-50form-control' name='longitude' id='id_longitude' placeholder='Enter longitude'/>
                                    </div>
                                </div>
                                <button type='submit' className="btn btn-primary float-end">Add New Addressss!</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
