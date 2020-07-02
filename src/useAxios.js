import defaultAxios from "axios";
import { useState, useEffect } from "react";

const useAxios = (opts, axiosInstance = defaultAxios) => {
    const [state, setState] = useState({
        loading: true,
        error: null,
        data: null
    });
    const [trigger, setTrigger] = useState(0);
    //if (!opts.url) {
    //    return;
    //}
    const refetch = () => {
      setState({
        ...state,
        loading: true
      })
      setTrigger(Date.now());
    }
    useEffect(() => {
      setTimeout(function() { //Start the timer
        axiosInstance(opts)
        .then(data => {
          setState({
            ...state,
            loading: false,
            data: data.data
          });
        })
        .catch(error => {
          setState({
            ...state,
            loading: false,
            error
          })
        })
      }, 1000);
    }, [trigger]);
    return { ...state, refetch };
}

export default useAxios;