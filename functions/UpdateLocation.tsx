import updateLocation from 'functions/graphql/mutations/updateLocation';

const getPosition = function (options: PositionOptions): Promise<Position> {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
}

export function UpdateLocation(apolloClient) {
    const setLocation = async () => {
        try {
            const { longitude, latitude } = (await getPosition({
                maximumAge: 60 * 10 * 1000,
            })).coords;
            await updateLocation({ latitude, longitude }, apolloClient);
        }
        catch (error) {
            throw error;
        }
    };
    const unsetLocation = async () => {
        await updateLocation({ longitude: 0, latitude: 0 }, apolloClient);
    };
    return { unsetLocation, setLocation };
}
