import { createContext, useContext, useState } from 'react';

const OutputContext = createContext();

const OutputContextProvider = (({ children }) => {
    const [llmOutput, setLlmOutput] = useState('No output found');

    return (
        <OutputContext.Provider value ={{llmOutput, setLlmOutput}}>
            {children}
        </OutputContext.Provider>
    );
});

export const useOutputContext = () => {
    const {llmOutput, setLlmOutput} = useContext(OutputContext);
    return [llmOutput, setLlmOutput];
}

export default OutputContextProvider;