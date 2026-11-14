
(() => {
    const options = {
        id: "28d51f38-606e-4b84-adb4-5b31fae99557",
        pages: "",
        productId: ""
    };

    if (!window.__TAZOH_PREFETCH_COLLECTION_DATA__) {
        window.__TAZOH_PREFETCH_COLLECTION_DATA__ = ({ id: collectionId, pages: pageFilter, productId }) => {
            const shouldDisplay = (value) => {
                const pagesValue = (value || '').trim();
                if (!pagesValue) return true;
                return pagesValue.split(',').some((keyword) => keyword && window.location.href.includes(keyword.trim()));
            };
            if (!collectionId || !shouldDisplay(pageFilter)) return;
            const getUserDevice = () => {
                try {
                    let deviceId = localStorage.getItem('TazohDeviceId');
                    if (!deviceId) {
                        deviceId = crypto.randomUUID();
                        localStorage.setItem('TazohDeviceId', deviceId);
                    }
                    return deviceId;
                } catch (_error) {
                    return '';
                }
            };
            const getUserSession = (userDevice) => {
                const analytics = window.ShopifyAnalytics;
                if (analytics?.meta?.page?.customerId) return `id_${analytics.meta.page.customerId}`;
                if (typeof analytics?.lib?.user === 'function' && typeof analytics.lib.user().traits === 'function' && analytics.lib.user().traits().uniqToken) {
                    return `token_${analytics.lib.user().traits().uniqToken}`;
                }
                return `device_${userDevice}`;
            };
            const noCache = () => {
                try {
                    const ancestors = window.location.ancestorOrigins;
                    return Boolean(ancestors && Array.from(ancestors).some((ancestor) => ancestor.startsWith('https://admin.shopify.com')));
                } catch (_error) {
                    return false;
                }
            };
            const resolvedProductId = productId || window.ShopifyAnalytics?.meta?.product?.id;
            const apiPath = resolvedProductId
                ? `shoppable/apis/data/product/${resolvedProductId}/${collectionId}`
                : `shoppable/apis/data/collection/${collectionId}`;
            const prefetches = window.__TAZOH_COLLECTION_DATA_PREFETCHES || {};
            window.__TAZOH_COLLECTION_DATA_PREFETCHES = prefetches;
            if (prefetches[apiPath]?.promise) return;
            const userDevice = getUserDevice();
            const apiUrl = `https://data.tazoh.com/${apiPath}${noCache() ? '?cache=false' : ''}`;
            const promise = fetch(apiUrl, {
                method: 'GET',
                headers: {
                    shop: window.Shopify?.shop || window.location.host,
                    'user-device': userDevice,
                    'user-session': getUserSession(userDevice)
                }
            }).then((response) => response.json());
            prefetches[apiPath] = { apiUrl, promise, startedAt: Date.now() };
            promise.catch(() => {});
        };
    }

    window.__TAZOH_PREFETCH_COLLECTION_DATA__(options);
})();
