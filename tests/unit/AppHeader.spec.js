import { shallowMount } from '@vue/test-utils'
import AppHeader from '@/components/AppHeader.vue'

describe('AppHeader.vue', () => {
  const TITLE = 'Das Titlen'
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(AppHeader, {
      propsData: {
        title: TITLE
      }

    })
  })

  it('renders the title when passed', () => {
    // eslint-disable-next-line no-undef
    expect(wrapper.text()).toMatch(TITLE)
  })
})
