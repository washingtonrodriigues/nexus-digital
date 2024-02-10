"use client"

import Image from "next/image";
import BlackBtn from "../../components/ui/black-btn"
import styles from './styles.module.css'

const Experts = () => {
    return (
        <div className="relative">
            <div className="h-[240px] lg:h-[350px] bg-[#42c6ff]  font-ubuntu text-black overflow-hidden flex items-center justify-between lg:flex-row-reverse">
                <div className="flex flex-col pl-[15px] lg:pr-[15%] text-nowrap">
                    <p className="text-[2.2rem] leading-[40px]  font-semibold lg:text-[3rem]">Acesse o topo</p>
                    <p className="text-[2rem] leading-[40px]" style={{ fontWeight: 'normal' }}>com a gente!</p>
                    <BlackBtn style={{ marginLeft: 0 }} className="text-sm gap-[5px] lg:text-base w-[160px]" href="#" title="Eu quero" />
                </div>
                <div>
                    <svg class=" h-auto w-[300px] lg:w-[700px] object-fit-cover top-50 " viewBox="0 0 863 828" fill="none">
                        <path d="M507.767 28.1026L507.767 28.1025L507.858 28.0861C509.594 27.7705 511.359 27.4495 513.119 27.0567L512.792 25.5927L513.119 27.0567L606.167 6.27868C629.388 1.09223 653.407 0.562006 676.835 4.71865C700.307 8.88569 722.726 17.6478 742.804 30.502C762.937 43.3921 780.343 60.1111 794.032 79.7097L795.262 78.8507L794.032 79.7098C807.75 99.3448 817.494 121.474 822.716 144.85L856.612 296.651C861.838 320.031 862.439 344.207 858.38 367.818C854.333 391.383 845.695 413.924 832.958 434.16C820.256 454.339 803.693 471.81 784.22 485.571C764.783 499.302 742.816 509.042 719.59 514.227L719.917 515.691L719.59 514.227L246.768 619.806C245.891 619.999 244.985 620.016 244.101 619.857C243.217 619.698 242.373 619.366 241.618 618.88C240.081 617.891 238.996 616.336 238.599 614.552L237.135 614.878L238.599 614.551C232.007 584.965 237.349 553.993 253.447 528.445C269.545 502.898 295.08 484.866 324.439 478.311L646.826 406.323C668.616 401.457 687.566 388.071 699.506 369.112C711.446 350.155 715.399 327.178 710.5 305.237L686.778 199.002C681.878 177.061 668.526 157.948 649.656 145.87C630.786 133.792 607.943 129.737 586.152 134.604L265.793 206.139C265.791 206.139 265.789 206.139 265.788 206.14C264.017 206.521 262.167 206.185 260.644 205.204C259.109 204.216 258.022 202.665 257.619 200.885C251.027 171.298 256.369 140.326 272.467 114.778C288.565 89.2311 314.1 71.1992 343.459 64.6437L502.456 29.1407L502.456 29.1406C504.216 28.7473 505.977 28.4275 507.767 28.1026ZM350.279 800.457L350.606 801.921L350.279 800.457L257.231 821.235C234.009 826.421 209.99 826.952 186.563 822.795C163.09 818.628 140.671 809.866 120.593 797.012C100.46 784.122 83.0546 767.403 69.3653 747.804L68.1356 748.663L69.3652 747.804C55.6474 728.169 45.9032 706.04 40.6815 682.664L6.78554 530.863L5.32159 531.19L6.78546 530.863C1.55932 507.483 0.958491 483.307 5.01689 459.696L3.53864 459.442L5.01692 459.696C9.06443 436.13 17.702 413.59 30.439 393.354C43.1409 373.175 59.7041 355.703 79.1771 341.943C98.6139 328.212 120.581 318.472 143.807 313.287L616.629 207.707C616.63 207.707 616.632 207.707 616.633 207.706C617.509 207.515 618.414 207.498 619.297 207.657C620.181 207.816 621.025 208.148 621.78 208.633C623.316 209.623 624.401 211.178 624.798 212.962C631.391 242.549 626.049 273.521 609.951 299.068C593.853 324.616 568.317 342.647 538.959 349.203L216.572 421.191C194.781 426.056 175.831 439.443 163.891 458.402C151.951 477.359 147.999 500.336 152.898 522.277L176.62 628.512C181.52 650.453 194.871 669.566 213.741 681.643C232.611 693.722 255.455 697.776 277.245 692.91L597.604 621.375C597.606 621.375 597.607 621.375 597.608 621.374C599.379 620.992 601.23 621.328 602.754 622.309C604.29 623.298 605.377 624.851 605.779 626.634C612.37 656.218 607.028 687.189 590.93 712.735C574.833 738.283 549.297 756.314 519.939 762.87L360.942 798.373C359.182 798.766 357.42 799.086 355.631 799.411L355.539 799.428C353.803 799.743 352.038 800.064 350.279 800.457Z" stroke="#FFFFFF" stroke-width="3"></path>
                    </svg>
                    <picture>
                        <source media="(min-width: 767px)" srcset="/man-img-desktop.png" />
                        <img className="absolute lg:height-100vh-plus-32px height-90vh-plus-10vw w-max right-0 bottom-0 lg:right-auto lg:left-[20%]" src="/man-img-mobile.png" alt="Fale com um de nossos especialistas" />
                    </picture>
                </div>
            </div>
        </div>
    );
}

export default Experts;