import { Article } from '../../../src/entities/Article';

const defaultArticle = {
    title: 'TESTING ARTICLE',
    subtitle: 'БиологиЯ',
    img:
        'https://yandex-images.clstorage.net/vl9Q74Z19/cf01df8jcOW/' +
        'tSyAGf2mVeWyKRm0CKhwPc4iO3i-7pNR9TG4f8hbGUmVWXXRuMhiTLkZE4fuxBC5Hmx3' +
        'GVRTx7K4-4AEuh6WxuB8QQis48MwYm8MoV895O2Ltel_7myFUvD1qWiN2Q0N0Y1jAe8e9BhtAMma5h' +
        'iKZ1JmqlIeQQaneWyTFqvbTBzlZwXROnlbqDC2UjhGYD_wUeu_eaElAtfyZirpw9fNzANBoAh5l' +
        'CoCPMoAG2TZCCgUr6JSV4oLaD2o1Aej084Tf2FIkfC012A385X5Aiz3MFhk_HfuYIwYOONt7I' +
        '7Sh4rMDOKGe1hniLxKS5kjmcCm0GYrHJFPjWX6JRADLNqK0_ysyR2y_xCq-r6bvMCleHDZa' +
        'vE5KCWFUP7mLK6ClMVPSgliRXIVI4W6ws-b6tKM4BukJpUZhYNiey_QDeeTy5q5qwnfP' +
        'TCbrb-7FnICKTx_EeT6fezgiJZ8oKSsy5iNRQ3JY001X6kJc0_PW6jShqwVriAW2cVH5b3hl' +
        'sFk3QITcSgOWDI3VGo_O5S2wOz4sxxs8D4v5Q5Xv2Bt4QMZDQuAyOQJ8RkgxPwPx5HsW8_kGyRgFJ8' +
        'OCuaxJ9kJ45QPlTCqBFW9NFCve3FaNQ2h_Pac5Pw1J6ZOX_HoYWvNkAsMSU_piTmVoQW9xU0W7FwPaN' +
        'Bn51xQhAyv_C7eDKTSCVJ3LQCfPLGV6Piz2faIIfK7FWS7dK1uAdr1ZWdiANaBCsKBqYm' +
        '7U-6BPYIHkOVcgK0fKWYe04WNbXAo1sQs3oAT8CyFX7c1Em26sJ1wzqM585ThO3BmqM6Wv' +
        'GYvZsvezgmEwWRDtFTnifTJh9fqWwYt3WZqU19KzOlwqRaN5BpNWvMkDZ489RXlevfddQe' +
        'pMvuTqvh47i9HWvalrilD2YTBQE5iDTDUoYSzB4_Z7hQIqhCma9ReC0UvcSdfyWUTyZL0' +
        'pAiUszyWZrr6Uz4O6jC10Wx2tWAvSdk_5OUgyc',
    views: 1022,
    createdAt: '26.02.2022',
    userId: '1',
    type: ['SCIENCE'],
    blocks: [],
};

export const createArticle = (article?: Article) => {
    return cy
        .request({
            method: 'POST',
            url: 'http://localhost:8000/articles',
            headers: { authorization: 'Bearer' },
            body: article ?? defaultArticle,
        })
        .then((resp) => resp.body);
};

export const removeArticle = (articleId: string) => {
    return cy.request({
        method: 'DELETE',
        url: `http://localhost:8000/articles/${articleId}`,
        headers: { authorization: 'Bearer' },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            createArticle(article?: Article): Chainable<Article>;
            removeArticle(articleId: string): Chainable<void>;
        }
    }
}
