<script>
    import Menu from "./Menu.svelte";

    export let menuItem;
    export let level;

    //TODO: change to correct live URL
    let baseUrl = 'https://shopnav-langwebsite.pantheonsite.io';
</script>

<li class="main-menu__item with-image main-menu__item--sub main-menu__item--sub-{level} sub-menu__item" class:main-menu__item--with-sub={menuItem.children.length > 0} class:sub-menu__item--with-sub={menuItem.children.length > 0}>
    {#if menuItem.image.length > 0}
        <img src={baseUrl + menuItem.image} width="300" height="300" loading="lazy" typeof="foaf:Image">
    {/if}
    <a href="{menuItem.url}">{menuItem.name}</a>
    {#if menuItem.children.length > 0}
        <Menu menu="{menuItem.children}" level="{menuItem.level}"></Menu>
        {#if level === 1}
            <span class="expand-sub"><i></i></span>
        {/if}
    {/if}
</li>

<style>

</style>