const Color = {
    MoreButton: 0,
    LoggedUserMenu: 1
};

class PopoverMenus {

    constructor() {
        this.top = 0;
        this.left = 0;
        this.width = 0;
        this.height = 0;
        this.type = Color.MoreButton;
    }

    setPopover(top, left, width, height, type) {
        this.top = top;
        this.left = left;
        this.width = width;
        this.height = height;
        this.type = type;
    }

}

export default PopoverMenus;
