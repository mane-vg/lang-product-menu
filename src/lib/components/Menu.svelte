<script>
    import MenuItem from "./MenuItem.svelte";
    import { _ } from 'svelte-i18n';

    export let menu;
    export let level = 1;

    let overviewItem = $_('overview');
    let newItem = $_('new');
</script>

<ul class="sub-menu sub-menu--sub sub-menu--sub-{level}">
    {#each menu as menuItem}
        <MenuItem menuItem={menuItem} level="{level}"></MenuItem>
    {/each}
    {#if level === 1}
        <MenuItem menuItem={overviewItem} level={level}></MenuItem>
        <MenuItem menuItem={newItem} level={level}></MenuItem>
    {/if}
</ul>

<style>

</style>