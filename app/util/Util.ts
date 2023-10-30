class Util {


    static getDeviceType(): 'mobile' | 'tablet' | 'desktop' {
        const width = window.innerWidth;
        let type: 'mobile' | 'tablet' | 'desktop' = 'mobile';
        if (width <= 768) {
            type = 'mobile';
        } else if (width > 768 && width <= 1024) {
            type = 'tablet';
        } else {
            type = 'desktop'
        }
        return type;
    }
}