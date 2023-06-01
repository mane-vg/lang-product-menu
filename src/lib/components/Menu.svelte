<script>
    import { onMount } from 'svelte';
    import MenuItem from "./MenuItem.svelte";
    import { _ } from 'svelte-i18n';

    export let menu;
    export let level = 1;

    let overviewItem = $_('overview');
    let newItem = $_('new');
    let allItem = $_('all');

    onMount(() => {
        if(menu[0] && menu[0].url) {
            let firstChild = menu[0].url.split('/');
            firstChild.pop();
            allItem.url = firstChild.join('/');
        }
    });
</script>

<ul class="sub-menu sub-menu--sub sub-menu--sub-{level}">
    {#each menu as menuItem}
        <MenuItem menuItem={menuItem} level="{level}" />
    {/each}
    {#if level === 1}
        <MenuItem menuItem={overviewItem} level={level} />
        <MenuItem menuItem={newItem} level={level} />
    {/if}
    {#if level > 2}
        <MenuItem menuItem={allItem} level={level} />
    {/if}
</ul>

<style>

</style>