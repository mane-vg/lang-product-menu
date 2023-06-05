<script>
    import {onMount} from "svelte";
    import MenuItem from "./MenuItem.svelte";
    import { _ } from 'svelte-i18n';

    export let menu;
    export let level = 1;
    let allUrl = '';

    onMount(() => {
        if(menu[0] && menu[0].url) {
            let firstChild = menu[0].url.split('/');
            firstChild.pop();
            allUrl = firstChild.join('/');
        }
    });
</script>

<ul class="sub-menu sub-menu--sub sub-menu--sub-{level}">
    {#each menu as menuItem}
        <MenuItem name={menuItem.name} image={menuItem.image} url={menuItem.url} children={menuItem.children} level="{level}" />
    {/each}
    {#if level === 1}
        <MenuItem name={$_('overview.name')} image={$_('overview.image', { default: '' })} url={$_('overview.url')} level={level} />
        <MenuItem  name={$_('new.name')} image={$_('new.image', { default: '' })} url={$_('new.url')} level={level} />
    {/if}
    {#if level > 2}
        <MenuItem name={$_('all.name')} image={$_('all.image', { default: '' })} url="{allUrl}" all="{true}" level={level} />
    {/if}
</ul>

<style>

</style>