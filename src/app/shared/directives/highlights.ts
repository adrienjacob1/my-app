import { AfterViewInit, Directive, ElementRef, HostListener, Input, Renderer2 } from "@angular/core";


@Directive({
    selector: "[highlight]"
})

export class HighLightDirective implements AfterViewInit { // AfterViewInit est une interface. Le decorateur @Directive precise à angular que notre classe est une directive

        @Input() color = "yellow";

        constructor(private el: ElementRef, 
                    private renderer: Renderer2) {}

        ngAfterViewInit(): void {
            this.setBackgroundColor(this.color);
        }
        
        setBackgroundColor(color: string) {
            this.renderer.setStyle(this.el.nativeElement, "background-color", color)
        }

        @HostListener("mouseenter") onMouseEnter() {
            this.setBackgroundColor("red")
        }
        
        @HostListener("mouseleave") onMouseLeave() {
            this.setBackgroundColor(this.color)
        }
}