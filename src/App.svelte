<script>
    import { onMount, afterUpdate } from "svelte";
    import Menu from "./lib/components/Menu.svelte";

    //TODO: change to correct live URL
    let baseUrl = window.location.origin;//'https://shopnav-langwebsite.pantheonsite.io';
    let restPath = '/rest/product-menu';
    let languagePathSegment = '/de';
    let format = '?_format=json';

    let menu = [];
    let sortedMenu = [];
    let menuLevel = 1;

    function buildMenuTree() {
        let baseItems = menu.filter(item => item.pid === '');
        baseItems.forEach((baseItem) => {
            baseItem.level = 2;
            baseItem.children = buildSubtree(baseItem);
        });

        return baseItems;
    }
    function buildSubtree(item) {
        let children = menu.filter(_item => _item.pid === item.tid).sort((a, b) => {
            return a.weight - b.weight;
        });
        if(children) {
            children.forEach((_item) => {
                _item.level = item.level + 1;
                _item.children = buildSubtree(_item);
            });
        }

        return children;
    }

    onMount(() => {
        languagePathSegment = '/' + document.querySelector('html').lang;
        fetch(baseUrl + restPath + languagePathSegment + format, {
            method: 'GET',
        }).then(response => response.json())
            .then(menuData => {
                menu = menuData;
                sortedMenu = buildMenuTree();
            });
    });

</script>

<Menu menu="{sortedMenu}"></Menu>

<style>

</style>
