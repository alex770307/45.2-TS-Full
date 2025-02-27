interface IMyButtonProps {
    type?: "button" | "submit" | "reset";
    children: string;
}
export default function MyButton({type, children}: IMyButtonProps) {
   
    return <button type={type}>{children}</button>
}