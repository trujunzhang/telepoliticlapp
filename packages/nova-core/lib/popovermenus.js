const PopoverMenuType = {
    MoreButton: 0,
    LoggedUserMenu: 1
};

class PopoverMenus {
    constructor(top, left, width, height, type) {
        this.top = top;
        this.left = left;
        this.width = width;
        this.height = height;
        this.type = type;
    }

}

export default PopoverMenus;
