import axios from 'axios';

export interface CallApiPropsType {
    url: string;
    config: {
        params?: any;
        headers: any;
    };
}

export const callAPI = async ({ url, config }: CallApiPropsType) => {
    return await axios.get(url, config);
};
