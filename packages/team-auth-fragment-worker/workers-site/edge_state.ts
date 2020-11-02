export const hydrateState = (state = {}) => ({
    element: (el: { setInnerContent: (arg0: string) => void }) => {
        el.setInnerContent(JSON.stringify(state))
    },
})
