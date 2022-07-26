import cat from './imgs/cat.jpeg';
import catHide from './imgs/cat-hide.jpeg';
import eye from './imgs/eye.png';
import eyeSlash from './imgs/eyeSlash.png';
import './App.css';
import { useState } from 'react';

function App() {
    const [isCatHide, setIsCatHide] = useState(false);
    const [isHide, setIsHide] = useState(true);

    const checkIfHide = (e) => {
        console.log('hi', e.target.tagName);
        if (e.target.tagName === 'INPUT' && e.type === 'focus') {
            setIsCatHide(isHide);
        } else if (e.target.tagName === 'INPUT' && e.type === 'blur') {
            setIsCatHide(false);
        } else if (e.target.tagName === 'DIV') {
            setIsCatHide(false);
        } else if (e.target.tagName === 'IMG') {
            const nowHide = !isHide;
            setIsCatHide(nowHide);
            setIsHide(nowHide);
        }
    };
    return (
        <div
            className="App"
            style={{ width: '100%', height: '100vh' }}
            onClick={checkIfHide}
        >
            <img src={isCatHide ? catHide : cat} style={{ height: '100px' }} />
            <div>
                <div>
                    <input type="text" />
                </div>
                <div
                    style={{
                        position: 'relative',
                        width: 'fit-content',
                        margin: 'auto',
                    }}
                >
                    <input
                        type={isHide ? 'password' : 'text'}
                        onFocus={checkIfHide}
                        onBlur={checkIfHide}
                    />
                    <div
                        style={{ position: 'absolute', right: '0', top: '0' }}
                        onClick={checkIfHide}
                    >
                        <img
                            src={isHide ? eyeSlash : eye}
                            style={{ width: '30px' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
