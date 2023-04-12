// Position can be left-center, left-bottom, right-center, right-bottom, left-top, right-bottom

type HorizontalPosition = 'left' | 'center' | 'right';
type VerticalPosition = 'top' | 'center' | 'bottom';

type ToastProps = {
    position: Exclude<`${HorizontalPosition}-${VerticalPosition}`, 'center-center'> | 'center'
}

export const Toast = ({ position }: ToastProps) => {
    return <div>
        Toast Notification Position {position}
    </div>
}