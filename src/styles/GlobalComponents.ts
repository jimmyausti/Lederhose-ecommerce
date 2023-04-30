import styled from "styled-components"

export const Container = styled.div`
    /* display: grid; */
    height: 100vh;
    color: white;
`
export const Row = styled.div`
    display: flex;
`

interface ColProps {
    size: number
}

export const Col = styled.div<ColProps>`
    flex: ${(props) => props.size};
    border: 1px solid white;
`