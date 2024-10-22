export const updateProfile = (firstname: string, lastname: string) => {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click();
    cy.getByTestId('ProfileCard.firstname').clear().type(firstname);
    cy.getByTestId('ProfileCard.lastname').clear().type(lastname);
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) => {
    return cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: { authorization: `Bearer ${profileId}` },
        body: {
            id: '4',
            first: 'test',
            lastname: 'user',
            age: 22,
            currency: 'RUB',
            country: 'Kazahstan',
            city: 'Kazan',
            username: 'user-tet',
            avatar: 'https://i.pinimg.com/originals/d1/a4/31/d1a4317c9cb787fdc0526e7a44881421.jpg',
        },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(firstname: string, lastname: string): Chainable<void>;
            resetProfile(profileId: string): Chainable<void>;
        }
    }
}
