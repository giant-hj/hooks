const { useEffect } = require("react");

const useNotification = (title, options) => {
    //if (!("Notification" in window)) {
    //    return;
    //}
    const fireNotif = () => {
        if (Notification.permission !== "granted") {
            Notification.requestPermission().then(permission => {
                if (permission == "granted") {
                    new Notification(title, options);
                }
            })
        } else {
            new Notification(title, options)
        }
    }
    useEffect(() => {

    })
    return fireNotif;
}

export default useNotification;