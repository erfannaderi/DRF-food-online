import { useRef, useEffect } from "react";

const AutoComplete = () => {
    const autoCompleteRef = useRef();
    const inputRef = useRef();

    const options = {
        componentRestrictions: { country: "ir" },
        fields: ["address_components", "geometry", "icon", "name"],
        types: ["establishment"]
    };

    useEffect(() => {
        if (window.google) {
            autoCompleteRef.current = new window.google.maps.places.Autocomplete(
                inputRef.current,
                options
            );
        }
    }, [options]);

    return (
        <div className="mb-3 row">
            <label className='col-sm-2 col-form-label' htmlFor='id_address'>Address</label>
            <div className="col-sm-10">
                <input ref={inputRef}/>
                {/*<input type='text' className='rounded-4 w-50form-control' name='address' id='id_address' placeholder='Enter address'/>*/}
            </div>
        {/*    <div>*/}
            {/*    <label>Enter address:</label>*/}
            {/*    <input ref={inputRef} />*/}
            {/*</div>*/}
        </div>
    );
};

export default AutoComplete;
