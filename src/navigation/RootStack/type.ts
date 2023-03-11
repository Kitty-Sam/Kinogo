export type RootStackParamList = {
    [RootStackNavigationName.HOME]: undefined;
    [RootStackNavigationName.TOP]: undefined;
    [RootStackNavigationName.TICKETS]: undefined;
    [RootStackNavigationName.PROFILE]: undefined;
};

export enum RootStackNavigationName {
    HOME = 'HomeStack',
    TOP = 'TopStack',
    TICKETS = 'TicketsStack',
    PROFILE = 'Profile',
}
