<script>
    import Menu from "./Menu.svelte";

    export let level;
    export let name;
    export let image = '';
    export let children = [];
    export let url;
    export let all = false;

    //TODO: change to correct live URL
    let baseUrl = window.location.origin;
</script>

<li class="main-menu__item with-image main-menu__item--sub main-menu__item--sub-{level} sub-menu__item"
    class:main-menu__item--with-sub={children.length > 0}
    class:sub-menu__item--with-sub={children.length > 0}
    class:sub-menu__item--active={
    (level === 3 && url.split('/')[5] === window.location.pathname.split('/')[5] && url.split('/')[3] === window.location.pathname.split('/')[3])
    || (window.location.pathname.indexOf(url) >= 0 && url.split('/').length > 3 && !all && level !== 3)
    || (window.location.pathname === url && all)
    }>
    {#if image.length > 0}
        <img src={baseUrl + image} width="300" height="300" loading="lazy" typeof="foaf:Image" alt={name}>
    {/if}
    <a href="{url}">{@html name}</a>
    {#if children.length > 0}
        <Menu menu="{children}" level="{level + 1}"></Menu>
        {#if level === 1}
            <span class="expand-sub"><i></i></span>
        {/if}
    {/if}
</li>

<style>
    .sub-menu__item--active > a {
        color: red;
    }
</style>
