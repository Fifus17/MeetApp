
export interface DotProps {
    color: string;
}

const Dot = (props: DotProps) => {

    return (
        <div class={`h-1 w-1 bg-${props.color} rounded-full mx-[2px] mt-[2px]`}></div>
    )
}

export default Dot;