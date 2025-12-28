// React is auto-imported by Vite
import { SpinnerDotted } from 'spinners-react';

const Loading = () => {
    return (
        <div className="loader">
            <SpinnerDotted
                color="#6c712e"
                size={80}
            />
            {/* <div>Preparing data...</div> */}
        </div >
    )
}
export default Loading;