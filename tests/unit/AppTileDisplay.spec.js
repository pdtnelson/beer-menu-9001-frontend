import { shallowMount} from '@vue/test-utils'
import AppTileDisplay from '@/components/AppTileDisplay'
import App from '@/App'

describe('AppTileDisplay.vue', () => {
    // define any constant test values
    const TILE_DATA = [
        {id: 1, name: 'Tile 1', description: 'The first tile'},
        {id: 2, name: 'Tile 2', description: 'The second tile'},
        {id: 3, name: 'Tile 3', description: 'The third tile'}
    ]

    const INCOMPLETE_TILE_DATA = [
        {id: 1, description: 'A tile with no name'},
        {id: 2, name: 'I only have a name'},
        {id: 3, name: 'The good one', description: 'A complete piece of tile data'}
    ]
    const RESOURCE_PATH = '/resource'
    const DEFAULT_IMG = 'base64(\'koalasarecool\')'

    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(AppTileDisplay, {
            propsData: {
                tileData: TILE_DATA,
                resourcePath: RESOURCE_PATH,
                defaultImg: DEFAULT_IMG
            }
        })
    })

    it('renders 3 tiles for the 3 resources provided as a prop', () => {
        expect(wrapper.vm.$children.length).toBe(3)
    })
})