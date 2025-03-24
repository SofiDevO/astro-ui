export function uiStyle (tag, variants , select) {
    console.log(select);
    if (tag === undefined) return;

    select.addEventListener('change', (e) => {
        e.preventDefault();
        console.log(tag);
        const selectedColor = select.value;
        tag.setAttribute('class', (variants[selectedColor]) );

    });
}