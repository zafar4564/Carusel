class Slider {
    constructor(obj) {
        this.slider = document.querySelector(obj.el)
        this.sliderBox = this.slider.querySelector('.slider__box')
        this.sliderItem = this.sliderBox.children
        this.prev = this.slider.querySelector('.slider__prev')
        this.next = this.slider.querySelector('.slider__next')
        this.activeSlide = 0
        this.height = this.slider.clientHeight
        this.width = this.slider.clientWidth
        this.moveSize = this.height
        this.sliderBox.style = `position:relative;
                                height: ${this.height}px;
                                overflow:hidden;`

        for (let i = 0; i < this.sliderItem.length; i++) {
            const elem = this.sliderItem[i];
            elem.style = `position: absolute;
                          width: ${this.width}px;
                          height: ${this.height}px`


            if (i != this.activeSlide) {
                elem.style.transform = `translateY(${this.moveSize}px)`
            }
            if (i == this.sliderItem.length - 1) {
                elem.style.transform = `translateY(-${this.moveSize}px)`
            }

        }
        this.next.addEventListener('click', () => this.clickBtn(this.next))
        this.prev.addEventListener('click', () => this.clickBtn(this.prev))

    }
    clickBtn(btn) {
        const nextOrPrev = btn == this.next ? this.moveSize * -1 : this.moveSize
        for (let i = 0; i < this.sliderItem.length; i++) {
            const el = this.sliderItem[i];
            if (i != this.activeSlide) {
                el.style.transform = `translateY(${nextOrPrev * -1}px)`
            }
        }
        this.sliderItem[this.activeSlide].style.transform = `translateY(${nextOrPrev}px)`
        if (btn == this.next) {
            this.activeSlide++
            if (this.activeSlide >= this.sliderItem.length) {
                this.activeSlide = 0
            }
        } else if (btn == this.prev) {
            this.activeSlide--
            if (this.activeSlide < 0) {
                this.activeSlide = this.sliderItem.length - 1
            }
        }
        this.sliderItem[this.activeSlide].style.transform = `translateY(0px)`
    }
}
const slider = new Slider({
    el: '#carousel'
})