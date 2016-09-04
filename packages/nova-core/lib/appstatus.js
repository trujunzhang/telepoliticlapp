class AppStatus {
    registerLayout(layout) {
        this.layout = layout;
    }

    isSearching(search) {
        this.layout.setState({isSearching: search})
    }

    updateCachePost(cachePost) {
        this.layout.setState({cachePost: cachePost});
    }
}

export default AppStatus;
