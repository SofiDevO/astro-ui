export function uiStyle (tag, variants , select) {
    if (tag === undefined) return;

    select.addEventListener('change', (e) => {
        e.preventDefault();
        const selectedColor = select.value;
        tag.setAttribute('class', (variants[selectedColor]) );

    });
}