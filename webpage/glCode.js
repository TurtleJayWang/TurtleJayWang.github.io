main();

function main()
{
    const canvas = document.querySelector("#glCanvas")

    const gl = canvas.getContext("webgl")

    if (gl == null) alert("Your browser does not support WebGL")

    gl.clearColor(0.2, 0.3, 0.3, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT)
}
